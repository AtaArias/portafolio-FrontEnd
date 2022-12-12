import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoDelProgramaComponent } from './logo-del-programa.component';

describe('LogoDelProgramaComponent', () => {
  let component: LogoDelProgramaComponent;
  let fixture: ComponentFixture<LogoDelProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoDelProgramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoDelProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
