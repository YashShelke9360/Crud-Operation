import { Component, OnInit } from '@angular/core';
import { emp } from '../emp';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit{
  
  studArr:Array<emp>=[]
 
  students:string=''

  regObj={
    rollno : " ",
    firstName: " ",
    lastName: " ",
    email: " ",
    contactNo: " ",
    address: " ",
    course: " ",
    education: " "
  }
getData()
{
  this.studentServiceObj.getAllStudents().subscribe((data)=>{
    this.studArr=data
  })
}
  
  constructor(private studentServiceObj:ApiService){}
  ngOnInit() {
    // this.studentServiceObj.getAllStudents().subscribe((data)=>{
    //   this.studArr=data
    // })
    this.getData()
  
  }
  save()
  {
    let tempObj:emp={
      id: '',
      rollno: this.regObj.rollno,
      firstName: this.regObj.firstName,
      lastName: this.regObj.lastName,
      email: this.regObj.email,
      contactNo: this.regObj.contactNo,
      address: this.regObj.address,
      course: this.regObj.course,
      education: this.regObj.education
    }

    
    if(this.students==='')
      this.studentServiceObj.addStudent(tempObj).subscribe((rec)=>{
      this.getData()
     
  })
      else
      {
       this.studentServiceObj.updateStudent(this.students,tempObj).subscribe((rec)=>{
        this.getData()
       })
      } 

      this.regObj={
        rollno : " ",
        firstName: " ",
        lastName: " ",
        email: " ",
        contactNo: " ",
        address: " ",
        course: " ",
        education: " "
      }
      this.students=''

  }

  delRec(id:string)
  {
    this.studentServiceObj.deleteStudent(id).subscribe((rec)=>{
      this.getData()
    })
  }
  editRec(id:string)
  {
    this.students=id
    this.studentServiceObj.getStudent(id).subscribe((rec)=>{
      console.log(rec)
      this.regObj=rec
    })
  }
}
