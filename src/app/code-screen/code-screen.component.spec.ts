import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeScreenComponent } from './code-screen.component';

describe('CodeScreenComponent', () => {
  let component: CodeScreenComponent;
  let fixture: ComponentFixture<CodeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
