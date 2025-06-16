import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeGenerationScreenComponent } from './code-generation-screen.component';

describe('CodeGenerationScreenComponent', () => {
  let component: CodeGenerationScreenComponent;
  let fixture: ComponentFixture<CodeGenerationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeGenerationScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeGenerationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
