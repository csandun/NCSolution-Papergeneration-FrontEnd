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
    animations: fuseAnimations
})
export class ExamComponent implements OnInit, OnDestroy, AfterViewInit {

    userExam: any;
    examId;
    userExamSubscription: Subscription;
    currentStep = 0;
    courseStepContent;
    animationDirection: 'left' | 'right' | 'none' = 'none';    
    fuseSettings: any;
    selectedChoiceId;
    enableStep=1;
    totalSteps = 5;

    @ViewChildren(FusePerfectScrollbarDirective) fuseScrollbarDirectives: QueryList<FusePerfectScrollbarDirective>;

    constructor(
        private userExamService: ExamService,
        private changeDetectorRef: ChangeDetectorRef,
        private fuseConfig: FuseConfigService,
    ) {
    }

    ngOnInit() {
        this.userExamSubscription =
            this.userExamService.onUserExamChanged
                .subscribe(userExam => {
                    this.userExam = userExam;
                });
    }
    ngAfterViewInit() {
        // this.courseStepContent = this.fuseScrollbarDirectives.find((fuseScrollbarDirective) => {
        //     return fuseScrollbarDirective.element.nativeElement.id === 'course-step-content';
        // });
    }

    ngOnDestroy() {
        this.userExamSubscription.unsubscribe();
    }

    gotoStep(step) {
        if (this.enableStep > step) {
            this.animationDirection = this.currentStep < step ? 'left' : 'right';
            this.saveQuestionAnswer();
            this.changeDetectorRef.detectChanges();
            this.currentStep = step;
        }
    }

    gotoNextStep() {        
        if (this.currentStep === this.totalSteps - 1) {
            return;
        }
        this.saveQuestionAnswer();
        if (this.currentStep === this.enableStep-1) {
            ++this.enableStep;
            
        }
        this.animationDirection = 'left';
        this.changeDetectorRef.detectChanges();       
        this.currentStep++;
    }

    gotoPreviousStep() {
        if (this.currentStep === 0) {
            return;
        }
        this.saveQuestionAnswer();
        this.animationDirection = 'right';
        this.changeDetectorRef.detectChanges();
        this.currentStep--;
    }

    finishedAndSubmit(){
        this.saveQuestionAnswer();

    }

    saveQuestionAnswer(){
        var questionId = this.userExam[this.currentStep].Id;
        var answerId = (this.selectedChoiceId)?this.selectedChoiceId:this.userExam[this.currentStep].ChoiceId;
        this.userExam[this.currentStep].ChoiceId = answerId;
        this.userExam[this.currentStep].IsAnswered = true;
        console.log(questionId + " - "+ answerId);
        //Add save answer api call
        this.selectedChoiceId = null;
    }

    getSelectedAnswer(answerId){
        this.selectedChoiceId = answerId;
        console.log(answerId);
        
    }

}
