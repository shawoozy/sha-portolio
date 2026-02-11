export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  projects?: {
    name: string;
    description: string;
  }[];
  techStack: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
  year: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  profile: string;
  contact: ContactInfo;
  experience: Experience[];
  skills: Skill[];
  certificates: Certificate[];
  education: Education[];
}