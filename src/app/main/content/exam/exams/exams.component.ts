import { Subscription } from 'rxjs/Subscription';
import { ExamsService } from './../exams.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'fuse-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit, OnDestroy {

  categories: any[];
  courses: any[];
  coursesFilteredByCategory: any[];
  filteredCourses: any[];

   categoriesSubscription: Subscription;
   coursesSubscription: Subscription;

   currentCategory = 'all';
   searchTerm = '';

  constructor(
    private examsService: ExamsService
  ) {

  }

  ngOnInit() {
    // // Subscribe to categories
    // this.categoriesSubscription =
    //   this.coursesService.onCategoriesChanged
    //     .subscribe(categories => {
    //       this.categories = categories;
    //     });

    // // Subscribe to courses
    // this.coursesSubscription =
    //   this.coursesService.onCoursesChanged
    //     .subscribe(courses => {
    //       this.filteredCourses = this.coursesFilteredByCategory = this.courses = courses;
    //     });
  }

  ngOnDestroy() {
    // this.categoriesSubscription.unsubscribe();
    // this.coursesSubscription.unsubscribe();
  }

  // filterCoursesByCategory() {
  //   // Filter
  //   if (this.currentCategory === 'all') {
  //     this.coursesFilteredByCategory = this.courses;
  //     this.filteredCourses = this.courses;
  //   }
  //   else {
  //     this.coursesFilteredByCategory = this.courses.filter((course) => {
  //       return course.category === this.currentCategory;
  //     });

  //     this.filteredCourses = [...this.coursesFilteredByCategory];

  //   }

  //   // Re-filter by search term
  //   this.filterCoursesByTerm();
  // }

  // filterCoursesByTerm() {
  //   const searchTerm = this.searchTerm.toLowerCase();

  //   // Search
  //   if (searchTerm === '') {
  //     this.filteredCourses = this.coursesFilteredByCategory;
  //   }
  //   else {
  //     this.filteredCourses = this.coursesFilteredByCategory.filter((course) => {
  //       return course.title.toLowerCase().includes(searchTerm);
  //     });
  //   }
  // }

}
