import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrilhaHomeComponent } from './trilha-home.component';

describe('TrilhaHomeComponent', () => {
  let component: TrilhaHomeComponent;
  let fixture: ComponentFixture<TrilhaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrilhaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrilhaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
