import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderPdfComponent } from './reader-pdf.component';

describe('ReaderPdfComponent', () => {
  let component: ReaderPdfComponent;
  let fixture: ComponentFixture<ReaderPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
