/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GlusterComponent } from './gluster.component';

describe('GlusterComponent', () => {
  let component: GlusterComponent;
  let fixture: ComponentFixture<GlusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
