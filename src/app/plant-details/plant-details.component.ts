import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Plant } from '../plant';

@Component({
  selector: 'app-plant-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.css']
})
export class PlantDetailsComponent {
  plant: Plant | undefined;
  plants: Plant[] = [
    { id: 1, name: 'Rose', description: 'A beautiful flower', imageUrl: 'assets/rose.jpg', details: 'Roses have been cherished for their beauty and fragrance for thousands of years. They are a symbol of love and elegance.' },
    { id: 2, name: 'Tulip', description: 'A spring flower', imageUrl: 'assets/tulip.jpg', details: 'Tulips bloom in the spring and come in a variety of colors. They are known for their cup-shaped flowers and are a favorite in gardens.' },
    { id: 3, name: 'Sunflower', description: 'A tall, bright flower', imageUrl: 'assets/sunflower.jpg', details: 'Sunflowers are known for their large, bright yellow petals and tall stems. They are a symbol of positivity and strength.' },
    { id: 4, name: 'Daisy', description: 'A simple, white flower', imageUrl: 'assets/daisy.jpg', details: 'Daisies are small, white flowers with yellow centers. They symbolize purity and innocence.' },
    { id: 5, name: 'Orchid', description: 'An exotic flower', imageUrl: 'assets/orchid.jpg', details: 'Orchids are exotic flowers known for their intricate shapes and vibrant colors. They are often associated with luxury and beauty.' },
    { id: 6, name: 'Lavender', description: 'A fragrant purple flower', imageUrl: 'assets/lavender.jpg', details: 'Lavender is known for its soothing fragrance and purple flowers. It is often used in aromatherapy and as a natural remedy.' },
    { id: 7, name: 'Cactus', description: 'A resilient desert plant', imageUrl: 'assets/cactus.jpg', details: 'Cacti are resilient plants that thrive in desert conditions. They store water in their thick stems and have spines for protection.' },
    { id: 8, name: 'Bonsai', description: 'A miniature tree', imageUrl: 'assets/bonsai.jpg', details: 'Bonsai trees are miniature versions of full-sized trees, grown in small containers. They require careful pruning and maintenance.' }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.plant = this.plants.find(p => p.id === id);
  }
}
