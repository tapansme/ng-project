import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcalculateComponent } from './formcalculate.component';

describe('FormcalculateComponent', () => {
  let component: FormcalculateComponent;
  let fixture: ComponentFixture<FormcalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormcalculateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormcalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
