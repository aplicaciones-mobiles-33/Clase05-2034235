import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  datos = "../datos.json";
  publicaciones: any;
  error: any;
  imagenesPublicadas = [
    '../../assets/Imagenes/Post 1.jpg',
    '../../assets/Imagenes/Post 2.png',
    '../../assets/Imagenes/Post 3.png',
    '../../assets/Imagenes/Post 4.png',
    '../../assets/Imagenes/Post 5.png',
    '../../assets/Imagenes/Post 6.png',
    '../../assets/Imagenes/Post 7.png',
    '../../assets/Imagenes/Post 8.png',
    '../../assets/Imagenes/Post 9.png',
    '../../assets/Imagenes/Post 10.png',
    '../../assets/Imagenes/Post 11.png',
    '../../assets/Imagenes/Post 12.png'
  ]
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(this.datos).subscribe(data => {
      this.publicaciones = data;
      console.log(this.publicaciones);
    },error => this.error = error)
  }

}
