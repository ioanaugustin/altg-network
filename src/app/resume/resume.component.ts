import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})

export class ResumeComponent {
  personalInfo = {
    name: 'Ioan Augustin Lates',
    title: 'Senior Web Developer',
    email: 'latesioanaugustin@gmail.com',
    phone: '0754363445',
    location: 'Iasi, Romania',
    linkedin: 'https://www.linkedin.com/in/iaugustinlates/',
    dateOfBirth: '02/08/1994'
  };

  education = [
    {
      degree: 'Bachelor Degree in Computer Science',
      institution: 'Faculty of Informatics',
      period: '2013 – 2016',
      location: 'Iasi, Romania'
    },
    {
      degree: 'High School Diploma',
      institution: 'Colegiul National "Stefan Cel Mare"',
      period: '2009 – 2013',
      location: 'Targu Neamt'
    }
  ];

  workExperience = [
    {
      title: 'Senior Web Developer',
      company: 'Primetals Technologies',
      period: '11/2022 – present',
      location: 'Remote, Romania',
      responsibilities: [
        'Specializing in migrating legacy JavaScript applications to newer Angular versions, focusing on code refactoring and UI enhancement with Angular Material.',
        'Integrating ECharts for advanced data visualizations.',
        'Using Angular, TypeScript, RxJS, and CSS to build user-friendly web applications.',
        'Collaborating with cross-functional teams to exceed customer expectations.'
      ]
    },
    {
      title: 'Senior Web Developer',
      company: '3Pillar Global',
      period: '06/2021 – 11/2022',
      location: 'Remote, Romania',
      responsibilities: [
        'Participated in enhancing the functionality of an application that involves organizing and transmitting data to other applications, with the aim of generating specific reports.',
        'Worked on the application\'s architecture and design, as well as provided leadership to junior developers on the team.',
        'Utilized expertise in Angular and JavaScript in implementing best practices and ensuring the application\'s scalability, maintainability, and performance.'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Cognizant Softvision',
      period: '08/2019 – 06/2021',
      location: 'Romania',
      responsibilities: [
        'Developed an Angular application designed to streamline inventory management for automotive dealerships, offering functionalities such as inventory monitoring, order placement, and seamless viewing and editing capabilities for efficient stock management.',
        'Crafted the front-end user interface with Angular, facilitating carriers in effortlessly viewing, editing, and overseeing shipments.',
        'Contributed to the development of functionalities on an already developed application using React as a technology + Redux and wrote automatic tests using Nightwatch.',
        'Technologies used: Angular, Typescript, Angular Material, RxJS, HTML, SCSS.'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Codeless',
      period: '04/2019 – 08/2019',
      location: 'Romania',
      responsibilities: [
        'Contributed to the delivery of new functionalities on an existing Angular application. The purpose of the application was to make transport more efficient.',
        'Developed a Progressive Web Application (PWA) using CSS and the Ionic Framework, designed to cater to the needs of naval carriers. The application features mobile responsiveness and incorporates offline capabilities, ensuring seamless operation even in the absence of an internet connection.'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'OSF Global',
      period: '05/2017 – 03/2019',
      location: 'Romania',
      responsibilities: [
        'Transformed the design team\'s UX wireframes and mockups into responsive, interactive features, leveraging Angular as the frontend technology alongside HTML/CSS and JavaScript.',
        'Employed SASS as the CSS preprocessor, GIT for version control, and Gulp/Webpack as task runners to streamline the development workflow.',
        'On the backend, utilized JavaScript within the Demandware e-commerce platform.',
        'Projects were specifically focused on enhancing user experiences in the cosmetics, perfumes, and luxury industries.',
        'Technologies used: Javascript, Jquery, HTML, CSS, Salesforce Demandware'
      ]
    },
    {
      title: 'Web Developer',
      company: 'IOmundo',
      period: '09/2016 – 04/2017',
      location: 'Romania',
      responsibilities: [
        'Designed, developed and maintained the front-end and back end functionalities of websites using technologies like HTML, CSS, Javascript, PHP and MySQL.',
        'Used web template system for PHP (Smarty), a database abstraction layer (ADOdb), jQuery library, Bootstrap framework, content management systems(Wordpress, Magento) and tools like Photoshop, MySQL Workbench and Sublime Text.'
      ]
    }
  ];

  certificates = [
    {
      name: 'Agile Scrum Foundation',
      description: 'Achieving the Agile Scrum Foundations certificate has deepened my understanding of agile methodologies and the Scrum framework. I\'ve learned how to enhance collaboration within teams, optimize project workflows, and prioritize customer satisfaction through iterative development'
    }
  ];

  projects: any = [
    {
      name: 'JPFCO',
      description: 'Nantucket Real Estate & Nantucket Rentals',
      period: '09/2016 – 04/2017',
      details: 'Revitalised the visual interface of the web application tailored specifically for a real estate agency, introducing innovative logical functionalities through the utilisation of cutting-edge technologies like JavaScript, jQuery, HTML, and CSS.'
    },
    {
      name: 'Micromania',
      description: 'Micromania, spécialiste des jeux vidéo console, PC et consoles portables',
      period: '2018 – 2018',
      details: [
        'Contributed to the construction of a responsive gaming store web application using technologies such as JavaScript, jQuery, HTML, CSS, and Salesforce Demandware.',
        'Involved in implementing various functionalities, including carousels, store locator, content sections, footers, headers, and shopping cart.'
      ]
    },
    {
      name: 'Noah',
      description: 'Furniture to order in Iasi',
      details: 'I developed a personalised WordPress application for a furniture website, encompassing both the design and content.'
    }
  ];

  skills = [
    'Angular', 'TypeScript', 'Angular Material', 'CSS', 'GIT', 'Wordpress', 'Agile',
    'Salesforce Demandware', 'Javascript', 'RxJS', 'HTML', 'Node', 'Database',
    'React', 'Arhitecture'
  ];

  languages = [
    'Romanian', 'Spanish', 'English'
  ];

  interests = [
    'Cycling', 'Fragrance enthusiast', 'Exploring nature and hiking in scenic locations',
    'Skiing', 'Pickup - Vinyls', 'Trying out new cuisines and cooking unique dishes',
    'Formula 1', 'Traveling to new places and experiencing different cultures', 'Writing short stories'
  ];

  // Helper method for Angular template
  isArray(obj: any): boolean {
    return Array.isArray(obj);
  }
}