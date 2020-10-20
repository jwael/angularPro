package org.sid;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.sid.dao.ContactRepository;
import org.sid.entities.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemonApplication implements CommandLineRunner {

	@Autowired
	private ContactRepository contactRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(DemonApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		DateFormat df= new SimpleDateFormat("dd/MM/yyyy");
		contactRepository.save(new Contact("wael","jadla",df.parse("10/03/1990"),"waem@mail.com", 054757,"photo"));
		contactRepository.save(new Contact("wael1","jadla1",df.parse("09/03/1990"),"waem1@mail.com", 064757,"photo1"));
		contactRepository.save(new Contact("wael2","jadla2",df.parse("08/03/1990"),"waem2@mail.com", 074757,"photo2"));
		contactRepository.findAll().forEach(c->{
			System.out.println(c.getNom());
		});
	}

}
