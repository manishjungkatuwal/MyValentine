import { Component, OnInit } from '@angular/core';
import confetti from 'canvas-confetti';

// Define what a Memory looks like
interface Memory {
  date: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accepted = false;

  memories: Memory[] = [
    { date: 'Jan 3, 2024', image: '010324.jpg', description: 'The first rose you gave me 🌹' },
    { date: 'Jan 4, 2024', image: '010424.jpg', description: 'Our very first photo together that I have' },
    { date: 'Jan 16, 2024', image: '011624.jpg', description: 'Experiencing the first snow ❄️' },
    { date: 'Feb 16, 2024', image: '021424.jpg', description: 'My Valentine' },
    { date: 'Oct 8, 2024', image: '100424.jpg', description: 'In Monroe Mela' },
    { date: 'Oct 18, 2024', image: '101824.jpg', description: 'You curling my hair (Salon mode!)' },
    { date: 'Oct 19, 2024', image: '101924.jpg', description: 'Out camping under the stars' },
    { date: 'Dec 24, 2024', image: '122424.jpg', description: 'Christmas Eve magic' },
    { date: 'Dec 26, 2024', image: '122624.jpg', description: 'Ice skating adventures ⛸️' },
    { date: 'Jan 1, 2025', image: '010125.jpg', description: 'Our First Anniversary ❤️' },
    { date: 'Mar 7, 2025', image: '030725.jpg', description: 'I clicking cute pictures of yo' },
    { date: 'May 17, 2025', image: '051725.jpg', description: 'I Graduated!' },
    { date: 'Jun 8, 2025', image: '060825.jpg', description: 'Happy 21st Birthday! 🎂' },
    { date: 'Jun 19, 2025', image: '061925.jpg', description: 'Cooking Momos together 🥟' },
    { date: 'Jun 22, 2025', image: '062225.jpg', description: 'Grapevine Mall strolls' },
    { date: 'Jun 28, 2025', image: '062825.jpg', description: 'Sunshine at Lewisville Lake' },
    { date: 'Aug 21, 2025', image: '082125.jpg', description: 'A rose in your ear... you look beautiful' },
    { date: 'Sept 11, 2025', image: '091125.jpg', description: 'Who likes swimming in the cold to get sick?' },
    { date: 'Nov 27, 2025', image: '112725.jpg', description: 'Seeing the Christmas lights' },
    { date: 'Dec 13, 2025', description: 'Back in Monroe for graduation!', image: '121325.jpg' },
    { date: 'Jan 1, 2026', description: 'Our Second Anniversary in Austin!', image: '010126.jpg' }
  ]
  // This creates 15 balloons with random horizontal positions and animation delays
  balloons = Array.from({ length: 15 }, (_, i) => ({
    left: Math.random() * 90, 
    delay: Math.random() * 5
  }));

  noBtnPos = { x: 0, y: 0 };

  ngOnInit() {
    // We don't need much here for now
  }

  onYes() {
    this.accepted = true;
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff4d6d', '#ff758f', '#ffffff']
    });
  }

  moveNo(event: any) {
    // This makes the button jump to a random spot on the screen
    // Subtracting 100 ensures it doesn't jump off-screen
    this.noBtnPos.x = Math.random() * (window.innerWidth - 100);
    this.noBtnPos.y = Math.random() * (window.innerHeight - 100);
    
    // Applying style directly for immediate mobile response
    event.target.style.position = 'fixed';
    event.target.style.left = this.noBtnPos.x + 'px';
    event.target.style.top = this.noBtnPos.y + 'px';
  }
}