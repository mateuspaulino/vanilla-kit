import Carousel from '../../src/components/Carousel';

describe('Carousel', () => {
    describe('ToBeDefined', () => {
        it('should exist carousel method', () => {
            expect(Carousel).toBeDefined();
        });
    });
    describe('ToBeFunction', () => {
        it('should be a function', async () => {
            expect(typeof Carousel).toBe('function');
        });
    });
});
