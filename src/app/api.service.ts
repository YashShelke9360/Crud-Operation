import { Injectable } from '@angular/core';
import { emp } from './emp';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClientObject:HttpClient) { }

  // getAllStudents():Observable<student[]>
  // {
  //   return this.httpClientObject.get<student[]>('http://localhost:4564/api/students')
  // }
 

  getAllStudents():Observable<emp[]>
  {
    let temp='http://localhost:3000/post'
    console.log(temp)
    return this.httpClientObject.get<emp[]>(temp)
  }

  addStudent(obj:emp)
  {
    return this.httpClientObject.post('http://localhost:3000/post/',obj)
  }
  deleteStudent(id:string)
  {
    return this.httpClientObject.delete('http://localhost:3000/post/'+id)
  }
  getStudent(id:string)
  {
    console.log('in function')
    let URL='http://localhost:3000/post/'+id
    console.log(URL)
    return this.httpClientObject.get<emp>(URL)
  }
  updateStudent(id:string,obj:emp)
  {
    return this.httpClientObject.put('http://localhost:3000/post/'+id,obj)
  }
}


