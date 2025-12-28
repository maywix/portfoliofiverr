import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SafeUrlPipe } from './safe-url.pipe';

interface Skill {
  name: string;
  icon: string;
}

interface VideoProject {
  title: string;
  description: string;
  embedUrl: string;
  thumbnailUrl: string;
  loaded: boolean;
}

interface VideoSection {
  title: string;
  description: string;
  items: VideoProject[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly name = 'Maywix';
  readonly title = 'Video Editor & Motion Designer';
  readonly tagline = 'Créateur de contenu visuel captivant pour les marques et créateurs qui veulent se démarquer.';
  
  readonly navLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projets', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  readonly skills: Skill[] = [
    { name: 'After Effects', icon: 'ae' },
    { name: 'Premiere Pro', icon: 'pr' },
    { name: 'Photoshop', icon: 'ps' },
    { name: 'Illustrator', icon: 'ai' },
    { name: 'Blender', icon: 'blender' }
  ];

  readonly videoSections: VideoSection[] = [
    {
      title: 'Motion Design',
      description: 'Animations dynamiques et créatives pour vos projets.',
      items: [
        {
          title: 'Pub produit tech innovant',
          description: 'Animation réalisée avec After Effects et modèle 3D sur Blender.',
          embedUrl: 'https://www.youtube.com/embed/STLDeUZ2p_Y',
          thumbnailUrl: 'https://img.youtube.com/vi/STLDeUZ2p_Y/hqdefault.jpg',
          loaded: false
        },
        {
          title: 'Kinetic Typography',
          description: 'Animation typographique réalisée avec After Effects et Blender.',
          embedUrl: 'https://www.youtube.com/embed/vOQ5NRyWoxk',
          thumbnailUrl: 'https://img.youtube.com/vi/vOQ5NRyWoxk/hqdefault.jpg',
          loaded: false
        },
        {
          title: 'Poster Animé',
          description: 'Création d\'un poster animé dynamique avec des effets visuels captivants.',
          embedUrl: 'https://www.youtube.com/embed/LIOPeObe7g8',
          thumbnailUrl: 'https://img.youtube.com/vi/LIOPeObe7g8/hqdefault.jpg',
          loaded: false
        },
        {
          title: 'Animation Produit - ESTRN',
          description: 'Animation publicitaire réalisée pour la marque ESTRN avec une esthétique moderne.',
          embedUrl: 'https://www.youtube.com/embed/jLBfk_fdueM',
          thumbnailUrl: 'https://img.youtube.com/vi/jLBfk_fdueM/hqdefault.jpg',
          loaded: false
        },
        {
          title: 'Animation Logo - KClub',
          description: 'Animation de logo dynamique pour l\'application KClub.',
          embedUrl: 'https://www.youtube.com/embed/T008KNqA-FI',
          thumbnailUrl: 'https://img.youtube.com/vi/T008KNqA-FI/hqdefault.jpg',
          loaded: false
        },
        {
          title: 'Animation Web Doc',
          description: 'Animation réalisée pour un web documentaire interactif.',
          embedUrl: 'https://www.youtube.com/embed/uyKr59hiNTM',
          thumbnailUrl: 'https://img.youtube.com/vi/uyKr59hiNTM/hqdefault.jpg',
          loaded: false
        }
      ]
    },
    {
      title: 'Montage Vidéo',
      description: 'Montages professionnels pour documentaires, publicités et contenus créatifs.',
      items: [
        {
          title: 'Documentaire Urbex',
          description: 'Interview d\'un passionné d\'exploration urbaine. Filmé en log, monté sur Premiere Pro.',
          embedUrl: 'https://www.youtube.com/embed/b3R1oiNjyMs',
          thumbnailUrl: 'https://img.youtube.com/vi/b3R1oiNjyMs/hqdefault.jpg',
          loaded: false
        },
        {
          title: 'Publicité fond vert',
          description: 'Publicité d\'un produit tech avec incrustation fond vert.',
          embedUrl: 'https://www.youtube.com/embed/pt0JdST2fWY',
          thumbnailUrl: 'https://img.youtube.com/vi/pt0JdST2fWY/hqdefault.jpg',
          loaded: false
        },
        {
          title: 'Publicité extérieure',
          description: 'Publicité simple avec paysage extérieur.',
          embedUrl: 'https://www.youtube.com/embed/Zq5wIF0GJ5I',
          thumbnailUrl: 'https://img.youtube.com/vi/Zq5wIF0GJ5I/hqdefault.jpg',
          loaded: false
        }
      ]
    }
  ];

  isMenuOpen = false;
  isScrolled = false;
  heroVideoLoaded = false;

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 50;
      });
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  loadVideo(sectionIndex: number, itemIndex: number): void {
    this.videoSections[sectionIndex].items[itemIndex].loaded = true;
  }

  scrollToSection(href: string): void {
    this.closeMenu();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
