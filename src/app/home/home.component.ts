import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService} from '../services/dish.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  dish: Dish;
  leader: Leader;
  promotion: Promotion;

  constructor() { }

  ngOnInit() {
    DishService.getFeaturedDish().subscribe(dish => this.dish = dish);
    PromotionService.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);
    LeaderService.getFeaturedLeader().subscribe(leader => this.leader = leader);
  }

}
