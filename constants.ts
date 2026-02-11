import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "SHAROKH ARIA",
  title: "SOFTWARE DEVELOPER & AI ENGINEER",
  profile: "A passionate developer with excellent communication skills and diverse knowledge ranging from project management and complex database design to mobile app development. I am deeply committed to staying at the forefront of emerging technologies, with a specific passion for building innovative tooling around AI and Large Language Models. If you need a dynamic developer who can navigate complexity and deliver boundary-pushing solutions, look no further.",
  contact: {
    phone: "+31 6 14549020",
    email: "sharokh.aria@gmail.com",
    location: "Zoetermeer, The Netherlands",
    linkedin: "https://www.linkedin.com/in/sharokh-aria-b09318133/",
    github: "https://github.com/shawoozy"
  },
  skills: [
    {
      category: "Backend & Languages",
      items: [".NET", "PHP", "C#", "Java", "Python", "TypeScript", "Kotlin"]
    },
    {
      category: "Frontend & Mobile",
      items: ["Flutter", "VueJS", "React", "Android"]
    },
    {
      category: "Infrastructure & DevOps",
      items: ["Docker", "Kubernetes", "AWS", "Azure", "Nginx", "TeamCity", "CI/CD"]
    },
    {
      category: "Databases & Data",
      items: ["MySQL", "Redis", "RabbitMQ", "RoomDB", "CosmosDB"]
    },
    {
      category: "AI & Tooling",
      items: ["Claude Code", "Kiro", "Cursor", "n8n", "MCP", "Custom Agents", "Skills"]
    },
    {
      category: "Methodologies",
      items: ["Scrum", "Jira", "Project Management", "Technical Product Owner", "OOP"]
    }
  ],
  experience: [
    {
      id: "miniclip-ai",
      role: "AI Lead Developer",
      company: "Miniclip NL",
      location: "Zoetermeer",
      period: "06/2025 - Present",
      description: "Leading the AI division to innovate within the gaming ecosystem. Responsible for architecting and deploying AI-driven features that enhance player engagement and streamline development processes. Managing the technical roadmap for AI integration across multiple game titles.",
      techStack: ["Python", "AI/ML", "C#", "Azure", "Large Language Models", "Technical Leadership"]
    },
    {
      id: "pym",
      role: "Part-time CTO",
      company: "Pic Your Moment",
      location: "The Netherlands",
      period: "06/2025 - Present",
      description: "Serving as the strategic technical leader, overseeing the entire technology stack and engineering team. Focused on scaling the platform's infrastructure, ensuring high availability, and creating cutting-edge AI development pipelines to drive the technical vision for future product iterations.",
      techStack: ["Strategic Planning", "Cloud Architecture", "Mobile Development", "Team Management", "Flutter", "AI Pipelines"]
    },
    {
      id: "gripbb",
      role: "Lead Backend Developer",
      company: "GripBB / Verkooploep",
      location: "Rijswijk",
      period: "04/2024 - 06/2025",
      description: "Managing special administration applications for clients like Quion and Flanderijn. The application is built in Symfony and Vue, running on Docker containers in the cloud. My responsibilities include refactoring legacy codebases, upgrading Symfony/PHP versions, developing new features, and establishing robust CI/CD pipelines in TeamCity.",
      techStack: ["Symfony", "MySQL", "PHP", "Redis", "Nginx", "Scrum", "Jira", "TeamCity", "CI/CD"]
    },
    {
      id: "gems",
      role: "Tech Lead / CTO",
      company: "Gems Community",
      location: "Amsterdam",
      period: "04/2023 - 04/2024",
      description: "Joined as Full-stack Tech Lead to redesign the Gems Community app during its soft launch phase. Introduced SCRUM workflows to boost team efficiency. The app, built in Flutter, utilizes a robust architecture with Use Case design patterns and BLoC state management. Also released an open-source Flutter package during this tenure.",
      techStack: ["Flutter", "Laravel", "MySQL", "PHP", "AWS", "Redis", "Nginx", "Scrum", "Jira", "Project Management"]
    },
    {
      id: "miniclip",
      role: "Fullstack Developer",
      company: "Miniclip NL (formerly GameBasics)",
      location: "Zoetermeer",
      period: "05/2021 - 04/2023",
      description: "Initially advised the backend team on microservices for competitions and teams for the Online Soccer Manager (OSM) app. Later transitioned to the Android Technical Debt team to modernize the legacy codebase. Replaced the deprecated DBFlow with RoomDB for data persistence and introduced Hilt for dependency injection, significantly improving testability and maintainability.",
      techStack: ["Android", "Kotlin", ".NET", "C#", "Azure", "Docker", "Kubernetes", "Scrum", "Jira", "TeamCity"]
    },
    {
      id: "stateless",
      role: "Tech Lead / Product Owner",
      company: "Stateless",
      location: "Zoetermeer",
      period: "05/2020 - 05/2022",
      description: "Led development for multiple clients:",
      projects: [
        {
          name: "Voetbalpoules",
          description: "Developed a Flutter mobile app for prediction games, enabling faster development than separate native apps. Implemented BLoC state management."
        },
        {
          name: "ProAutomotive",
          description: "Designed a system to automate operational processes using Python, FastAPI, and MySQL. Achieved 99.5% uptime with advanced monitoring via Grafana and Sentry."
        },
        {
          name: "Daya",
          description: "Created a modern administrative solution (CRM, invoicing). Built backend services in Laravel/Python and a mobile app in Flutter. Managed DevOps on AWS (EC2, S3) and TeamCity."
        }
      ],
      techStack: ["Flutter", "Laravel", "MySQL", "PHP", "AWS", "Redis", "Nginx", "Python", "FastAPI", ".NET", "VueJS"]
    },
    {
      id: "gamebasics",
      role: "Backend Developer",
      company: "Gamebasics",
      location: "Zoetermeer",
      period: "02/2017 - 05/2020",
      description: "Worked on Online Soccer Manager (OSM). Key role in migrating the .NET monolith backend to an event-driven microservices architecture using Docker, Kubernetes, and RabbitMQ. This transformation improved scalability and allowed for independent service deployment.",
      techStack: [".NET", "C#", "Azure", "Docker", "Kubernetes", "CI/CD", "Scrum", "RabbitMQ", "CosmosDB"]
    },
    {
      id: "rosterbuster",
      role: "Backend Developer",
      company: "Rosterbuster",
      location: "Zoetermeer",
      period: "01/2016 - 08/2018",
      description: "Backend development for a popular app for airline crew. Rewrote legacy PHP scripts into a robust Laravel framework. Implemented feature-rich APIs with queuing (AWS SQS) and scheduling capabilities to handle crew schedules and flight data.",
      techStack: ["Laravel", "MySQL", "PHP", "AWS", "Redis", "Nginx", "Scrum", "Jira"]
    }
  ],
  certificates: [
    {
      name: "Professional Scrum Product Owner II",
      issuer: "Scrum.org",
      year: "2024"
    }
  ],
  education: [
    {
      degree: "Bachelor Software Engineer",
      institution: "The Hague University",
      year: "2017"
    }
  ]
};