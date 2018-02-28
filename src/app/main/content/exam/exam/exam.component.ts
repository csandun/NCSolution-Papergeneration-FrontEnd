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
export class ExamComponent implements OnInit {

    userExam: any;
    examSubscription: Subscription;
    @ViewChildren(FusePerfectScrollbarDirective) fuseScrollbarDirectives: QueryList<FusePerfectScrollbarDirective>;
    fuseSettings: any;

    constructor(
        private examService: ExamService,
        private changeDetectorRef: ChangeDetectorRef,
        private fuseConfig: FuseConfigService,
    ) {
    }

    ngOnInit() {
        this.examSubscription = this.examService.onExamChanged
            .subscribe(userExam => {
                this.userExam = userExam;
                console.log(userExam);                
            });
    }
}
