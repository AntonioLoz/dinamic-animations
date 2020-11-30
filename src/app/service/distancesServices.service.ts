import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistancesService {


  // lista K-V para almacenar las distancias de los tres elementos
  // base (soon1, soon2, father), en ese orden.
  private $distances: Subject<Map<number,number>>;
  private distances: Map<number, number>;

  constructor() {
    this.$distances = new Subject<Map<number, number>>();
    const distances = new Map<number, number>([
      [1, 0],
      [2, 0],
      [3, 0],
    ]);
    this.setDistances(distances);
   }


  public $getDistances(): Observable<Map<number, number>> {

    return this.$distances.asObservable();
  }

  public setDistances(distances: Map<number, number>) {
    this.distances = distances;
    this.$distances.next(this.distances);
  }

}
