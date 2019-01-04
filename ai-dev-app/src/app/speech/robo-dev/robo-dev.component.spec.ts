import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboDevComponent } from './robo-dev.component';

describe('RoboDevComponent', () => {
  let component: RoboDevComponent;
  let fixture: ComponentFixture<RoboDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
