import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { TodoItemLembrete } from '../../shared/interfaces/todoItemLembrete';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-lembrete',
  standalone: true,
  imports: [
    MatCardModule,
    MatGridListModule,
    CommonModule,
    FormsModule, 
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './lembrete.component.html',
  styleUrl: './lembrete.component.scss'
})
export class LembreteComponent {
  listItens: TodoItemLembrete[] = [
    {
      title: 'teste', horario: '10:00'
    }, {
      title: 'test', horario: '10:05'
    }, {
      title: 'test', horario: '10:06'
    }
  ];
  horario: string | undefined = undefined;
  lembrete: string | undefined = undefined;

  submitValue(event: Event): void {
    if (this.lembrete !== undefined && this.horario !== undefined) {
      this.listItens.push({title: this.lembrete, horario: this.horario});
      console.log(this.listItens);
      this.lembrete = undefined;
    }
  }
}
