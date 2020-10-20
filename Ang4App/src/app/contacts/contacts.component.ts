import { Component, OnInit } from '@angular/core';
import{Http} from "@angular/http";
import { ContactsService } from 'src/services/contacts.service';
import { Router } from '@angular/router';
import { Contact } from 'src/model/model.contact';


@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

    //pageContacts:{content:[]};
    pageContacts:any;
    motCle:string="";
    page:number=0;
    size:number=5;
    currentPages:number=0;
    data:any;
  constructor(public http:Http,public contactservice:ContactsService,public router:Router) { 

    
  }

  ngOnInit() {

  
        

      
  }    
     
  doSearch(){
   // this.contactservice.getContacts(this.motCle,this.page,this.size).

   this.contactservice.getContacts(this.motCle,this.currentPages,this.size)
        
    this.data.subscribe(data=>{
      this.pageContacts=data;
      this.pageContacts= new Array(data.totalPages); 
    },err=>{
      console.log(err);
    }
    )
      

     

  }
    chercher(){
      this.doSearch();

    }
    
  gotoPage(i:number)
      {
        this.currentPages=i;
        this.doSearch();
      }  

   onEditContact(id:number){

    this.router.navigate(['editContact', id]);
   }

   onDeleteContact(c:Contact){
    let confirm=window.confirm("Etes vous sur?");
    if(confirm==true){
    this.contactservice.deleteContact(c.id) 
    .subscribe(data=>{
      this.pageContacts.content.splice(
        this.pageContacts.content.indexOf(c),1
      );
    },err=>{
      console.log(err);
    })
    }
   
   }
}

