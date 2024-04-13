import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CommonModule } from '@angular/common';
import { BookingsComponent } from './bookings/bookings.component';

@Component({
  selector: 'lab-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule, BookingsComponent],
  template: `
    <lab-header />


    <router-outlet></router-outlet>
    <lab-footer />
  `,
  styles: [],
})
export class AppComponent {

}
