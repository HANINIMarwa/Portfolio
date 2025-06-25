import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, User, GraduationCap, Code, FolderOpen, Languages, Calendar, Clock } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';
function App() {
  const skills = [
  { name: 'Python', level: 90 },
  { name: 'Java', level: 80 },
  { name: 'SQL', level: 70 },
  { name: 'HTML/CSS', level: 75 },
  { name: 'Analyse & Visualisation', level: 85 },
  { name: 'C', level: 70 },
  { name: 'C++', level: 75 }
];


  const projects = [
    {
      title: 'Poubelle automatique',
      period: 'Deuxième année (2023-2024)',
      description: 'J\'ai intégré des matériels et logiciels (Arduino), ce projet m\'a permis de mettre en pratique mes compétences en capteurs (détection de mouvement), ainsi qu\'en programmation embarquée pour automatiser l\'ouverture du couvercle sans contact.',
      technologies: ['Arduino', 'Capteurs', 'Programmation embarquée'],
      status: 'completed'
    },
    {
      title: 'Système de gestion hôtelière',
      period: 'Semestre 5 (2024-2025)',
      description: 'J\'ai conçu et développé un système de gestion hôtelière en utilisant Java, intégrant une interface graphique, un tableau de bord administrateur, et un système d\'authentification sécurisé, afin d\'optimiser la gestion des réservations, des chambres, des clients et du personnel.',
      technologies: ['Java', 'Interface graphique', 'Authentification', 'Base de données'],
      status: 'completed'
    },
    {
      title: 'Application web de visualisation de données',
      period: 'Semestre 5 (2024-2025)',
      description: 'J\'ai utilisé Flask, Pandas et Plotly pour développer une application web qui offre une interface intuitive pour explorer les données à partir des fichiers CSV.',
      technologies: ['Flask', 'Pandas', 'Plotly', 'Python', 'Visualisation'],
      status: 'completed'
    },
    {
  "title": "Encryption and Decryption",
  "period": "Semestre 5 (2024-2025)",
  "description": "Concevoir une application en Python pour le chiffrement et le déchiffrement de fichiers, en utilisant des algorithmes de cryptographie afin d’assurer la sécurité des données.",
  "technologies": ["Python", "Kali Linux", "Cryptographie", "Interface graphique (GUI)"],
  "status": "completed"
  },

    {
  "title": "Pipeline de traitement de données diabétiques",
  "period": "Semestre 6 (2024-2025)",
  "description": "J'ai développé un projet de pipeline de traitement de grandes bases de données portant sur les données des diabétiques. Le pipeline comprend quatre étapes : ingestion des données, nettoyage, agrégation et visualisation. Le tout a été intégré dans une application web en utilisant FastAPI pour le développement du backend et du frontend.",
  "technologies": ["FastAPI", "Big Data", "Backend/Frontend"],
  "status": "completed"
},
{
  "title": "Classification des aliments pour diabétiques (IA)",
  "period": "Semestre 6 (2024-2025)",
  "description": "J'ai conçu un projet de classification des aliments destinés aux personnes diabétiques. Il repose sur un modèle d'apprentissage automatique capable d'identifier, à partir d'images, les aliments autorisés ou non. Ce modèle a été intégré dans une application web afin de faciliter les choix alimentaires des utilisateurs.",
  "technologies": ["Machine Learning", "Classification d'images", "IA","CNN" ,"Application web"],
  "status": "completed"
},
{
  "title": "Certification Neo4j",
  "period": "2025",
  "description": "J'ai obtenu une certification officielle sur Neo4j, la base de données orientée graphe. Cette formation m'a permis de maîtriser les concepts fondamentaux des graphes, la modélisation de données, ainsi que l'utilisation du langage Cypher pour interroger et manipuler les données dans Neo4j.",
  "technologies": ["Neo4j", "Cypher", "Bases de données orientées graphe"],
  "status": "completed"
}


  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-0 min-h-screen">
          {/* Sidebar */}
          <div className="lg:col-span-1 bg-gradient-to-b from-slate-800 via-slate-900 to-blue-900 text-white p-8 lg:p-10">
            <div className="sticky top-8">
              {/* Profile Image */}
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <img 
                    src="/images/marwa.jpg" 
                    alt="Photo de Marwa Hanini" 
                    className="w-40 h-40 rounded-full object-cover border-4 border-blue-400 shadow-2xl mx-auto"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-blue-300 flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center hover:text-blue-300 transition-colors">
                    <Mail className="w-4 h-4 mr-3 text-blue-400" />
                    <span className="break-all">marwa.hanini@eidia.ueuromed.org</span>
                  </div>
                  <div className="flex items-center hover:text-blue-300 transition-colors">
                    <Phone className="w-4 h-4 mr-3 text-blue-400" />
                    <span>+212 621 493 127</span>
                  </div>
                  <div className="flex items-center hover:text-blue-300 transition-colors">
                    <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                    <span>Fès, Maroc</span>
                  </div>
                  <div className="flex items-center hover:text-blue-300 transition-colors">
                    <Linkedin className="w-4 h-4 mr-3 text-blue-400" />
                    <a href="https://www.linkedin.com/in/marwa-hanini" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center hover:text-blue-300 transition-colors">
                    <Github className="w-4 h-4 mr-3 text-blue-400" />
                    <a href="https://github.com/HANINIMarwa" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Languages Section */}
              <div>
                <h2 className="text-xl font-bold mb-4 text-blue-300 flex items-center">
                  <Languages className="w-5 h-5 mr-2" />
                  Langues
                </h2>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Français</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-blue-400"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Anglais</span>
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-blue-400"></div>
                      ))}
                      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Espagnol</span>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-blue-400"></div>
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-slate-600"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 p-8 lg:p-12">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-2">
                Marwa HANINI
              </h1>
              <p className="text-xl text-blue-600 font-medium mb-6">
                Étudiante en Big Data | Data Science & IA
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </div>

            {/* Profile Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <User className="w-6 h-6 mr-3 text-blue-600" />
                Profil
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                <p className="text-slate-700 leading-relaxed">
                  Étudiante en cycle ingénieur spécialisée en analyse des mégadonnées 'Big Data', 
                  passionnée par la visualisation de données, l'intelligence artificielle. 
                  Solides compétences en Python, traitement de données et statistiques.
                </p>
              </div>
            </section>

            {/* Education Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
                Formation
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                  <h3 className="font-semibold text-slate-800 mb-1">Université Euromed de Fès</h3>
                  <p className="text-blue-600 font-medium mb-2">Analyse des Mégadonnées</p>
                  <p className="text-slate-600 text-sm">2024-2025</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                  <h3 className="font-semibold text-slate-800 mb-1">Cycle préparatoire</h3>
                  <p className="text-slate-600 text-sm">2022-2024</p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-12">
               <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                 <Code className="w-6 h-6 mr-3 text-blue-600" />
                Compétences
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                <ul className="grid grid-cols-2 gap-3 list-disc pl-5">
                  {skills.map((skill, index) => (
                    <li key={index} className="text-slate-700 font-medium">{skill.name}</li>
              ))}
              </ul>
              </div>
             </section>


            {/* Projects Section */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <FolderOpen className="w-6 h-6 mr-3 text-blue-600" />
                Projets
              </h2>
              <div className="grid gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-slate-800 text-lg">{project.title}</h3>
                      <div className="flex items-center space-x-2">
                        {project.status === 'in-progress' ? (
                          <div className="flex items-center text-orange-600 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>En cours</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-green-600 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>Terminé</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-blue-600 font-medium text-sm mb-3">{project.period}</p>
                    
                    <p className="text-slate-700 leading-relaxed mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;