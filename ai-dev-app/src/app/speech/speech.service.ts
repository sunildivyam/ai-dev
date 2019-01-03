import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';

@Injectable()
export class SpeechService implements OnDestroy {
  private recognition: any;
  private message: Subject<void>;
  private started$: Subject<boolean>;
  private startedUnsubscribe$: Subscription;
  private started: boolean;

  constructor() {
    const SpeechRecognition = window['speechRecognition'] || window['webkitSpeechRecognition'];
    this.recognition =  new SpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;
    this.recognition.continuous = true;
    this.message = new Subject<void>();
    this.started$ = new Subject<boolean>();
    this.started = false;

    this.recognition.onstart = () => {
      this.started$.next(true);
    };

    this.recognition.onend = () => {
      this.started$.next(false);
    };

    this.recognition.onresult = (event) => {
      const message = event.results[event.resultIndex][0];
      this.message.next(message);
    };

    this.recognition.onerror = (event) => {
      this.message.error(event);
    };

    this.startedUnsubscribe$ = this.started$.subscribe(started => this.started = started);
  }

  start() {
    if (!this.started) {
      this.recognition.start();
    }
  }

  stop() {
    this.recognition.stop();
  }

  getMessage(): Observable<any> {
    return this.message.asObservable();
  }

  getStarted(): Observable<any> {
    return this.started$.asObservable();
  }

  ngOnDestroy(): void {
    if (this.recognition) {
      this.recognition.stop();
    }
    this.message.complete();
    this.started$.complete();
    this.startedUnsubscribe$.unsubscribe();
  }
}
