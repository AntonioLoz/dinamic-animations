import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AnimationBuilder, animate, state, style, transition, trigger, animation } from '@angular/animations';


@Component({
  selector: 'app-soon2',
  templateUrl: './soon2.component.html',
  styleUrls: ['./soon2.component.css']
})

export class Soon2Component implements OnInit {

  @ViewChild('container') container: ElementRef;
  @Input() broWidth: number;

  constructor(public builder: AnimationBuilder) { 
  }

  ngOnInit(): void {
  }

  public animate() {
    console.log('TEST: ' + this.getMoveDistance());
    let factory = this.builder.build
      ([
       animate('3s ease', style({ right: `${this.getMoveDistance()}px` })),
       animate('3s ease-out', style({ right: '0px'}))
    ]);
    
    
    const player = factory.create(this.container.nativeElement);
    player.play();
  }
  
  private getMoveDistance(): number {
        
    return this.container.nativeElement.getBoundingClientRect().x - this.broWidth;
  }

}
