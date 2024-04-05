import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lab-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <nav>
        <a [href]="author.homepage" target="_blank">© {{ year }} {{ author.name }}</a>
        <button (click)="onAcceptClick()">Accept Cookies</button>
      </nav>
    </footer>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  author = {
    name: 'Ignacio Vivas',
    homepage: 'https://albertobasalo.dev',
  };

  year = new Date().getFullYear();
  onAcceptClick() {
    console.log('¡Cookies Aceptadas!');
  }
}
