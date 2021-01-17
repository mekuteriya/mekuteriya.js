import { MekuteriyaTime } from '../src';

describe('Mekuteriya time instance', () => {
    it('Mekuteriya time is exported', () => {
        expect(MekuteriyaTime).toBeInstanceOf(Object);
    })

    it('Mekuteriya time creates MekuteriyaTime instance', () => {
        let time = new Date('H:m:s');
        let mekuteriya_time = new MekuteriyaTime(time);

        expect(mekuteriya_time).toBeInstanceOf(MekuteriyaTime);
    })

    it('Mekuteriya time creates MekuteriyaTime instance with optional argument', () => {
        let mekuteriya_time = new MekuteriyaTime();
        
        expect(mekuteriya_time).toBeInstanceOf(MekuteriyaTime);
    })
})