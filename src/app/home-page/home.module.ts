import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { CoursesModule } from './courses/courses.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MatChipsModule, CoursesModule, MatButtonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
