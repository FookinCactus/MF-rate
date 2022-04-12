import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourReviewsComponent } from './your-reviews.component';

describe('ReviewsComponent', () => {
  let component: YourReviewsComponent;
  let fixture: ComponentFixture<YourReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
