import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  stack: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss'],
})
export class MyProjectsComponent {
  projects: Project[] = [
    {
      title: 'CollabTask — Plateforme Collaborative de Pilotage de Tâches',
      stack: 'Angular · Spring Boot · MySQL',
      description:
        'Plateforme collaborative de pilotage de tâches avec Dashboard Admin, création et assignation des tâches, gestion des priorités, statuts TODO/DONE et suivi en temps réel avec notifications email.',
      image: 'assets/experience/Admin Dashboard.png',
    },
    {
      title: 'Intelligent Deepfake Detection Platform  r',
      stack: 'python · react',
      description:
        'Built an AI interface to detect deepfake videos and images via upload. Provides instant authenticity analysis with confidence score and visual feedback.s using 3D rendering techniques with logo importing.',
      image: 'assets/experience/tata.jpeg',
    },
    {
      title: 'TounesShop: boutique en ligne',
      stack: 'Angular · Spring Boot · MySQL',
      description:
        'Developed a full-stack e-commerce platform with product catalog, cart and secure checkout. Features user authentication, order management and admin dashboard for inventory control.',
      image: 'assets/experience/tounesshop.jpeg',
    },
    {
      title: 'MineFood',
      stack: 'Angular',
      description:
        'Developed a food ordering web application using Angular. Users can browse food items, search for dishes, view food details, and manage their orders through a simple and user-friendly interface.',
      image: 'assets/experience/food.jpeg',
    },
  ];
}
