import { Component, ElementRef, ViewChild } from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
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

  startDate = new Date(2000, 0, 1);
  price = 9.99;

  onCourseSelected(course: Course) {
    console.log("card1", this.card1);
    console.log("card2", this.card2);
  }
}
