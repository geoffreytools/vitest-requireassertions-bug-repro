import { describe, test, expect } from 'vitest';

describe('describe 1', () => {
    test('expect true to be true', () => {
        expect(true).toBe(true);
    });
});

describe('describe 2', () => {
    test('expect false to be false', () => {
        expect(false).toBe(false);
    });
});