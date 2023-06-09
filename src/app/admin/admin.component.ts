import { Component, OnInit } from '@angular/core';
import { RoleServiceService } from '../role-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayStyle:any;
  id:any;
  formData:any;
  roles:any;
  buttonDisabled:any;

  constructor( private roleService : RoleServiceService, private router:Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
this.load();
  }

  load(){
    this.formData = new FormGroup({

      id: new FormControl(0),
      name: new FormControl("", [Validators.required]) 
    })
    this.roleService.get("angular_assessment").then((result:any)=>{
      this.roles = result.data;
    });
    this.displayStyle = "none";

  }
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  updatePopup(id:any){
   
    this.roleService.get("angular_assessment/"+id).then((result:any)=>{
      this.displayStyle = "block";   
      this.formData.patchValue({
        id:id,
        name:result.data.name
      });
    });
  }
  save(formData:any)
  {
  console.log(formData);
  
    if(formData.id ==0){
      this.roleService.post("angular_assessment",formData).then((result:any)=>{
      console.log(result);
      
        this.load();
      })
      
    }
    else{
      this.roleService.put("angular_assessment/" +formData.id,formData).then((result:any)=>{
        this.load();
      })
    }

  }
  deletePopup(id:any){
    if(confirm("Confirm to Delete the Role")){
      this.roleService.delete("angular_assessment/"+id).then((result:any)=>{
        this.load();
      })
    }
  }

  

}
