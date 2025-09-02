import type { SiteConfig, SiteContent } from "@types";

export const SITE_CONFIG: SiteConfig = {
  title: "Andrei Crăciun — Java Backend Developer",
  author: "Andrei Georgian Crăciun",
  description:
    "Software Engineer based in Bucharest, ROMANIA. I specialize in building scalable backend systems, designing REST and gRPC APIs, and maintaining microservices using Java and Spring Boot.",
  lang: "en",
  siteLogo: "/andrei-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Education", href: "#education" },
    { text: "Projects", href: "#projects" },
    { text: "Certifications", href: "#certifications" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/andrei-georgian-craciun" },
    { text: "Github", href: "https://github.com/andreigeorgiancraciun" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://andreicraciun.dev",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Andrei Crăciun",
    specialty: "Java Backend Developer",
    summary:
      "Developer based in Bucharest, ROMANIA. I specialize in building scalable backend systems, designing REST and gRPC APIs, and maintaining microservices using Java and Spring Boot.",
    email: "andreigeorgiancraciun@yahoo.com"
  },
  experience: [
    {
      company: "Voya",
      position: "Java Developer",
      startDate: "Jul. 2024",
      endDate: "Current",
      summary: [
        "As a Java Backend Engineer for CARIAD BFF (Backend for Frontend), I develop and maintain backend services that connect millions of drivers to their cars through mobile apps such as myAudi, myVolkswagen, WeConnect ID, Škoda, and regional instances like CARIAD China, Korea, USA or Europe.",
        "Beyond core Java development, I also manage the DevOps lifecycle: provisioning and deploying services on Azure, handling infrastructure as code with Terraform, containerization with Docker and Helm, and automated pipelines using GitHub Actions.",
        "I ensure secure operations by integrating Azure Key Vault and cert-manager for secrets and certificate management, and I maintain system observability with New Relic and Grafana.",
      ],
    },
    {
      company: "Societe Generale Corporate and Investment Banking - SGCIB",
      position: "Java Developer",
      startDate: "Sept. 2023",
      endDate: "Jul. 2024",
      summary: [
        "As a Java Backend Developer at Société Générale Corporate & Investment Banking, I worked on two critical applications: a legacy 30+ year-old monolith and a new platform built on Spring Boot microservices.",
        "My responsibilities included developing new features, maintaining existing functionality, and providing support for numerous internal clients who relied on our services for financial workflows.",
        "I actively contributed to the gradual refactoring and replacement of the monolith, integrating RabbitMQ to enable reliable asynchronous communication between services. In addition, I participated in on-call rotations (two weeks at a time) to ensure stability, uptime, and responsiveness for production systems."
      ],
    },
    {
      company: "Deloitte Digital Romania",
      position: "Java Consultant",
      startDate: "Jun. 2022",
      endDate: "Sept. 2023",
      summary: [
        "As a Java Developer for the Access UK Immigration Application Service, I am responsible for the development and maintenance of the UK's online immigration application system.",
        "With a focus on code quality, continuous improvement, and utilizing modern technologies, I work on multiple Java Spring Boot applications within a microservices architecture.",
        "By leveraging Docker containers, CI/CD pipelines, Kubernetes, and AWS as a cloud provider, I ensure the efficient and reliable operation of the system. Additionally, I review pull requests, contribute impact assessments for new functionalities, and drive enhancements to deliver an exceptional user experience.",
      ]
    },
    {
      company: "Insurance Business Applications",
      position: "Junior Java Developer",
      startDate: "Jul. 2021",
      endDate: "Jun. 2022",
      summary: [
        "I am a Software Engineer with solid experience in the Insurance industry, developing and deploying Java Spring Boot applications using a microservices architecture on AWS cloud.",
        "My core skills include Java (8-17), Spring Framework, Spring Boot, Hibernate, and Data Persistence with JPA. I have a hands-on approach to unit testing with JUnit and Mockito and experience managing data streams with Apache Kafka.",
        "I'm proficient in database management using JDBC, enhancing the interaction between Java and various databases. In the DevOps realm, I use Docker and Kubernetes for deployment and scaling, Git for version control, Maven for build automation, and Jenkins for continuous integration/delivery."
      ]
    },
    {
      company: "Connections Consult",
      position: "Junior Full Stack Developer",
      startDate: "Mar. 2020",
      endDate: "Jul. 2021",
      summary: [
        "I am a Java/Angular Full-Stack Developer currently working with a dynamic consulting firm on multiple projects across different areas.",
        "For backend development, I employ Java, Spring Boot, Hibernate, and JPA, primarily focusing on creating RESTful services.",
        "I have experience in managing databases using PostgreSQL.",
        "On the frontend, my expertise lies in using Angular, TypeScript, and Material to build intuitive and responsive interfaces.",
        "My DevOps skills include containerization using Docker and managing codebases with Git. I am also proficient in Maven for project management and build automation.",
      ]
    }
  ],
  education: [
    {
      institution: "Universitatea POLITEHNICA din București",
      degree: "Master's degree",
      fieldOfStudy: "Applied electronics and computer science",
      startDate: "2018",
      endDate: "2020",
    },
    {
      institution: "Universitatea POLITEHNICA din București",
      degree: "Bachelor's degree",
      fieldOfStudy: "Electronics, Telecommunications and Information Technology",
      startDate: "2014",
      endDate: "2018",
    }
  ],
  projects: [
    {
      name: "Travel Planner App",
      summary: "A travel planner platform integrated with ChatGPT API, it provides real-time information about destinations — including weather, currency, attractions, restaurants, traditional food, transport, hotels, and local events.",
      linkPreview: "https://youtu.be/bouCwoRb89U",
      linkSource: "https://github.com/andreigeorgiancraciun/journey-genius",
      image: "/travel-planner.png",
    },
    {
      name: "Library Platform",
      summary: "A full-stack system built with a React frontend and a Spring Boot microservices backend, orchestrated via Docker, Eureka, Config Server, and Gateway.",
      linkPreview: "https://youtu.be/qL4-T1AuakA",
      linkSource: "https://github.com/CodeDeiOrg/Spring-Microservices-Backend-Docker",
      image: "/library.png",
    },
    {
      name: "OLX Auto-Poster Backend App",
      summary: "Spring Boot service that integrates with the OLX Europe Partner API to automatically post and manage adverts, sync statuses, and handle messaging with OLX users.",
      linkPreview: "https://developer.olx.ro/api/doc#section/Authentication",
      linkSource: "https://github.com/andreigeorgiancraciun/olx-back-end",
      image: "/olx.png",
    }
  ],
  certifications: [
    {
      name: "Oracle Certified Associate, Java SE 8 Programmer",
      earnedOn: "April 2023",
      linkPreview: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=A5CA735A32C3A42F146300164DCF8EE06EAD3B382EB6197D18B10CA6802E4028",
      image: "/oracle.png"
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      earnedOn: "June 2025",
      linkPreview: "https://learn.microsoft.com/api/credentials/share/en-us/AndreiGeorgianCraciun/96817C68C1DE47E9?sharingId",
      image: "/microsoft.png"
    },
    {
      name: "Amazon Web Services (AWS)",
      earnedOn: "November 2022",
      linkPreview: "https://www.credly.com/badges/7589355b-9a8b-4391-9d4b-1cdf2e8c0a12/linked_in_profile",
      image: "/aws.png"
    },
    {
      name: "AgilePM® Foundation",
      earnedOn: "November 2018",
      linkPreview: "https://www.youracclaim.com/badges/6729ea09-7ac4-48ac-89d5-b85712aa875e",
      image: "/agile.png"
    }
  ],
  about: {
    description: `
      Hi, I’m Andrei Crăciun, a Java Backend Engineer focused on designing and running scalable, reliable microservices.
      I build clean, well-tested APIs and event-driven systems with Java and Spring Boot.

      Day to day I work with Spring Boot for building APIs and microservices. I containerize services with Docker and deploy to Kubernetes using Helm. 
      In the cloud, I hold certifications on both AWS and Azure (and I’m actively pursuing Google Cloud), 
      automated CI/CD with GitHub Actions, and provisioned infrastructure with Terraform.
      
      I enjoy turning real-world requirements into robust backend solutions, simplifying complexity, and leaving teams with
      maintainable code and clear documentation.
    `,
    image: "/andrei-big.jpg",
  },
};

// #5755ff
