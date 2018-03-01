import { Subscription } from 'rxjs/Subscription';
import { FuseConfigService } from './../../../../core/services/config.service';
import { fuseAnimations } from './../../../../core/animations';
import { ExamService } from './../exam.service';
import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef, ViewEncapsulation, QueryList, ViewChildren } from '@angular/core';
import { FusePerfectScrollbarDirective } from '../../../../core/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';

@Component({
  selector: 'fuse-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations  
})
export class ExamComponent implements  OnInit, OnDestroy, AfterViewInit {

  userExam: any;
  userExamSubscription: Subscription;
  currentStep = 0;
  // courseStepContent;
  animationDirection: 'left' | 'right' | 'none' = 'none';
  @ViewChildren(FusePerfectScrollbarDirective) fuseScrollbarDirectives: QueryList<FusePerfectScrollbarDirective>;  
  fuseSettings: any;
  
  constructor(
      private userExamService: ExamService,
      private changeDetectorRef: ChangeDetectorRef,
      private fuseConfig: FuseConfigService,
  )
  { 
  }

  ngOnInit()
  {
    this.userExamSubscription =
    this.userExamService.onUserExamChanged
        .subscribe(userExam => {            
            this.userExam = userExam;
        });
  }
  ngAfterViewInit()
  {
    //   this.courseStepContent = this.fuseScrollbarDirectives.find((fuseScrollbarDirective) => {
    //       return fuseScrollbarDirective.element.nativeElement.id === 'course-step-content';
    //   });
  }

  ngOnDestroy()
  {
      this.userExamSubscription.unsubscribe();
  }
}
