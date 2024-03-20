import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelgranoComponent } from './belgrano.component';

describe('BelgranoComponent', () => {
  let component: BelgranoComponent;
  let fixture: ComponentFixture<BelgranoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BelgranoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BelgranoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
