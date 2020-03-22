import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonomiesListComponent } from './autonomies-list.component';

describe('AutonomiesListComponent', () => {
  let component: AutonomiesListComponent;
  let fixture: ComponentFixture<AutonomiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutonomiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutonomiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
