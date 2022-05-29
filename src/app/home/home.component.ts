import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AngularFireAuth) { }

  register(form : NgForm){
    
      var email =  form.value.name;
      var pass =  form.value.pass 
    

    this.auth.createUserWithEmailAndPassword(email, pass).then(
      () => {
        alert('created');
      }
    ).catch(
      () => {
        alert('error')
      }
    )

  }

  Login(form : NgForm){
    
    var email =  form.value.name;
    var pass =  form.value.pass 
  

  this.auth.signInWithEmailAndPassword(email, pass).then(
    r => {
      alert(r.user?.email);
    }
  ).catch(
    () => {
      alert('error')
    }
  )

}

  ngOnInit(): void {
  }

}
