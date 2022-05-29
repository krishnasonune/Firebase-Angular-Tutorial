import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  resp: any = [];
  g: any = [];
  
  constructor(private db : AngularFireDatabase) { }
  
  
  readData(){
    this.db.list('/Data').valueChanges().subscribe(
      r => {
        
        this.resp = (r);
        
        console.log(this.resp)
      },
      err =>{
        console.log(err)
      }
    )
  }


  writeData(form: NgForm){
    let items = [
      {
        'name': form.value.name,
        'age': form.value.age,
        'likes': form.value.phn
    }
    ];

    var uid = form.value.phn.toString();
    
    this.db.list('/Data').update(uid, items).then(
      () =>{
        alert('updated');
      }
    ).catch(
      error =>{
        console.log(error)
      }
    )
    
  }

  ngOnInit(): void {
    this.readData()
  }

}
