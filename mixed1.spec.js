import { describe, test, expect } from 'vitest';

test('expect true to be true', () => {
    expect(true).toBe(true);
});

describe('describe 1', () => {
    test('expect false to be false', () => {
        expect(false).toBe(false);
    });
});