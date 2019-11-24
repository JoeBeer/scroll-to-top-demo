import {Component, HostListener, Inject, OnInit} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: "app-scroll-to-top",
  templateUrl: "./scroll-to-top.component.html",
  styleUrls: ["./scroll-to-top.component.scss"]
})
export class ScrollToTopComponent implements OnInit {
  windowScrolled: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll(): void {
    if (window.pageYOffset > 200) {
      this.windowScrolled = true;
    } else if (window.pageYOffset < 10) {
      this.windowScrolled = false;
    }
    console.log(document.getElementById("footer"));
    console.log(document.getElementById("footer").offsetHeight);
    console.log(document.documentElement.offsetHeight);
  }

  scrollToTop(): void {
    (function smoothScroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothScroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }
}
