"use strict";
exports.__esModule = true;
var myClass = /** @class */ (function () {
    function myClass() {
        this.stringArray = [];
    }
    myClass.prototype.addTask = function (task) {
        this.stringArray.push(task);
        console.log(task + " has been added");
        if (this.stringArray.length == 1) {
            console.log("there is now " + this.stringArray.length + " string in the array");
        }
        else {
            console.log("there are now " + this.stringArray.length + " strings in the array");
        }
        return this.stringArray.length;
    };
    myClass.prototype.listAllTasks = function (myArray) {
        /*for(i=0;i<myArray.length;i++){
            console.log(myArray[i]);
        }*/
        console.log("every string:");
        myArray.forEach(function (item) {
            console.log(item);
        });
    };
    myClass.prototype.deleteTask = function (myArray, task) {
        var removeString;
        var removeIndex = myArray.indexOf(task);
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
    };
    return myClass;
}());
var class1 = new myClass();
//class1.addTask;
class1.addTask("test");
class1.listAllTasks(class1.stringArray);
