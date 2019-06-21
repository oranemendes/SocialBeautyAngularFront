import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.css']
})
export class SinglePhotoComponent implements OnInit {

  @Input() photo;

  constructor() { }

  ngOnInit() {
  }

}
