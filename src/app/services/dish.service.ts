import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable()
export class DishService {

  constructor() { }

  static getDishes(): Observable<Dish[]> {
    return Observable.of(DISHES).delay(2000);
  }

  static getFeaturedDish(): Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => (dish.featured))[0]);
  }

  getDish(id: number): Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]);
  }

  getDishIds(): Observable<number[]> {
    return Observable.of(DISHES.map(dish => dish.id))
  }
}
