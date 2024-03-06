import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TodoItem } from '../../shared/interfaces/todoItem';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tarefas-dia',
  standalone: true,
  imports: [
    MatCardModule,
    MatGridListModule,
    CommonModule,
    FormsModule, 
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './tarefas-dia.component.html',
  styleUrl: './tarefas-dia.component.scss'
})
export class TarefasDiaComponent {
  listItens: TodoItem[] = [
    {
      title: 'teste', completed: false
    }, {
      title: 'test', completed: false
    }, {
      title: 'test', completed: true
    }
  ];
  checked: boolean = false;
  tarefaDia: string | undefined = undefined;

  submitValue(event: Event): void {
    console.log(event);
    console.log(this.tarefaDia);
    if (this.tarefaDia != undefined) {
      this.listItens.push({title: this.tarefaDia, completed: false});
      console.log(this.listItens);
      this.tarefaDia = undefined;
    }
  }
}
