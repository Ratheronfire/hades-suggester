import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HadesSuggesterComponent } from './hades-suggester.component';

describe('HadesSuggesterComponent', () => {
  let component: HadesSuggesterComponent;
  let fixture: ComponentFixture<HadesSuggesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HadesSuggesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HadesSuggesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
