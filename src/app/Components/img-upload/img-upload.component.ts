import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.css']
})
export class ImgUploadComponent implements OnInit {
  imageURL?: string;
  uploadForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    })
  }
  ngOnInit(): void { }

  showPreview(event:any) {
    if (event?.target?.files) {
      const file = event.target.files[0];
      this.uploadForm.patchValue({
        avatar: file
      });
      this.uploadForm.get('avatar')?.updateValueAndValidity()
      const reader = new FileReader();
      reader.onload = () => {
        this.imageURL = reader.result as string;
      }
      reader.readAsDataURL(file)
    }
  }
  submit() {
    console.log(this.uploadForm.value)
  }
}
