import { animate, AnimationBuilder, style } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-soon1',
  templateUrl: './soon1.component.html',
  styleUrls: ['./soon1.component.css'],
})
export class Soon1Component implements OnInit {

  @ViewChild('container') container: ElementRef;
  @Input() broWidth: number;
  @Input() fatherWidh: number;


  constructor(private builder: AnimationBuilder) {
   }

  ngOnInit(): void {
  }

  animate() {
    let factory = this.builder.build([
      animate('3s ease-out', style({left: `${this.getMoveDistance()}px`})),
      animate('3s ease-out', style({left: '0px'}))
    ])

    const player = factory.create(this.container.nativeElement);
    player.play();
  }

  private getMoveDistance(): number {

    console.log(this.broWidth, this.fatherWidh);
    
    return this.fatherWidh - this.broWidth - this.container.nativeElement.clientWidth;
  }
}
