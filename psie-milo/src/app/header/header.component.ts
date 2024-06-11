import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  scrollTo(landingId: string) {
    const element = document.getElementById(landingId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
