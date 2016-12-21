/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashbaordComponent } from './dashbaord.component';

describe('DashbaordComponent', () => {
  let component: DashbaordComponent;
  let fixture: ComponentFixture<DashbaordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbaordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
