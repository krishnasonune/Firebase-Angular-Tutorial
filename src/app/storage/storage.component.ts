import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  file : any;
  fileName : string ="";
  percent: any;
  url: any;

  constructor(private storage: AngularFireStorage) { }
  
  upload(event: any){
    this.file = event.target.files[0];
    this.fileName = event.target.files[0].name;
  }

  uploadData(){
    var fileref = this.storage.ref(this.fileName);
    const data = this.storage.upload(this.fileName, this.file);
    data.then(
      () => {
          alert('Uploaded');
        fileref.getDownloadURL().subscribe(
          t => {
            this.url = t;
          }
        )
      }
    ).catch(
      err => {
        console.log(err)
      }
    )

    data.percentageChanges().subscribe(
      r => {
        this.percent = r?.toFixed() + '%';
      }
    )
  }

 
  ngOnInit(): void {
  }

}
