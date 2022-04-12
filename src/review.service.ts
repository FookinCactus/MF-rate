import { Injectable } from '@angular/core';
import { Reviews } from "./reviews";
import { REVIEWS } from "./fake-reviews";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  getReviews(): Reviews[] {
    return REVIEWS;
  }

  constructor() { }
}
