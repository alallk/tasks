export class Task {
    public id: number;
    public name: string;
    public completed: boolean;
    public dueDate: Date;


    constructor(name: string, completed: boolean, dueDate: Date) {
        this.name = name;
        this.completed = completed;
        this.dueDate = dueDate;
    }
}
