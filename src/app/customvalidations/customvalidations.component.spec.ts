import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomvalidationsComponent } from './customvalidations.component';

describe('CustomvalidationsComponent', () => {
  let component: CustomvalidationsComponent;
  let fixture: ComponentFixture<CustomvalidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomvalidationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomvalidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
