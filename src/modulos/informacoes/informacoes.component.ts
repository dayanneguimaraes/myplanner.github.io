import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Heart } from '../../shared/interfaces/heart';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-informacoes',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './informacoes.component.html',
  styleUrl: './informacoes.component.scss'
})
export class InformacoesComponent {
  hearts: Heart[];
  completed: boolean = false;
  text: string = '';
  frase: string = '';

  constructor() {
    this.hearts = Array(9).fill(0).map(() => ({ completed: false }));
  }

  toggleHeart(index: number) {
    this.hearts[index].completed = !this.hearts[index].completed;
    this.updatePreviousHearts(index);
  }

  updatePreviousHearts(index: number) {
    for (let i = 0; i < index; i++) {
      this.hearts[i].completed = true;
    }
  }
}
