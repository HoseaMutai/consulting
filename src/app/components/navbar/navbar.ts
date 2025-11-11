// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-navbar',
//   imports: [RouterModule, CommonModule],
//   templateUrl: './navbar.html',
//   styleUrl: './navbar.scss',
// })
// export class Navbar {

// }












import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  // Make sure 'templateUrl' points to the new HTML file
  templateUrl: './navbar.html', 
  styleUrl: './navbar.scss',
  imports: [RouterModule, CommonModule],
  standalone: true // Assuming it's a standalone component as per spec file
})
export class Navbar {

}

