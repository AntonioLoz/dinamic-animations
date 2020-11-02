import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit, AfterViewInit {

  @ViewChild('soon1') soon1: ElementRef;
  @ViewChild('soon2') soon2: ElementRef;
  @ViewChild('container') container: ElementRef;
  soonWidth1: number;
  soonWidth2: number;
  fatherWidth: number;

  constructor(private render: Renderer2) {
   }

  ngOnInit(): void {
    
      
  }

  // De aqui viene el ExpressionChagedAfterBeenCheckedError
  ngAfterViewInit() {
    this.soonWidth1 = this.soon1.nativeElement.clientWidth;
    this.soonWidth2 = this.soon2.nativeElement.clientWidth;
    this.fatherWidth = this.container.nativeElement.clientWidth;
    this.render.listen('window', 'resize', () => {
      this.soonWidth1 = this.soon1.nativeElement.clientWidth;
      this.soonWidth2 = this.soon2.nativeElement.clientWidth;
      this.fatherWidth = this.container.nativeElement.clientWidth;
    });
  }


}
