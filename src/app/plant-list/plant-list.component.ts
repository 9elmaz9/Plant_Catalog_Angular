import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Plant } from '../plant';

@Component({
  selector: 'app-plant-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent {
  plants: Plant[] = [
    { id: 1, name: 'Rose', description: 'A beautiful flower', imageUrl: 'assets/rose.jpg', details: 'Roses are known for their fragrance and variety of colors.' },
    { id: 2, name: 'Tulip', description: 'A spring flower', imageUrl: 'assets/tulip.jpg', details: 'Tulips bloom in the spring and come in many vibrant colors.' },
    { id: 3, name: 'Sunflower', description: 'A tall, bright flower', imageUrl: 'assets/sunflower.jpg', details: 'Sunflowers follow the sun and can grow very tall.' },
    { id: 4, name: 'Daisy', description: 'A simple, white flower', imageUrl: 'assets/daisy.jpg', details: 'Daisies are known for their white petals and yellow centers.' },
    { id: 5, name: 'Orchid', description: 'An exotic flower', imageUrl: 'assets/orchid.jpg', details: 'Orchids are exotic flowers that come in many shapes and colors.' },
    { id: 6, name: 'Lavender', description: 'A fragrant purple flower', imageUrl: 'assets/lavender.jpg', details: 'Lavender is known for its soothing fragrance and purple flowers.' },
    { id: 7, name: 'Cactus', description: 'A resilient desert plant', imageUrl: 'assets/cactus.jpg', details: 'Cacti are resilient plants that thrive in arid conditions.' },
    { id: 8, name: 'Bonsai', description: 'A miniature tree', imageUrl: 'assets/bonsai.jpg', details: 'Bonsai are miniature trees grown in containers and shaped by pruning.' }
  ];
}
