import { GalleryService } from '../../shared/Services/gallery.service';
import { Component } from '@angular/core';
import { Boss } from './models/boss.model';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  public bossList: Boss[] = [];

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.galleryService.getBosses().subscribe(data => {
      this.bossList = data;
    });
  }
}
