import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Contact } from 'src/model/model.contact';
import {map} from 'rxjs/operators';



@Injectable()
export class ContactsService{

	constructor(public http:Http){

	}

		getContacts(motCle:string,page:number,size:number){
		
		 this.http.get("http://localhost:8080/chercherContacts?mc="+motCle+"A&size="+size+"&page="+page)
		.pipe(map(resp=>resp.json()));
			
		}
		
		getContact(id:number){
		
		 this.http.get("http://localhost:8080/Contacts/"+id)
		.pipe(map(resp=>resp.json()));
			
		}

		saveContact(contact:Contact){
		
		 this.http.post("http://localhost:8080/contacts",contact)
		.pipe(map(resp=>resp.json()));
			
			
		}	

		updateContact(contact:Contact){
		
		 this.http.put("http://localhost:8080/contacts/"+contact.id,contact)
		.pipe(map(resp=>resp.json()))
			
			
		}

		deleteContact(id:number){
		
		 this.http.delete("http://localhost:8080/contacts/"+id)
		.pipe(map(resp=>resp.json()))
			
			
		}
}
