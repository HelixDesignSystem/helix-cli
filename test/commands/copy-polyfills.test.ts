import {expect, test} from '@oclif/test'

describe('copy-polyfills', () => {
  test
    .stdout()
    .command(['copy-polyfills'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['copy-polyfills', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
