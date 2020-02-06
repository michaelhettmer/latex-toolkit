import mockConsole from 'jest-mock-console';
import { entry } from '.';

describe('test placeholder', () => {
    it('should call console.log once and return 0', () => {
        mockConsole('log');
        const result = entry();
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(result).toBe(0);
    });
});
