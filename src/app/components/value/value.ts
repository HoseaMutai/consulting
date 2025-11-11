import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-value',
  imports: [Navbar,Footer],
  templateUrl: './value.html',
  styleUrl: './value.scss',
})
export class Value {

}
