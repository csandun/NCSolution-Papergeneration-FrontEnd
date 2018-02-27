import { ExamsService } from './exams.service';
import { ExamService } from './exam.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../../core/modules/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsComponent } from './exams/exams.component';
import { ExamComponent } from './exam/exam.component';
import { resolve } from 'q';

const routes = [
  {
      path     : '',
      component: ExamsComponent,
      resolve: {
        exam: ExamsService
      }
  },
  {
      path     : ':examId',
      component: ExamComponent,
      resolve: {
        exam: ExamService
      }
  },
  {
      path      : '**',
      redirectTo: ''
  }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExamsComponent, ExamComponent],
  providers: [ExamService, ExamsService]
})
export class ExamModule { }
