import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpeechService } from '../speech.service';

@Component({
  selector: 'app-robo-dev',
  templateUrl: './robo-dev.component.html',
  styleUrls: ['./robo-dev.component.scss']
})
export class RoboDevComponent implements OnInit, OnDestroy {

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

  toggleListen(): void {
    if (!this.started) {
      this.speechService.start();
    } else {
      this.speechService.stop();
    }
  }

  ngOnDestroy(): void {
    this.startedUnsubscribe$.unsubscribe();
    this.messageUnsubscribe$.unsubscribe();
  }

}
