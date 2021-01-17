export class MekuteriyaTime {
    datetime: Date;

    constructor ( datetime: Date = new Date('H:m:s') ) {
        this.datetime = datetime;
    }
}