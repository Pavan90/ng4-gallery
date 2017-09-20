import {Injectable} from '@angular/core';

@Injectable()
export class ImageService{
  visibleImages = [];
getImages(){
  return this.visibleImages = IMAGES.slice(0);
}

getImage(id: number){

  return IMAGES.slice(0).find(image => image.id == id);
}

}

const IMAGES = [

  {'id': 1, 'category': 'boats', 'caption': 'view from a boat', 'url': 'assets/img/img1.jpg'},
  {'id': 2, 'category': 'boats', 'caption': 'caption 2', 'url': 'assets/img/img2.jpg'},
  {'id': 3, 'category': 'boats', 'caption': 'view from a boat 3', 'url': 'assets/img/img3.jpg'},
  {'id': 4, 'category': 'boats', 'caption': 'view from a boat 4', 'url': 'assets/img/img4.jpg'},
  {'id': 5, 'category': 'girls', 'caption': 'view from a boat 5', 'url': 'assets/img/img5.jpg'},
  {'id': 6, 'category': 'boats', 'caption': 'view from a boat 6', 'url': 'assets/img/img6.jpg'},
  {'id': 7, 'category': 'boats', 'caption': 'view from a boat asd', 'url': 'assets/img/img7.jpg'},
  {'id': 8, 'category': 'girls', 'caption': 'view from a boat dasad', 'url': 'assets/img/img8.jpg'},
  {'id': 9, 'category': 'nature', 'caption': 'view from a boat sad', 'url': 'assets/img/img9.jpg'},
  {'id': 10, 'category': 'boats', 'caption': 'view from a boat asdsd', 'url': 'assets/img/img10.jpg'},
  {'id': 11, 'category': 'boats', 'caption': 'view from a boat asd', 'url': 'assets/img/img11.jpg'},
  {'id': 12, 'category': 'nature', 'caption': 'view from a boat asdasd', 'url': 'assets/img/img12.jpg'},
  {'id': 13, 'category': 'nature', 'caption': 'view from a boat asd', 'url': 'assets/img/img13.jpg'},
  {'id': 14, 'category': 'nature', 'caption': 'view from a boat', 'url': 'assets/img/img14.jpg'},
  {'id': 15, 'category': 'nature', 'caption': 'view from a boat', 'url': 'assets/img/img15.jpg'},
  {'id': 16, 'category': 'nature', 'caption': 'view from a boat', 'url': 'assets/img/img16.jpg'},
  {'id': 17, 'category': 'nature', 'caption': 'view from a boat', 'url': 'assets/img/img17.jpg'}

];
