import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopEditFormComponent } from './laptop-edit-form.component';

describe('LaptopEditFormComponent', () => {
  let component: LaptopEditFormComponent;
  let fixture: ComponentFixture<LaptopEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
