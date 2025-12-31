import { Component } from '@angular/core';
import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';
import { Hero } from "../../layout/hero/hero";
import { RouterLink } from '@angular/router';
import { VideoAd } from '../../layout/video-ad/video-ad';

@Component({
  selector: 'app-inicio',
  imports: [
    Menu, Rodape,
    Hero, RouterLink, VideoAd
],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

}
