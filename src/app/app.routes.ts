import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../modulos/home/home.component';
import { NgModule } from '@angular/core';
import { TarefasDiaComponent } from '../modulos/tarefas-dia/tarefas-dia.component';
import { PlannerComponent } from '../modulos/planner/planner.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'My Planner',
        children: [{
            path: 'planner',
            component: PlannerComponent
        }]
    }
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })

// export class AppRoutingModule {}