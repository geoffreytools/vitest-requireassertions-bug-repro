# Vitest `requireAssertions` bug reproduction

### Description
Tests incorrectly fail with the error:

> Error: expected any number of assertion, but got none

when:
- the test file has different nesting levels of describe blocks
- vite.config.ts includes `requireAssertions: true`
- and tests run with `--sequence.concurrent`

### Additional info
The failing test *appears* to systematically be the least nested one.

## How to reproduce
```bash
npm install
```
This should pass:
```bash
npm run test
```
This should fail:
```bash
npm run test:concurrent
```
