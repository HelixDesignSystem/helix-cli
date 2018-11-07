/*
 * @fileOverview oclif-based command to copy webcomponentsjs polyfills from
 *   node_modules to destination folder (defaults to public/assets)
 *
 */
const chalk = require('chalk');
const fs = require('fs-extra');
const glob = require('glob');

import { Command, flags } from '@oclif/command';

const STATIC_ASSETS = {
  '@webcomponents/webcomponentsjs': {
    files: ['custom-elements-es5-adapter.js', 'webcomponents-bundle.js', 'webcomponents-loader.js'],
    filePatterns: [
      // File patterns use glob syntax via node-glob
      'bundles/webcomponents-*.js'
    ]
  }
};

export default class CopyPolyfills extends Command {
  static description = 'describe the command here';

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
    const { flags } = this.parse(CopyPolyfills);
    const destFolder = flags.output;
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
          const files = glob.sync(pattern, { cwd: srcFolder });
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
