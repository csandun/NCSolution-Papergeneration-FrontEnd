import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



@Injectable()
export class ExamService implements Resolve<any>
{
    onExamChanged: BehaviorSubject<any> = new BehaviorSubject({});

    constructor(private http: HttpClient)
    {
    }

    /**
     * The Academy App Main Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getExam()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getExam(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get('https://ncspapergeneration.azurewebsites.net/api/UserExams/2/Questions')
                .subscribe((response: any) => {
                    this.onExamChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
}







