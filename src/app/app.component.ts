import { Component } from '@angular/core';

interface todo{
  task:String;
  completed:boolean;
  priority:boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasktitle:string;
  taskPriority:boolean;
  title = 'todopro1';
  
  todoList:Array<todo>=[];
//  List:Array<boolean>=[];
  //high:Array<Number>=[];
   // index=0;
    //j=0;
    constructor(){
      if(localStorage.getItem("STORE")){
        this.todoList= JSON.parse(localStorage.getItem("STORE"));
      }

    }
    
   add() {
      this.todoList.push({
        task: this.tasktitle,
        completed:false,
        priority: this.taskPriority
      });
     this.tasktitle="";
     this.taskPriority=false;
    this.reuse();
  }
  higH()
  {
    
  }
  completed(i)
  {
    //debugger;
    this.todoList[i].completed=!this.todoList[i].completed;
    this.reuse();
  }
  remove(i)
  {
    //console.log("delete");
    this.todoList.splice(i,1);
    this.reuse();
  }
  clear()
  {
    
    this.todoList.splice(0,this.todoList.length);
    localStorage.removeItem("STORE");
  }
  clearComp()
  {
   // debugger;
   // console.log(this.List.length)
    for(let i=0;i<this.todoList.length;i++)
    {
    if(this.todoList[i].completed==true)
    {
    this.todoList.splice(i,1);
    this.reuse();
    i--;
    }
  }
  }
  bsort() {
//this.a = this.high.slice();
//this.high=this.high.slice();
    for (let i = 0; i < this.todoList.length; i++) {
      for (let j = 0; j < this.todoList.length - 1; j++) {
        if (this.todoList[j].priority> this.todoList[j+1].priority) {
          [this.todoList[j], this.todoList[j + 1]] = [this.todoList[j + 1], this.todoList[j]];
        }
      }
    }
  }
  
  reuse()
  {
    localStorage.setItem("STORE",JSON.stringify(this.todoList));
  }
}
