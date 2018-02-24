import { ExamsService } from './exams.service';
import { ExamService } from './exam.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../../core/modules/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsComponent } from './exams/exams.component';
import { ExamComponent } from './exam/exam.component';

const routes = [
  {
      path     : '',
      component: ExamsComponent
  },
  {
      path     : ':examId',
      component: ExamComponent
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
