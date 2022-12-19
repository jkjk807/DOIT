import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DOIT';
  counter: number = 0;
  task="";
  tasks: string []=[];
  randomTask="";
  max: number = 0;
  removed=0;


  addTask() {
    this.tasks.push(this.task);
  }
  random(){
   // this.randomTask=this.tasks[Math.random() * (this.tasks.length)];
   this.max = Math.floor(this.tasks.length);
   this.removed=Math.floor(Math.random() * (this.max  + 1));
   this.randomTask=this.tasks[this.removed]
   this.tasks.splice(this.removed,1)

  }
}
