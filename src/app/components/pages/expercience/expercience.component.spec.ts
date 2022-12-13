import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpercienceComponent } from './expercience.component';

describe('ExpercienceComponent', () => {
  let component: ExpercienceComponent;
  let fixture: ComponentFixture<ExpercienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpercienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpercienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
