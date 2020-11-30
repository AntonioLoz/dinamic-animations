import { animate, animation, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';
import { Component, ElementRef, Inject, Injectable, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DistancesService } from 'src/app/service/distancesServices.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-soon1',
  templateUrl: './soon1.component.html',
  styleUrls: ['./soon1.component.css'],
  animations: []
})
export class Soon1Component implements OnInit {

  @ViewChild('container') 
  container: ElementRef;
  @Input() 
  broWidth: number;
  @Input() 
  fatherWidh: number;

  private $distances: Observable<Map<number, number>>;
  private distances: Map<number, number>;

  static number: number = 3;

  constructor(private builder: AnimationBuilder, private distanceService: DistancesService) {
    this.distances = new Map<number, number>();
   }

  ngOnInit(): void {
    this.$distances = this.distanceService.$getDistances();
    this.$distances.subscribe((distances: Map<number, number>) => {
      
      this.distances = distances;
    });
  }

  public animate() {
    
    
    let factory: AnimationFactory = this.builder.build([
      animate('3s ease-out', style({left: `${this.getMoveDistance(this.distances)}px`})),
      animate('3s ease-out', style({left: '0px'}))
    ])

    console.log(this.container.nativeElement);
    

    const player: AnimationPlayer = factory.create(this.container.nativeElement);
    player.play();
  }

  private getMoveDistance(distances: Map<number, number>): number {    

    console.log("TEST[Soon1Component]: '/n'", "S2:", this.distances.get(2), "'/n' Father:", this.distances.get(3));
    
    return this.distances.get(3) - this.distances.get(2) - this.distances.get(1);
  }
}
