import { Component } from '@angular/core';
import { Experience } from './components/experience/experience';
import { Home } from './components/home/home';
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
  imports: [Home, Skills, Experience],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
