import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutdatafetchingComponent } from './aboutdatafetching.component';

describe('AboutdatafetchingComponent', () => {
  let component: AboutdatafetchingComponent;
  let fixture: ComponentFixture<AboutdatafetchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutdatafetchingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutdatafetchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
