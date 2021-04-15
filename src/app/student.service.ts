import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [];

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) {
    this.students = [
      { student_id: 1, student_name: 'shovel', student_email: 'garden', student_branch: 'down the street' },
      { student_id: 2, student_name: 'shovel', student_email: 'construction', student_branch: 'earth' },
      { student_id: 3, student_name: 'rake', student_email: 'garden', student_branch: 'new york' }
    ]
  }

  getStudentList(): Observable<Student[]> {
    return of(this.students);
    // return this.http.get(`${this.baseUrl}`+'students-list');
  }

  createStudent(student: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'save-student', student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-student/${id}`, { responseType: 'text' });
  }

  getStudent(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/student/${id}`);
  }

  updateStudent(value: any): Observable<Object> {
    // return this.http.post(`${this.baseUrl}/update-student/${id}`, value);
    return this.http.post(`${this.baseUrl}/update-student/${value.student_id}`, value);
  }
}
