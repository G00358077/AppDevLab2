/*let x:string[];
x = ["hello", "world"];
console.log(x[0]+" "+x[1]);*/

let stringArray: Array<string> = [];
let i: number;

function addTask(task: string): number {
    stringArray.push(task);
    console.log(task + " has been added");

    if (stringArray.length == 1) {
        console.log("there is now " + stringArray.length + " string in the array");
    }
    else {
        console.log("there are now " + stringArray.length + " strings in the array");
    }

    return stringArray.length;
}

function listAllTasks(myArray: Array<string>): void {
    /*for(i=0;i<myArray.length;i++){
        console.log(myArray[i]);
    }*/
    console.log("every string:");

    myArray.forEach(function (item) {
        console.log(item);
    })
}

function deleteTask(myArray: Array<string>, task: string): number {
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

let myString: string = "test";
addTask(myString);
addTask("cool");
listAllTasks(stringArray);
deleteTask(stringArray, "cool");
listAllTasks(stringArray);
deleteTask(stringArray, "great");
listAllTasks(stringArray);