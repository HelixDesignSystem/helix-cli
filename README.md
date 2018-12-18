helix-cli
=========

Helix CLI

* [Usage](#usage)
* [Commands](#commands)

# Usage

```sh-session
$ npm install -g helix-cli
$ helix COMMAND
running command...
$ helix (-v|--version|version)
helix-cli/0.1.0 darwin-x64 node-v10.6.0
$ helix --help [COMMAND]
USAGE
  $ helix COMMAND
...
```

# Commands

* `helix install-deps [DEST]`
* `helix help [COMMAND]`

## `helix install-deps [DEST]`

Install Helix dependencies -- web component polyfills

```
USAGE
  $ helix install-deps [DEST]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  --dry-run        Show output but don't install deps
```

## `helix help [COMMAND]`

Display help for helix

```
USAGE
  $ helix help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```
