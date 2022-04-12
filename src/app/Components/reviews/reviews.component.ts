import { Component, OnInit } from '@angular/core';
import { ReviewService } from "../../../review.service";
import { Reviews } from "../../../reviews";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Reviews[]=[]

  getReviews(): void {
    this.reviews = this.reviewService.getReviews();
  }

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.getReviews();
  }

}
