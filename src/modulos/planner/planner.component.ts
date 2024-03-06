import { Component } from '@angular/core';
import { TarefasDiaComponent } from '../tarefas-dia/tarefas-dia.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { LembreteComponent } from '../lembrete/lembrete.component';
import { ObjetivosComponent } from '../objetivos/objetivos.component';
import { InformacoesComponent } from '../informacoes/informacoes.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-planner',
  standalone: true,
  imports: [
    TarefasDiaComponent, 
    MatGridListModule,
    CommonModule,
    LembreteComponent,
    ObjetivosComponent,
    InformacoesComponent,
    FlexLayoutModule,
    MatIconModule
  ],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.scss'
})
export class PlannerComponent {
  listItens: any[] = []; // Assumindo que listItens contém suas tarefas

  // Função para calcular a altura dinâmica com base no número de itens na lista
  calcHeight(list: any[]): string {
    // Ajuste este valor conforme necessário para controlar a altura máxima
    const maxHeight = 200; // pixels
    const estimatedItemHeight = 50; // pixels

    const totalItems = list.length;
    const calculatedHeight = totalItems * estimatedItemHeight;

    // Limita a altura máxima
    return calculatedHeight > maxHeight ? `${maxHeight}px` : `${calculatedHeight}px`;
  }
}
