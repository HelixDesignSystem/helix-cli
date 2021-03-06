import { expect, test } from '@oclif/test';

describe('install-deps', () => {
  test
    .stdout()
    .command(['install-deps', '--dry-run'])
    .it('defaults to public/assets', ctx => {
      expect(ctx.stdout).to.contain('public/assets');
    });

  test
    .stdout()
    .command(['install-deps', '--output', 'public/foo', '--dry-run'])
    .it('sets output folder to public/foo', ctx => {
      expect(ctx.stdout).to.contain('public/foo');
    });
});
