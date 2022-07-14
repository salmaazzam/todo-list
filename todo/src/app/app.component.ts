import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'todo';
  list:any[]=[];
  addTask(item:string){
    if(item.length!=0 || item!=""){
      this.list.push({id:this.list.length,name:item})
    }
    else{
      alert("Enter new text in the text box")
    }

  }

}
