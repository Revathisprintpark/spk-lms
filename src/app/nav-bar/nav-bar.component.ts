import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from "../sidebar/sidebar.component";
@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, FormsModule, ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  searchQuery:any
  public onSearch(){

  }
}
