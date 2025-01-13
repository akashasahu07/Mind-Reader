import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mReader';
  choosen: string = ''
  result: string = ''

  ChoosenNumber(event: any) {
    if (event.target.value <= 10 && event.target.value >= 1) {
      this.choosen = 'Your Guess: ' + event.target.value

      if (event.target.value == 1) {
        this.result = "The only limit to our realization of tomorrow is our doubts of today."
      }

      else if (event.target.value == 2) {
        this.result = "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change."
      }

      else if (event.target.value == 3) {
        this.result = "Don’t wait for the perfect moment. Take the moment and make it perfect."
      }

      else if (event.target.value == 4) {
        this.result = 'What you think, you become. What you feel, you attract. What you imagine, you create.'
      }

      else if (event.target.value == 5) {
        this.result = "Happiness is not something ready-made. It comes from your own actions."
      }

      else if (event.target.value == 6) {
        this.result = "The future belongs to those who believe in the beauty of their dreams."
      }

      else if (event.target.value == 7) {
        this.result = "Believe you can, and you're halfway there."
      }

      else if (event.target.value == 8) {
        this.result = "Your mind is your greatest asset. Guard it, grow it, and use it wisely."
      }

      else if (event.target.value == 9) {
        this.result = "It’s not about what happens to you but how you react to it that matters."
      }

      else if (event.target.value == 10) {
        this.result = "Every thought we think is creating our future."
      }
    }

    else if(event.target.value == '') {
      window.location.reload()
    }
    else {
      alert("Guess Number Between 1 to 10")
      window.location.reload()
    }
  }

  Reset() {
    window.location.reload()
  }
}
