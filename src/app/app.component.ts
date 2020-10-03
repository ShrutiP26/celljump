import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'celljump';
  constructor(){}
  gridArray : number[] = [0,1,2,3,4,5];
  curr = [0,0];
  position = [0,0];
  highlight : boolean = false;

  onDragOver(event){
    event.preventDefault();
    let currpos: string = event.toElement.id;
    this.position = currpos.split(",").map(val=>parseInt(val));
    this.highlight = true;
  }
  onDrop(pos){
    this.curr=pos;
    this.highlight = false;
  }
}
