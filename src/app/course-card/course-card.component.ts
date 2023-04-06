import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements OnInit {
  // @Input()
  // title: string;
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() {}

  ngOnInit() {}

  onCourseViewed() {
    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    if (this.course.category == "BEGINNER") {
      return ["beginner"];
    }
    // return {
    //   // beginner: false,
    //   beginner: this.course.category == "BEGINNER",
    // };
  }

  cardStyles() {
    return { "text-decoration": "underline" };
  }
}
