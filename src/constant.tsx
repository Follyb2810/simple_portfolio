import { BsWhatsapp , BsHouseDoor } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlinePerson2 ,MdOutlineContactMail} from "react-icons/md";
import { ReactNode } from "react";
import { CiFileOn,CiServer } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { Hero } from "./assets/image";
import { FaWhatsapp, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaPhone } from 'react-icons/fa';

//! ReactElement<typeof BsWhatsapp | typeof FaLinkedin>; 

interface SocialAccountItem {
    name: string;
    // icon: ReactElement<typeof BsWhatsapp | typeof FaLinkedin>;
    icon: ReactNode;
    path: string;
  }

  type AboutDataProps = {
    title?:string,
    content?:string,
    tag?:string,
    Img?:string
  }
  export interface SkilDataType {
    id:number,
    name:string,
    level:string
  }
  export interface workDoneProps {
    id:number,
    title:string,
    description:string,
    technologies?:string[],
    year?:number,
  }
  export interface ServicesProps extends workDoneProps {
    icon:string
  }
  
  export const SocialAccount: SocialAccountItem[] = [
    {
      name: 'whatsapp',
      icon: <BsWhatsapp size={24} />,
      path: ''
    },
    {
      name: 'linkedin',
      icon: <FaLinkedin size={24} />,
      path: ''
    },
  ];

  export const NavBarItem : SocialAccountItem[]=[
    {
      name: 'Home',
      icon: <BsHouseDoor size={24} />,
      path: '#hero'
    },
    {
      name: 'About',
      icon: <MdOutlinePerson2 size={24} />,
      path: '#about'
    },
    {
      name: 'Resume',
      icon: <CiFileOn size={24} />,
      path: '#resume'
    },
    {
      name: 'Portfolio',
      icon: <IoBagOutline size={24} />,
      path: '#portfolio'
    },
    {
      name: 'Service',
      icon: <CiServer size={24} />,
      path: '#service'
    },
    {
      name: 'Contact',
      icon: <MdOutlineContactMail size={24} />,
      path: '#contact'
    },
  ] 

  export const AboutData:AboutDataProps[] =[
    {
      Img:Hero
    },
    {
      title:'I am ',
      content:`numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
      optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
      obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
      nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
      tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,`,
      tag:'Contact me'
    }
  ]

  export const SkillData:Array<SkilDataType> = [
    { id: 1, name: 'HTML', level: 'Intermediate' },
    { id: 2, name: 'CSS', level: 'Advanced' },
    { id: 3, name: 'JavaScript', level: 'Advanced' },
    { id: 4, name: 'React', level: 'Advanced' },
    { id: 5, name: 'Node.js', level: 'Intermediate' },
    { id: 6, name: 'Express.js', level: 'Intermediate' },
    { id: 7, name: 'MongoDB', level: 'Intermediate' },
    { id: 8, name: 'Git', level: 'Advanced' },
    { id: 9, name: 'Responsive Design', level: 'Advanced' },
    { id: 10, name: 'RESTful APIs', level: 'Intermediate' },
  ];

  export const workDone :workDoneProps[]= [
    {
      id: 1,
      title: 'Responsive Website Redesign',
      description: 'Redesigned and developed a responsive website for a client in the e-commerce industry.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      year: 2022,
    },
    {
      id: 2,
      title: 'Blog Platform Development',
      description: 'Built a custom blog platform with user authentication, commenting, and post management features.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'React'],
      year: 2021,
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Designed and developed a personal portfolio website to showcase skills, projects, and contact information.',
      technologies: ['HTML', 'CSS', 'React'],
      year: 2020,
    },
  ];
  
  export const ServicesData:ServicesProps[] = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Create responsive and user-friendly websites using the latest technologies.',
      icon: '🚀',
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Build cross-platform mobile applications for iOS and Android devices.',
      icon: '📱',
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Design visually appealing and intuitive user interfaces for websites and apps.',
      icon: '✨',
    },
    {
      id: 4,
      title: 'SEO Optimization',
      description: 'Optimize websites to improve search engine rankings and visibility.',
      icon: '🔍',
    },
    {
      id: 5,
      title: 'E-commerce Solutions',
      description: 'Develop and customize e-commerce platforms for online businesses.',
      icon: '💳',
    },
    // Add more services as needed
  ];

  export interface SocialAccountProps {
    id:number,
    platform:string,
    link:string,
    icon:ReactNode
  }

export const socialAccounts :SocialAccountProps[]= [
  {
    id: 1,
    platform: 'WhatsApp',
    link: 'https://wa.me/1234567890',
    icon: <FaWhatsapp />,
  },
  {
    id: 2,
    platform: 'Email',
    link: 'mailto:example@example.com',
    icon: <FaEnvelope />,
  },
  {
    id: 3,
    platform: 'LinkedIn',
    link: 'https://www.linkedin.com/in/yourusername/',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    platform: 'Facebook',
    link: 'https://www.facebook.com/yourusername/',
    icon: <FaFacebook />,
  },
  {
    id: 5,
    platform: 'Twitter',
    link: 'https://twitter.com/yourusername/',
    icon: <FaTwitter />,
  },
  {
    id: 6,
    platform: 'Instagram',
    link: 'https://www.instagram.com/yourusername/',
    icon: <FaInstagram />,
  },
  {
    id: 7,
    platform: 'Phone',
    link: 'tel:+1234567890',
    icon: <FaPhone />,
  },
];

  
  