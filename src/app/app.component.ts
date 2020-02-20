import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasktitle:string;
  title = 'todopro1';
  todoList:Array<string>=[];
  List:Array<boolean>=[];
  high:Array<Number>=[];
   key1='todo'
    key2='complete'
    key3='priority'
    index=0;
    j=0;
    //s='';
   // a:Array<boolean>=[];
    merge(i)
    {
     // console.log(s);
     
      this.add(this.tasktitle,2);
      this.higH(i);
    }
    
   add(tasktitle,j) {
     
    // console.log(tasktitle);
     this.List.push(false);
     if(j==0)
     {
      this.todoList.push(tasktitle);
     this.high.push(2);
     }
     else{
      this.todoList.push("!!".concat(tasktitle));
     
     }
     this.tasktitle=" ";
    this.reuse();
  }
  higH(i)
  {
    if(i==1)
    this.high.push(1);
    //console.log(this.high);
    this.bsort();
    this.reuse();
  }
  completed(i)
  {
    this.List[i]=!this.List[i];
    this.reuse();
  }
  remove(i)
  {
    //console.log("delete");
    this.todoList.splice(i,1);
    this.List.splice(i,1);
    this.reuse();
  }
  clear()
  {
    
    this.todoList.splice(0,this.todoList.length);
  }
  clearComp()
  {
   // debugger;
   // console.log(this.List.length)
    for(let i=0;i<this.List.length;i++)
    {
    if(this.List[i]==true)
    {
    this.todoList.splice(i,1);
    this.List.splice(i,1);
    this.high.splice(i,1);
    this.reuse();
    i--;
    }
  }
  }
  bsort() {
//this.a = this.high.slice();
//this.high=this.high.slice();
    for (let i = 0; i < this.high.length; i++) {
      for (let j = 0; j < this.high.length - 1; j++) {
        if (this.high[j] > this.high[j + 1]) {
        
          [this.high[j], this.high[j + 1]] = [this.high[j + 1], this.high[j]];
          [this.List[j], this.List[j + 1]] = [this.List[j + 1], this.List[j]];
          [this.todoList[j], this.todoList[j + 1]] = [this.todoList[j + 1], this.todoList[j]];
        }
      }
    }
  }
  

  reuse()
  {
    localStorage.setItem(this.key1,JSON.stringify(this.todoList));
    localStorage.setItem(this.key2,JSON.stringify(this.List));
    localStorage.setItem(this.key3,JSON.stringify(this.high));
  }
}
