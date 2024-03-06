import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { TodoItem } from '../../shared/interfaces/todoItem';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-objetivos',
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
  templateUrl: './objetivos.component.html',
  styleUrl: './objetivos.component.scss'
})
export class ObjetivosComponent {
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
