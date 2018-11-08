/*
 * @fileOverview oclif-based command to copy webcomponentsjs polyfills from
 *   node_modules to destination folder (defaults to public/assets)
 *
 */
import { Command, flags } from '@oclif/command';
import chalk from 'chalk';
import * as fs from 'fs-extra';

import * as globby from 'globby';

const STATIC_ASSETS = {
  '@webcomponents/webcomponentsjs': {
    files: ['custom-elements-es5-adapter.js', 'webcomponents-bundle.js', 'webcomponents-loader.js'],
    filePatterns: [
      // File patterns use glob syntax via node-glob
      'bundles/webcomponents-*.js'
    ]
  }
};

export default class InstallDeps extends Command {
  static description = 'Install Helix Dependencies';

  static flags = {
    help: flags.help({ char: 'h' }),
    // Flag for destination folder  (-o, --output=DESTINATION_FOLDER)
    output: flags.string({
      char: 'o',
      default: 'public/assets',
      description: 'Destination Folder'
    })
  };

  async run() {
    const { flags } = this.parse(InstallDeps);
    const destFolder = flags.output as string;
    const bundlesFolder = `${destFolder}/bundles`;
    const targetFolders = [destFolder, bundlesFolder];

    // Ensure dest folders exist prior to copying assets
    targetFolders.forEach(folder => {
      fs.ensureDirSync(folder);
    });

    // Copy assets
    Object.entries(STATIC_ASSETS).forEach(([srcFolder, fileOptions]) => {
      srcFolder = `node_modules/${srcFolder}`;

      const filesToCopy: string[] = [];

      fileOptions.files.forEach(filename => {
        filesToCopy.push(filename);
      });

      fileOptions.filePatterns &&
        fileOptions.filePatterns.forEach(pattern => {
          const files = globby.sync(pattern, { cwd: srcFolder });
          files.forEach((filename: string) => {
            filesToCopy.push(filename);
          });
        });

      filesToCopy.forEach(filename => {
        const src = `${srcFolder}/${filename}`;
        this.copyFile(src, destFolder, filename);
      });
    });
  }

  private copyFile(src: string, destFolder: string | undefined, filename: string) {
    const dest = `${destFolder}/${filename}`;

    try {
      fs.copyFileSync(src, dest);
      this.log(chalk.green(`Copied ${src} to ${dest}`));
    } catch (err) {
      this.error(chalk.red(`ERROR: Unable to copy ${src} to ${dest}`));
      throw err;
    }
  }
}
