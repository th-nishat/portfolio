
export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface Project {
  title: string;
  organization: string;
  techStack: string[];
  description: string[];
  logo?: string;
}

export interface Skill {
  name: string;
  proficiency: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  result?: string;
}

export interface Certification {
  title: string;
  logo?: string;
}

export interface GalleryItem {
  title: string;
  category: string;
  image: string;
}

export interface Reference {
  name: string;
  role: string;
  company: string;
  phone: string;
  email: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  about: string;
  age: string;
  experience_years: string;
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  gallery: GalleryItem[];
  contact: {
    linkedin: string;
    email: string;
    phone: string;
    address: string;
  };
  references: Reference[];
}
