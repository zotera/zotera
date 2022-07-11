import { Command } from 'clipanion';

// import { version } from '../package.json';

export class VersionCommand extends Command {
  static paths = [['--version'], ['-v']];

  async execute() {
    const version = 'UNKNOWN';

    this.context.stdout.write(`v${version}`);
    process.exit(0);
  }
}
