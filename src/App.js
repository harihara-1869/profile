import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Briefcase, Code, Award, ExternalLink } from 'lucide-react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('about');

  const profile = {
    name: "Hari Hara",
    title: "Computer Science Student & Embedded Systems Developer",
    location: "Bengaluru, Karnataka",
    email: "harihara1869@gmail.com",
    linkedin: "https://www.linkedin.com/in/hari-hara-1869ya/",
    bio: "Computer Science student at R V College of Engineering with expertise in embedded systems, firmware development, and GUI applications. Passionate about developing innovative solutions for EV technology and drone systems.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=HariHara",
  };

  const skills = [
    "Python", "C++", "Matlab Simulink", "GUI Development", "Dear PyGUI",
    "Embedded Systems", "Firmware Development", "BMS", "DAS", "Socket Programming",
    "TCP", "Multithreading", "Hardware Integration", "Git", "Real-time Systems"
  ];

  const projects = [
    {
      name: "BMS Algorithm",
      description: "Developed an Unscented Kalman Filter algorithm for SOC and SOH approximation for Team Chimera's EV, using Matlab Simulink and C programming",
      tech: ["Matlab Simulink", "C"],
      link: "https://github.com/harihara-1869/Team_Chimera_Firmware"
    },
    {
      name: "GUI Development for Sensor Array",
      description: "Real-time data visualization system using Dear PyGUI and Python. Reads data from 13 sensors over wifi in collaboration with Center for Green Technologies for analyzing H2 Electrolyzers",
      tech: ["Dear PyGUI", "Python", "TCP", "Socket", "Multithreading"],
      link: "#"
    },
    {
      name: "EV Car Firmware (BMS, DAS)",
      description: "Developing firmware for Electric Vehicle systems including Battery Management System and Data Acquisition System for Team Chimera",
      tech: ["C++", "Embedded Systems", "Hardware Integration"],
      link: "#"
    }
  ];

  const experience = [
    {
      role: "Member - Team Chimera",
      company: "R V College of Engineering",
      period: "Dec 2024 - Present",
      description: "Developing Firmware for EV Car (BMS, DAS). Working on battery management systems and data acquisition for electric vehicles."
    },
    {
      role: "Member - Project Jatayu",
      company: "R V College of Engineering",
      period: "Dec 2024 - Present",
      description: "Helping to develop Guardian Drone. Learning about drone regulations in India and contributing to drone system development."
    }
  ];

  const education = [
    {
      degree: "B.E in Computer Science",
      institution: "R V College Of Engineering",
      period: "Sep 2024 - Aug 2028",
      gpa: "9.25",
      location: "Bengaluru, Karnataka"
    },
    {
      degree: "2nd PUC in Computer Science",
      institution: "PES PU College",
      period: "Aug 2021 - Mar 2023",
      gpa: "87.66% (Core Subjects)",
      location: "Bengaluru, Karnataka"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-indigo-600">Portfolio</h1>
            <div className="flex gap-4">
              <a href="https://github.com/harihara-1869" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-indigo-600 transition">
                <Github size={24} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-indigo-600 transition">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${profile.email}`}
                 className="text-gray-600 hover:text-indigo-600 transition">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img 
            src={profile.avatar} 
            alt={profile.name}
            className="w-48 h-48 rounded-full border-4 border-indigo-600 shadow-xl"
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-5xl font-bold text-gray-900 mb-2">{profile.name}</h2>
            <p className="text-2xl text-indigo-600 mb-4">{profile.title}</p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 mb-4">
              <MapPin size={20} />
              <span>{profile.location}</span>
            </div>
            <p className="text-lg text-gray-700 max-w-2xl">{profile.bio}</p>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex gap-2 border-b border-gray-200">
          {['about', 'projects', 'experience', 'education'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-semibold capitalize transition ${
                activeTab === tab
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {activeTab === 'about' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <Code className="text-indigo-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Skills & Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium hover:bg-indigo-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <Briefcase className="text-indigo-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900">{exp.role}</h4>
                    <p className="text-indigo-600 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'education' && (
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <Award className="text-indigo-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                    <p className="text-indigo-600 font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-500 text-sm mb-2">{edu.period}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-700">
                        <strong>GPA:</strong> {edu.gpa}
                      </span>
                      <span className="text-gray-600">📍 {edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 {profile.name}. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}