import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http: HttpClient) { }

  getAllStudents():Observable<Student[]>{
    debugger
    return this._http.get<Student[]>("/api/Student/getAllStudents")
  }

}
