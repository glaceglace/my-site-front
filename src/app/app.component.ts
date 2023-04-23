import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    let style = this.elementRef.nativeElement.ownerDocument.body.style;

    style.backgroundColor = 'var(--gray-400)';
    style.margin = 0;
  }
}
