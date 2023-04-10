import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  constructor() {}

  //the earliest
  ngAfterViewInit() {
    this.cards.changes.subscribe((cards) => console.log(cards));
  }

  courses = COURSES;

  // @ViewChild(CourseCardComponent)
  // to get access to individual component display (in case if multiple exist)
  @ViewChild("cardRef1")
  card1: CourseCardComponent;

  //component element
  @ViewChild("cardRef2")
  card2: CourseCardComponent;

  //html element
  @ViewChild("container")
  containerDiv: ElementRef;

  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>;

  startDate = new Date(2000, 0, 1);
  price = 9.99;

  onCoursesEdited() {
    this.courses.push({
      id: 1,
      description: "Angular Core Deep Dive",
      iconUrl:
        "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png",
      longDescription:
        "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      category: "INTERMEDIATE",
      lessonsCount: 10,
    });
  }

  onCourseSelected(course: Course) {
    console.log("card1", this.card1);
    console.log("card2", this.card2);
  }
}
