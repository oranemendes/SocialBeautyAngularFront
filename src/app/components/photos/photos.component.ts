import { Component, OnInit } from '@angular/core';
import {Photo} from '../../models/photos.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})

export class PhotosComponent implements OnInit {

  photos: Photo[] = [
    new Photo('User lambda', 'Make-up',
      'https://media1.popsugar-assets.com/files/thumbor/oDYtzSoYLVBmLN3cAnow2bRE3aY/fit-in/1024x1024/filters:format_aut' +
      'o-!!-:strip_icc-!!-/2019/04/10/797/n/1922153/427bbb285cae3114b29f22.16127114_/i/Glamlite-Cosmetics-Burger-Palette-April-2019.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ' +
      'aliqua. Ut enim ad minim veniam.',
      0, new Date('2019-06-21T14:36:00')),
    new Photo('User lambda', 'Make-up',
      'https://media1.popsugar-assets.com/files/thumbor/oDYtzSoYLVBmLN3cAnow2bRE3aY/fit-in/1024x1024/filters:format_aut' +
      'o-!!-:strip_icc-!!-/2019/04/10/797/n/1922153/427bbb285cae3114b29f22.16127114_/i/Glamlite-Cosmetics-Burger-Palette-April-2019.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ' +
      'aliqua. Ut enim ad minim veniam.',
      0, new Date('2019-06-21T14:36:00')),
    new Photo('User lambda', 'Make-up',
      'https://media1.popsugar-assets.com/files/thumbor/oDYtzSoYLVBmLN3cAnow2bRE3aY/fit-in/1024x1024/filters:format_aut' +
      'o-!!-:strip_icc-!!-/2019/04/10/797/n/1922153/427bbb285cae3114b29f22.16127114_/i/Glamlite-Cosmetics-Burger-Palette-April-2019.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ' +
      'aliqua. Ut enim ad minim veniam.',
      0, new Date('2019-06-21T14:36:00')),
    new Photo('User lambda', 'Make-up',
      'https://media1.popsugar-assets.com/files/thumbor/oDYtzSoYLVBmLN3cAnow2bRE3aY/fit-in/1024x1024/filters:format_aut' +
      'o-!!-:strip_icc-!!-/2019/04/10/797/n/1922153/427bbb285cae3114b29f22.16127114_/i/Glamlite-Cosmetics-Burger-Palette-April-2019.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ' +
      'aliqua. Ut enim ad minim veniam.',
      0, new Date('2019-06-21T14:36:00')),
    new Photo('User lambda', 'Make-up',
      'https://media1.popsugar-assets.com/files/thumbor/oDYtzSoYLVBmLN3cAnow2bRE3aY/fit-in/1024x1024/filters:format_aut' +
      'o-!!-:strip_icc-!!-/2019/04/10/797/n/1922153/427bbb285cae3114b29f22.16127114_/i/Glamlite-Cosmetics-Burger-Palette-April-2019.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ' +
      'aliqua. Ut enim ad minim veniam.',
      0, new Date('2019-06-21T14:36:00')),
  ];

  constructor() {}

  ngOnInit() {
  }

}
