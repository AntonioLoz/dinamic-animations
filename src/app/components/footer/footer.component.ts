import { Component, OnInit } from '@angular/core';
import { FatherComponent } from '../father/father.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private turnControl: boolean;

  constructor(private father: FatherComponent) {
    this.turnControl = true;
   }

  ngOnInit(): void {
  }

  onClick() {
    console.log("TEST[FooterComponent]");
    
    // this.turnControl ? this.father.move(this.father.soon1) : this.father.move(this.father.soon2);
    // this.turnControl = !this.turnControl;
  }

}
