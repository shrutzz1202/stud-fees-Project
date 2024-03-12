import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefeeComponent } from './updatefee.component';

describe('UpdatefeeComponent', () => {
  let component: UpdatefeeComponent;
  let fixture: ComponentFixture<UpdatefeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatefeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatefeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
