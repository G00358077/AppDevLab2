//let myArray:Array<string>;

export interface myInterface {
    stringArray:Array<string>;
    addTask(task:string):number;
    listAllTasks(myArray: Array<string>): void;
    deleteTask(myArray: Array<string>, task: string): number;
}