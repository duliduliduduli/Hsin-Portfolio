export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  client: string;
  challenge: string;
  solution: string;
  impact: string;
  role: string[];
  techStack: string[];
  coverImage: string;
  images: {
    url: string;
    caption?: string;
    fullWidth?: boolean;
  }[];
}