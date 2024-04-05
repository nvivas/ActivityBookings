import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Activity } from '../domain/activity.type';
import { ActivityTitlePipe } from './activity-title.pipe';

@Component({
  selector: 'lab-bookings',
  standalone: true,
  template: `
    <article>
      <header>
        <h2>{{ activity | activityTitle }}</h2>
        <div [class]="activity.status">
          <span>{{ activity.location }}</span>
          <span>{{ activity.price | currency }}</span>
          <span>{{ activity.date | date }}</span>
          <span>{{ activity.status | uppercase }}</span>
        </div>
      </header>
      <main>
        <p>Participants: {{ currentParticipants }}</p>
      </main>
      <footer>
        <button>Book now!</button>
        <button>Cancel</button>
      </footer>
    </article>
  `,
  styles: `
    .draft {
      color: violet;
      font-style: italic;
    }
    .published {
      color: limegreen;
    }
    .confirmed {
      color: green;
    }
    .sold-out {
      color: green;
      font-style: italic;
    }
    .done {
      color: orange;
      font-style: italic;
    }
    .cancelled {
      color: red;
      font-style: italic;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe, DatePipe, UpperCasePipe, ActivityTitlePipe],
})
export class BookingsComponent {
  activity: Activity = {
    name: 'Paddle surf',
    location: 'Lake Leman at Lausanne',
    price: 100,
    date: new Date(2025, 7, 15),
    minParticipants: 4,
    maxParticipants: 10,
    status: 'published',
    id: 1,
    slug: 'paddle-surf',
    duration: 2,
    userId: 1,
  };
  currentParticipants = 3;
}
