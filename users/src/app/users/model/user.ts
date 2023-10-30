export class User {
    public get email(): string {
      return this._email;
    }
    public set email(value: string) {
      this._email = value;
    }
    public get username(): string {
      return this._username;
    }
    public set username(value: string) {
      this._username = value;
    }
    public get name(): string {
      return this._name;
    }
    public set name(value: string) {
      this._name = value;
    }
    public get id(): number {
      return this._id;
    }
    public set id(value: number) {
      this._id = value;
    }
    constructor(
        private _id: number,
        private _name: string,
        private _username: string,
        private _email: string
      ){}
      

}
