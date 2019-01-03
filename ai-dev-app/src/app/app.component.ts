import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { SpeechService } from './speech';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ai-dev-app';
  messages: any[];
  messagesUnsubscribe$: Subscription;

  constructor(private speechService: SpeechService, private zone: NgZone) {
    this.messages = [];
  }

  ngOnInit(): void {
    this.messagesUnsubscribe$ = this.speechService.getMessage().subscribe((message) => {
      this.zone.run(() => {
        this.messages.push(message);
      });
    });
  }

  ngOnDestroy(): void {
    this.messagesUnsubscribe$.unsubscribe();
  }
}
