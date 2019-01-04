import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechService } from './speech.service';
import { RoboDevComponent } from './robo-dev/robo-dev.component';

@NgModule({
  declarations: [RoboDevComponent],
  providers: [SpeechService],
  imports: [
    CommonModule
  ],
  exports: [RoboDevComponent]
})
export class SpeechModule { }
