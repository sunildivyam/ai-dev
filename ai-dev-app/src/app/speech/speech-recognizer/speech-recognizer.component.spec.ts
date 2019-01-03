import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechRecognizerComponent } from './speech-recognizer.component';

describe('SpeechRecognizerComponent', () => {
  let component: SpeechRecognizerComponent;
  let fixture: ComponentFixture<SpeechRecognizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechRecognizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechRecognizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
