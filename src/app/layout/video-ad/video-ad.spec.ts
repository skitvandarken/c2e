import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAd } from './video-ad';

describe('VideoAd', () => {
  let component: VideoAd;
  let fixture: ComponentFixture<VideoAd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoAd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoAd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
