
import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  name: "Md. Touhidi Hasan Mondol Nishat",
  title: "DevOps Engineer | Cloud & Kubernetes Specialist | RHCSA Certified",
  summary: "I design, automate, and manage scalable cloud infrastructure and CI/CD pipelines to deliver reliable, secure, and high-performance systems.",
  about: "DevOps Engineer with 4 years of experience in system administration, cloud infrastructure, and automation. Skilled in designing and managing containerized applications, building CI/CD pipelines, and optimizing IT environments for performance and reliability. Certified RHCSA, with hands-on experience in AWS, GCP, Azure, and advanced DevOps tools. Proven ability to reduce deployment times, improve system uptime, and enhance operational efficiency.",
  age: "27 Years",
  experience_years: "4 Years",
  skills: [
    {
      title: "DevOps & Automation",
      skills: [
        { name: "Docker", proficiency: 95 },
        { name: "Kubernetes", proficiency: 90 },
        { name: "Jenkins", proficiency: 85 },
        { name: "GitLab CI/CD", proficiency: 88 },
        { name: "Terraform", proficiency: 82 },
        { name: "Ansible", proficiency: 80 }
      ]
    },
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS", proficiency: 85 },
        { name: "GCP", proficiency: 75 },
        { name: "Azure", proficiency: 70 },
        { name: "BCC Cloud", proficiency: 90 }
      ]
    },
    {
      title: "System & Infrastructure",
      skills: [
        { name: "Linux (RHEL/CentOS)", proficiency: 95 },
        { name: "Windows Server", proficiency: 80 },
        { name: "VMware ESXi", proficiency: 85 },
        { name: "Networking (TCP/IP)", proficiency: 88 }
      ]
    },
    {
      title: "Monitoring & Databases",
      skills: [
        { name: "Prometheus & Grafana", proficiency: 85 },
        { name: "Zabbix", proficiency: 80 },
        { name: "MySQL/PostgreSQL", proficiency: 82 },
        { name: "Oracle Database", proficiency: 75 }
      ]
    }
  ],
  experience: [
    {
      role: "DevOps Engineer",
      company: "IBCS-PRIMAX Software (Bangladesh) Limited.",
      location: "Dhaka, Bangladesh",
      period: "July 2025 – Present",
      logo: "/assets/logos/ibcs-primax.png",
      description: [
        "Designed and deployed containerized applications using Docker & Kubernetes on self-hosted and cloud servers.",
        "Built and maintained automated CI/CD pipelines with Jenkins and GitLab, reducing deployment time by 40%.",
        "Managed cloud infrastructure (AWS, GCP, Azure, BCC Cloud) ensuring 99.9% uptime and high availability.",
        "Implemented Infrastructure-as-Code with Terraform, improving provisioning efficiency.",
        "Introduced backup, disaster recovery, and security compliance processes, minimizing downtime risk."
      ]
    },
    {
      role: "System Administrator",
      company: "Divine IT Limited.",
      location: "Dhaka, Bangladesh",
      period: "July 2023 – June 2025",
      logo: "/assets/logos/divine-it.png",
      description: [
        "Automated system tasks using Shell scripts & Ansible, reducing manual workload by 30%.",
        "Managed CI/CD pipelines, Docker, and Kubernetes deployments in development environments.",
        "Deployed applications on AWS (EC2, RDS, S3, CloudWatch) ensuring scalable performance.",
        "Install and Maintenance a Linux-based ERP server.",
        "Configured and monitored Linux servers, achieving improved system reliability.",
        "Implemented monitoring with Prometheus, Grafana, and Zabbix."
      ]
    },
    {
      role: "Software Support Engineer",
      company: "Divine IT Limited.",
      location: "Dhaka, Bangladesh",
      period: "July 2022 – June 2023",
      logo: "/assets/logos/divine-it.png",
      description: [
        "Provided L1/L2 support for ERP and POS solutions (PrismERP, LinesPay, PrismVAT, PrismPOS).",
        "Collaborated with development teams for bug fixing and performance optimization.",
        "Improved user experience through effective troubleshooting and documentation."
      ]
    },
    {
      role: "Customer Support",
      company: "Decent Act International.",
      location: "Titas Gas, Dhaka, Bangladesh",
      period: "December 2021 – June 2022",
      logo: "/assets/logos/Decent.png",
      description: [
        "Handled customer queries and technical support, ensuring service satisfaction.",
        "Documented and resolved issues, improving support efficiency."
      ]
    }
  ],
  projects: [
    {
      title: "Dhaka WASA Billing Software",
      organization: "Water Supply and Sewerage Authority (WASA)",
      techStack: ["Docker", "Kubernetes", "Jenkins", "GitLab"],
      logo: "/assets/logos/wasa.png",
      description: [
        "Deployed and managed Dhaka WASA billing application using Docker and Kubernetes in production.",
        "Automated deployment, scaling, and monitoring of containers to ensure high availability."
      ]
    },
    {
      title: "Cash Transfer Modernization (CTM)",
      organization: "Department of Social Services (DSS)",
      techStack: ["Docker", "Kubernetes", "Jenkins", "GitLab"],
      logo: "/assets/logos/dss.png",
      description: [
        "Maintained and optimized the CTM project environment in Kubernetes clusters.",
        "Handled rollout updates, troubleshooting, and service monitoring for smooth operations."
      ]
    },
    {
      title: "Next Generation Personal Information Management System (NGPIMS)",
      organization: "Bangladesh Police",
      techStack: ["Docker", "Kubernetes", "Jenkins", "GitLab"],
      logo: "/assets/logos/police.png",
      description: [
        "Managed and monitored NGPIMS project containerized infrastructure.",
        "Improved deployment efficiency and reduced downtime through Kubernetes automation."
      ]
    }
  ],
  education: [
    { degree: "M.Sc in Computer Science & Engineering (CSE)", institution: "Dhaka International University", year: "In Progress" },
    { degree: "B.Sc in Computer Science & Engineering (CSE)", institution: "Dhaka International University", year: "2024", result: "3.17 out of 4.00" },
    { degree: "Diploma in Computer Technology", institution: "Nilphamari Technical School and College", year: "2020", result: "3.77 out of 4.00" },
    { degree: "SSC (Science)", institution: "Sundarganj Abdul Mozid Govt Boys High School", year: "2015", result: "4.44 out of 5.00" }
  ],
  certifications: [
    {
      title: "Red Hat Certified System Administrator (RHCSA) | ID: 240-237-271",
      logo: "/assets/logos/redhat.png"
    },
    {
      title: "DevOps Training (Docker, Kubernetes, CI/CD, AWS) – Ostad",
      logo: "/assets/logos/ostad.png"
    },
    {
      title: "Cyber Security Training – EDGE Project (BCC & IIT, University of Dhaka)",
      logo: "/assets/logos/edge.png"
    }
  ],
  gallery: [
    {
      title: "RHCSA Certification",
      category: "Professional Certificate",
      image: "/assets/gallery/rhcsa.jpg"
    },
    {
      title: "DevOps Masterclass",
      category: "Professional Certificate",
      image: "/assets/gallery/devops.jpg"
    },
    {
      title: "Cyber Security Specialist",
      category: "Technical Training",
      image: "/assets/gallery/security.jpg"
    }
  ],
  contact: {
    linkedin: "https://linkedin.com/in/touhidi-hasan-nishat",
    email: "nishat01mondol@gmail.com",
    phone: "+880 1717 335002",
    address: "Mohammadpur, Dhaka, Bangladesh"
  },
  references: [
    {
      name: "Imam Mahdi",
      role: "Senior Manager, ERP",
      company: "Brac Bank PLC",
      phone: "+8801674839983",
      email: "imam.mahdi.cse@gmail.com"
    },
    {
      name: "Md. Arafat Hossen",
      role: "Senior Engineer",
      company: "bKash Limited",
      phone: "+8801685245749",
      email: "arafat.hossen@bkash.com"
    }
  ]
};
