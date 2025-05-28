import { Component, OnInit } from '@angular/core'
import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import { XYZ } from 'ol/source'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  map: Map | null = null

  ngOnInit() {
    // OPTIMIZE: 3. Refactor this - move to a private method
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
          }),
        }),
      ],
      view: new View({
        // TODO: 2. Change center to use the app service
        center: [0, 0],
        // TODO: 1. Change zoom to use the app service
        zoom: 0,
      }),
    })
  }
}
