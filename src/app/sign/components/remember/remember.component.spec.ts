import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RememberComponent } from './remember.component';

describe('RememberComponent', () => {
  let component: RememberComponent;
  let fixture: ComponentFixture<RememberComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RememberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});