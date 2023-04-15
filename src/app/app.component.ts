import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";
import { HighlightedDirective } from "./directives/highlighted.directive";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<ElementRef>;

  @ViewChild(HighlightedDirective, { read: HighlightedDirective })
  highlighted: HighlightedDirective;

  constructor() {}

  onToggle(isHighlighted: boolean) {
    console.log(isHighlighted);
  }

  ngAfterViewInit() {
    console.log(this.highlighted);
  }

  onCourseSelected(course: Course) {}
}
