import { Component, ViewChild } from '@angular/core';
import { NgxAudioWaveComponent } from 'ngx-audio-wave';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'audio-player';

  lowerValue: number = 0;
  upperValue: number = 0;

  @ViewChild('ngxAudioWave') ngxAudioWave!: NgxAudioWaveComponent;

  handleAudioClick(event: MouseEvent): void {
    this.ngxAudioWave.pause();
    setTimeout(() => {
      console.log('Current Time:', this.ngxAudioWave.currentTime);
    }, 200);
  }

  handleRangeChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.id === 'lower') {
      this.lowerValue = Number(target.value);
    } else if (target.id === 'upper') {
      this.upperValue = Number(target.value);
    }

    console.log(`upper value ${this.upperValue} and lower value ${this.lowerValue}`);
  }
}
