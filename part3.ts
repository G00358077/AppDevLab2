import { myInterface } from "./interface";


class myClass implements myInterface {
    stringArray: Array<string> = [];
    i: number;

    addTask(task: string): number {
        this.stringArray.push(task);
        console.log(task + " has been added");
    
        if (this.stringArray.length == 1) {
            console.log("there is now " + this.stringArray.length + " string in the array");
        }
        else {
            console.log("there are now " + this.stringArray.length + " strings in the array");
        }
    
        return this.stringArray.length;
    }

    listAllTasks(myArray: Array<string>): void {
        /*for(i=0;i<myArray.length;i++){
            console.log(myArray[i]);
        }*/
        console.log("every string:");
    
        myArray.forEach(function (item) {
            console.log(item);
        })
    }
    
    deleteTask(myArray: Array<string>, task: string): number {
        let removeString: string;
        let removeIndex: number = myArray.indexOf(task);
    
        if (removeIndex == -1) {
            console.log("error; " + task + " is not in the array");
        }
        else {
            removeString = myArray[removeIndex];
            myArray.splice(removeIndex);
            console.log(removeString + " has been removed");
        }
    
        if (myArray.length == 1) {
            console.log("there is now " + myArray.length + " string in the array");
        }
        else {
            console.log("there are now " + myArray.length + " strings in the array");
        }
    
        return myArray.length;
    }
}

let class1 = new myClass();
//class1.addTask;
class1.addTask("test");
class1.listAllTasks(class1.stringArray);