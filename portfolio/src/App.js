import './App.css';
import Project from './components/Project/Project';

import CreateGroup from './images/toppings/create-group.png';
import Menu from './images/toppings/menu.png';
import YourParty from './images/toppings/your-party.png';

import Vault from './images/render/vault.png';
import Feed from './images/render/feed.png';
import Profile from './images/render/profile.png';

import Listings from './images/listings.png';

import Article from './images/sciquel/article.png';

import PolicyCover from './images/policy-cover.png';
import CybercomChina from './images/policy-covers/cybercom-china.png';

import MagnaPlay from './images/magna-play.png';

const projects = 
[
  {
    title: "Toppings",
    description: "UI/UX designer of peer-to-peer food delivery system.",
    images: [Menu, YourParty, CreateGroup]
  },
  /*
  {
    title: "Bookswap",
    images: [Listings]
  },
  */
  /*
  {
    title: "Render",
    description: "Frontend developer (React Native) of Snapchat stories for gamers.",
    images: [Feed, Profile, Vault]
  },
  */
  {
    title: "MagnaPlay",
    description: "UI/UX designer of Spotify for Indie games.",
    images: [MagnaPlay]
  },
  {
    title: "Harvard Undergraduate Foreign Policy Initiative",
    description: "Director of Digital Media. Designed policy report covers and promotional flyers.",
    images: [PolicyCover, CybercomChina] 
  },
  {
    title: "SciQuel",
    description: "Client of Harvard Design Collective. Part of a 5-person team. UI/UX designer of the article page.",
    images: [Article]
  }
]

function App() {
  return (
    <div className="app">
    <div className="app-container">
      <div className="header">
        <div className="header-logo">SHAY</div>
        {/*
        <div className="header-categories-container">
          <div className="header-category">Portfolio</div>
          <div className="header-category">About</div>
          <div className="header-category">Resume</div>
        </div>
        */}
      </div>
      <div className="header-background"></div>
      <div className="intro-container">
        <div className="intro-text">Hello! I'm Shay, a CS student at Harvard interested in design and frontend dev.</div>
      </div>
      {projects.map(project =>
        <Project title={project.title} description={project.description} images={project.images} />)}
    </div>
    </div>
  );
}

export default App;
