import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechRecognizerComponent } from './speech-recognizer/speech-recognizer.component';
import { SpeechService } from './speech.service';

@NgModule({
  declarations: [SpeechRecognizerComponent],
  providers: [SpeechService],
  imports: [
    CommonModule
  ],
  exports: [SpeechRecognizerComponent]
})
export class SpeechModule { }
