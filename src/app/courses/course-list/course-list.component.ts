import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { FaqsComponent } from "../../faqs/faqs.component";
@Component({
  selector: 'app-course-list',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FaqsComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {

  
}