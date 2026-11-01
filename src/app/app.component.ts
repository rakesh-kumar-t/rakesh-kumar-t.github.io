import { Component } from '@angular/core';
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, SkillsComponent, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
