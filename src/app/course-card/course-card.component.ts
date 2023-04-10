import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
} from "@angular/core";
import { CourseImageComponent } from "../course-image/course-image.component";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent
  implements OnInit, AfterViewInit, AfterContentInit
{
  // @Input()
  // title: string;
  @Input()
  noImageTpl: TemplateRef<any>;

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  // @ContentChild("courseImage")
  // image;

  // @ContentChild(CourseImageComponent)
  // image: CourseImageComponent;

  @ContentChild(CourseImageComponent, { read: ElementRef })
  // images: QueryList<CourseImageComponent>;
  images: QueryList<ElementRef>;

  constructor() {}

  ngAfterContentInit() {
    console.log(this.images);
  }

  ngAfterViewInit() {
    // console.log(this.images);
  }

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
