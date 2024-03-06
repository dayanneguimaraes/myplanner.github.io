import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasDiaComponent } from './tarefas-dia.component';

describe('TarefasDiaComponent', () => {
  let component: TarefasDiaComponent;
  let fixture: ComponentFixture<TarefasDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefasDiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarefasDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
