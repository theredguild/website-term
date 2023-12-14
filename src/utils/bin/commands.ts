// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Hi wanderer! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
clear: clear terminal.\n
Type 'about' to show more info.
`;
};

// About
// see about.ts


// Support us
export const support = async (args: string[]): Promise<string> => {
  return `As you may know, we are experimenting security as a public good.\nHere you will find ways to support us:
- mainnet: ${config.support_urls.mainnet}
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const x = async (args: string[]): Promise<string> => {
  window.open(`https://x.com/${config.social.x}/`);

  return 'Opening X...';
};

// Search
export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};


// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const id = async (args: string[]): Promise<string> => {
  return `${config.id}`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  ▄▄▄▄▄ ▄ .▄▄▄▄ .    ▄▄▄  ▄▄▄ .·▄▄▄▄       ▄▄ • ▄• ▄▌▪  ▄▄▌  ·▄▄▄▄  
  •██  ██▪▐█▀▄.▀·    ▀▄ █·▀▄.▀·██▪ ██     ▐█ ▀ ▪█▪██▌██ ██•  ██▪ ██ 
   ▐█.▪██▀▐█▐▀▀▪▄    ▐▀▀▄ ▐▀▀▪▄▐█· ▐█▌    ▄█ ▀█▄█▌▐█▌▐█·██▪  ▐█· ▐█▌
   ▐█▌·██▌▐▀▐█▄▄▌    ▐█•█▌▐█▄▄▌██. ██     ▐█▄▪▐█▐█▄█▌▐█▌▐█▌▐▌██. ██ 
   ▀▀▀ ▀▀▀ · ▀▀▀     .▀  ▀ ▀▀▀ ▀▀▀▀▀•     ·▀▀▀▀  ▀▀▀ ▀▀▀.▀▀▀ ▀▀▀▀▀• 
        hello[at]theredguild[dot]org | <u><a href=${config.social.blog} target="_blank">blog</a></u> | @theredguild
Type 'help' to see the list of available commands.
`;
};
