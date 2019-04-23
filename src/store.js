import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: [
      {
        title: 'Développeur Système d’Information',
        date: 'Depuis Mai 2016',
        place:
          'Jaguar Network <span class="secondary">- Marseille, FRANCE</span>',
        description: [
          `Jaguar Network est hébergeur et opérateur en télécom spécialisé Cloud, Datacenter, Réseaux et VOIP.<br/>
          J’ai intégré l’équipe Système d’Information au sein de laquelle j’ai travaillé sur les interfaces utilisateurs et outils destinés aux clients et aux équipes internes à l’entreprise, en <span class="standout">PHP (Kohana, Twig)</span>, <span class="standout">Perl</span>, <span class="standout">SQL <small>(PostgreSQL)</small></span> et <span class="standout">JavaScript <small>(jQuery, Bootstrap, Vue.js)</small></span>.<br/>
          Dans le cadre de la pratique des méthodes Agiles il m’a été permis d’assumer le rôle de <span class="standout">Scrum Master</span>.`
        ]
      },
      {
        title: 'Ingénieur Logiciel ',
        date: 'Février 2013 - Avril 2016',
        place: 'Wyplay <span class="secondary">- Allauch, FRANCE</span>',
        description: [
          `Wyplay conçoit des solutions logicielles pour les offres TV des opérateurs grand public.<br/>
        J’ai rejoint l’équipe de développement en charge de la réalisation des interfaces utilisateurs au sein de plusieurs projets à destination de fournisseurs internet/TV français et internationaux, en <span class="standout">Python</span> et <span class="standout">JavaScript <small>(Lodash, ES5/JSX)</small></span>.`
        ]
      },
      {
        title: 'Ingénieur Logiciel & Stagiaire Ingénieur Logiciel',
        date: 'Juillet 2011 - Février 2013',
        place: 'FOGALE Nanotech <span class="secondary">- Nîmes, FRANCE</span>',
        description: [
          `Développement de l’interface utilisateur pour un système d’analyse de vibrations, en <span class="standout">C++</span>.<br/>
          Développement d’applications de démonstration pour un prototype d’écran sans contact, en <span class="standout">C++ <small>(Qt)</small></span>.<br/>
          Développement de l’IHM d’une solution pour le monitoring de biomasse, en <span class="standout">C++ <small>(Qt)</small></span>. `
        ]
      }
    ],
    degrees: [
      {
        title: 'Master of Science à SUPINFO',
        place: 'Montpellier, FRANCE',
        date: '2009 - 2012'
      },
      {
        title: 'Diplôme universitaire de technologie (DUT) Informatique',
        place: 'Montpellier, FRANCE',
        date: '2007 - 2019'
      },
      {
        title: "Baccalauréat S option Sciences de l'Ingénieur",
        place: 'FRANCE',
        date: '2005 - 2007'
      }
    ],
    skills: [
      {
        category: 'Langages',
        content: [
          { title: 'Python', lvl: 4.5 },
          {
            title: 'JavaScript',
            frameworks: ['jQuery', 'Bootstrap', 'Vue.js', 'Lodash', 'ES5/JSX'],
            lvl: 4.5
          },
          { title: 'PHP', frameworks: ['Kohana', 'Twig'], lvl: 4.0 },
          { title: 'CSS', frameworks: ['+préprocesseurs'], lvl: 3.5 },
          { title: 'SQL', frameworks: ['PostgreSQL'], lvl: 3.5 },
          { title: 'Java', frameworks: ['Android'], lvl: 3.0 },
          { title: 'Perl', lvl: 3.0 }
        ]
      },
      {
        category: 'Gestion de Versions',
        content: [
          { title: 'Git', lvl: 4.5 },
          { title: 'Mercurial', lvl: 4.0 },
          { title: 'SVN', lvl: 3.0 }
        ]
      },
      {
        category: 'OS',
        content: [{ title: 'Linux', lvl: 4.5 }, { title: 'Windows', lvl: 3.0 }]
      },
      {
        category: 'Méthodologies',
        content: [{ title: 'Méthodes Agiles', lvl: 4.0 }]
      }
    ],
    hobbies: [
      'Escalade (Bloc)',
      'Basketball',
      'Handball',
      'Séries TV',
      'Jeux Vidéo'
    ]
  },
  getters: {
    jobs: state => {
      return state.jobs
    },
    degrees: state => {
      return state.degrees
    },
    skills: state => {
      return state.skills
    },
    hobbies: state => {
      return state.hobbies
    }
  },
  mutations: {},
  actions: {}
})
