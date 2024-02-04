import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Filip';
  username= '';
  passwordVisible = false;
  clickLog = [];
  
  isUsernameEmpty() {
    return this.username === '';
  }

  resetUsername() {
    this.username = '';
  }

  isPasswordVisible() {
    return this.passwordVisible;
  }

  toggleDetails() {
    this.passwordVisible = !this.passwordVisible;
    if (this.clickLog.length > 4) {
    
      console.log('Ovo bi trebalo biti plavo');
    }
    this.clickLog.push(this.clickLog.length + 1);
    console.log(this.clickLog);
  }
}
