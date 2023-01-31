export class User {

    name: string = '';
    active: boolean = false;

    constructor(data: any) {
        this.name = data?.name;
        this.active = data?.active;
    }

}