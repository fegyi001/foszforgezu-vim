import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _mapCenter: number[] = [2121256, 6021014]
  private _mapZoom = 18

  getMapCenter() {
    return this._mapCenter
  }

  setMapCenter(center: number[]) {
    this._mapCenter = center
  }

  getMapZoom() {
    return this._mapZoom
  }

  setMapZoom(zoom: number) {
    this._mapZoom = zoom
  }
}
