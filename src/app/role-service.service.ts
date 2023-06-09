import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {


  baseurl = "https://6483097cf2e76ae1b95bd96f.mockapi.io/"
  constructor(private httpClient:HttpClientModule)
   {

   }
   get(path:string){
    return axios.get(this.baseurl + path);
   }
   post(path:string,data:any){
    return axios.post(this.baseurl + path,data);
   }
   
   delete(path:string){
    return axios.delete(this.baseurl + path);
   }
   put(path:string,data:any){
    return axios.put(this.baseurl + path,data);
   }

}
