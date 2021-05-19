import { sharedModule } from './sharedModule';

describe('sharedModule.ts', () => {
    it('should work', () => {
        expect(sharedModule()).toBe('TypeScript > JavaScript');
    });
});
