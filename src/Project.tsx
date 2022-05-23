import globe from './images/globe.svg';
import github from './images/github.svg';
import discord from './images/discord.svg';
import twitter from './images/twitter.svg';
import telegram from './images/telegram.svg';
import './Project.css'

export interface ProjectProps {
  name: string;
  description: string;
  links: Links[];
}

interface Links {
  github?: string;
  website?: string;
  discord?: string;
  twitter?: string;
  telegram?: string;
}

function renderLink(url: string, source: string, icon: string): any {
  return (
    <div className="link" key={url}>
      <a href={url}>
        <img className="icon" src={icon} alt={source} />
        <div className="link-title">{source}</div>
      </a>
    </div>
  );
}

function Project(props: ProjectProps) {
  let links = props.links.map((link) => {
    if (link.github) {
      return renderLink(link.github, 'github', github);
    } else if (link.website) {
      return renderLink(link.website, 'website', globe);
    } else if (link.discord) {
      return renderLink(link.discord, 'discord', discord);
    } else if (link.twitter) {
      return renderLink(link.twitter, 'twitter', twitter);
    } else if (link.telegram) {
      return renderLink(link.telegram, 'telegram', telegram);
    } else {
      return null;
    }
  });

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <div className="card-footer">{links}</div>
      </div>
    </div>
  );
}

export default Project;