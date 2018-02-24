import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsComponent } from './exams/exams.component';
import { ExamComponent } from './exam/exam.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExamsComponent, ExamComponent]
})
export class ExamModule { }
