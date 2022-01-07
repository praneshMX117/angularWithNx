import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMgrComponent } from './list-mgr.component';

describe('ListMgrComponent', () => {
  let component: ListMgrComponent;
  let fixture: ComponentFixture<ListMgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMgrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
