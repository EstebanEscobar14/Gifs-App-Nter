import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LaztimageComponent } from './components/lazyimage/lazyimage.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LaztimageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    LaztimageComponent
  ]
})
export class SharedModule { }
