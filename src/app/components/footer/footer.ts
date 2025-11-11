import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer {
  private targetSection: string | null = null;

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    // Wait for navigation to complete before scrolling
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.targetSection) {
          // 🔹 Delay ensures the DOM is ready
          setTimeout(() => {
            this.viewportScroller.scrollToAnchor(this.targetSection!);
          }, 800);
          this.targetSection = null;
        }
      });
  }

  scrollToService(sectionId: string) {
    this.targetSection = sectionId;

    if (this.router.url === '/services') {
      // If already on the page, scroll immediately
      setTimeout(() => {
        this.viewportScroller.scrollToAnchor(sectionId);
      }, 100);
    } else {
      // Navigate first, scroll after DOM renders
      this.router.navigate(['/services']);
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
