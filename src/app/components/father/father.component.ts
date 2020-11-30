import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DistancesService } from 'src/app/service/distancesServices.service';
import { Soon1Component } from '../soon1/soon1.component';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit, AfterViewInit {

  @ViewChild('soon1Comp') soon1Comp: Soon1Component;
  @ViewChild('soon2Comp') soon2Comp: Soon1Component;
  @ViewChild('soon1') soon1: ElementRef;
  @ViewChild('soon2') soon2: ElementRef;
  @ViewChild('container') container: ElementRef;

  private $distances: Observable<Map<number,number>>;
  private distances: Map<number, number>;

  constructor(private render: Renderer2, private distancesService: DistancesService) {

    this.distances = new Map<number, number>();
   }

  public ngOnInit(): void {
    this.$distances = this.distancesService.$getDistances();
    this.$distances.subscribe((distances: Map<number, number>) => {

      this.distances = distances;
    });
  }


  // De aqui viene el ExpressionChagedAfterBeenCheckedError
  ngAfterViewInit() {
    
    
    this.distances.set(1, this.soon1.nativeElement.clientWidth);
    this.distances.set(2,this.soon2.nativeElement.clientWidth);
    this.distances.set(3, this.container.nativeElement.clientWidth);

    this.distancesService.setDistances(this.distances);

    this.render.listen('window', 'resize', () => {
    this.distances.set(1, this.soon1.nativeElement.clientWidth);
    this.distances.set(2,this.soon2.nativeElement.clientWidth);
    this.distances.set(3, this.container.nativeElement.clientWidth);

    this.distancesService.setDistances(this.distances);
    });
  }

  public onClick() {
    
    this.soon1Comp.animate();
    this.soon2Comp.animate();
  }


}
