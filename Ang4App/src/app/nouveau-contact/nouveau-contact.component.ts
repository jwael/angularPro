import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/services/contacts.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public contactService:ContactsService) { }

  ngOnInit() {
  }

  onSaveContact(dataForm){

    //this.contactService.saveContact(dataForm)
     this.contactService.saveContact(dataForm)
    .subscribe(data =>{ console.log("ok")
    },err=>{
      console.log(err);
    })
    
    
  
  }
}