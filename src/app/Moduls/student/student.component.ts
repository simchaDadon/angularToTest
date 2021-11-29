import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students!: Student[];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  this.studentService.getAllStudents().subscribe(
    data=>{
       this.students = data;
    },
    err=>{
      debugger
    }
    )
  }

}
