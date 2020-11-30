import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AnimationBuilder, animate, state, style, transition, trigger, animation } from '@angular/animations';
import { DistancesService } from 'src/app/service/distancesServices.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-soon2',
  templateUrl: './soon2.component.html',
  styleUrls: ['./soon2.component.css']
})

export class Soon2Component implements OnInit {

  @ViewChild('container') container: ElementRef;
  @Input() broWidth: number;

  private distances$: Observable<Map<number, number>>;
  private distances: Map<number, number>;

  constructor(public builder: AnimationBuilder, private distancesService: DistancesService) {

  }

  ngOnInit(): void {
    this.distances$ = this.distancesService.$getDistances();
    this.distances$.subscribe((distances: Map<number, number>) =>{
      this.distances = distances;
    });
  }

  public animate() {
    console.log('TEST: ' + this.getMoveDistance());
    let move = {
      'right': `${this.getMoveDistance()}px`
    }
    let factory = this.builder.build
      ([
       animate('3s ease', style(move)),
       animate('3s ease-out', style({ 'right': '0px'}))
    ]);
    
    
    const player = factory.create(this.container.nativeElement);
    setTimeout(() => player.play(), 3000);
    // player.play();
  }
  
  private getMoveDistance(): number {
        
    return this.container.nativeElement.getBoundingClientRect().x - this.distances.get(1);
  }

}
