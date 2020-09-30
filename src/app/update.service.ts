import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private swUpdate: SwUpdate) {
    swUpdate.available.subscribe(event => {
      if (window.confirm(`A new update is available. Please load latest update for great experience`)) {
        swUpdate.activateUpdate().then(() => document.location.reload());
      }
    });
  }

  checkForUpdates() {
    this.swUpdate.checkForUpdate();
  }
}
