helix-cli
=========

Helix CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/helix-cli.svg)](https://npmjs.org/package/helix-cli)
[![CircleCI](https://circleci.com/gh/HelixDesignSystem/helix-cli/tree/master.svg?style=shield)](https://circleci.com/gh/HelixDesignSystem/helix-cli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/helix-cli.svg)](https://npmjs.org/package/helix-cli)
[![License](https://img.shields.io/npm/l/helix-cli.svg)](https://github.com/HelixDesignSystem/helix-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g helix-cli
$ npm link
$ helix COMMAND
running command...
$ helix (-v|--version|version)
helix-cli/0.1.0 darwin-x64 node-v10.6.0
$ helix --help [COMMAND]
USAGE
  $ helix COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* `helix copy-polyfills [DEST]`
* `helix help [COMMAND]`

## `helix copy-polyfills [DEST]`

Copy select Web Component polyfills from node_modules/@webcomponentsjs to a destination folder

```
USAGE
  $ helix copy-polyfills [DEST]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/copy-polyfills.ts](https://github.com/HelixDesignSystem/helix-cli/blob/v0.1.0/src/commands/copy-polyfills.ts)_


## `helix help [COMMAND]`

display help for helix

```
USAGE
  $ helix help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.3/src/commands/help.ts)_
<!-- commandsstop -->
