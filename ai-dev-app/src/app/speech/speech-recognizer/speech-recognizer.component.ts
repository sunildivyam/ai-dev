import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { SpeechService } from '../speech.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-speech-recognizer',
  templateUrl: './speech-recognizer.component.html',
  styleUrls: ['./speech-recognizer.component.scss']
})
export class SpeechRecognizerComponent implements OnInit, OnDestroy {
  messages: any[];
  started: boolean;
  startedUnsubscribe$: Subscription;
  messageUnsubscribe$: Subscription;

  constructor(private speechService: SpeechService, private zone: NgZone) {
    this.started = false;
    this.messages = [];
  }

  ngOnInit() {
    this.startedUnsubscribe$ = this.speechService.getStarted().subscribe((started) => {
      console.log('STATUS: ', started);
      this.zone.run(() => {
        this.started = started;
      });
    });

    this.messageUnsubscribe$ = this.speechService.getMessage().subscribe((message: any) => {
      console.log('MESSAGE:', message);
      this.zone.run(() => {
        this.messages.push(message);
      });
    });
  }

  start() {
    this.speechService.start();
  }

  stop() {
    this.speechService.stop();
  }

  ngOnDestroy(): void {
    this.startedUnsubscribe$.unsubscribe();
    this.messageUnsubscribe$.unsubscribe();
  }
}
