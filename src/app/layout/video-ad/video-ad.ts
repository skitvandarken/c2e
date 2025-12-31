import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-video-ad',
  imports: [TranslatePipe, Hero],
  templateUrl: './video-ad.html',
  styleUrl: './video-ad.css',
})
export class VideoAd implements AfterViewInit {
  @ViewChild('promoVideo') promoVideoRef!: ElementRef<HTMLVideoElement>;

   constructor(private translate: TranslateService){}

  ngAfterViewInit(): void {
    const video = this.promoVideoRef.nativeElement;
    
    // Ensure video plays even if autoplay is blocked
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        // Autoplay was prevented - show fallback or try again
        video.muted = true;
        video.play().catch(e => console.warn('Video play failed:', e));
      });
    }
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}