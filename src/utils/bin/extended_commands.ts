// Mix of extended commands.

import config from '../../../config.json';
import { getWebContent } from '../api';

export const ls = async (path: string[]): Promise<string> => {
    console.log(path);
  switch (path[0]) {
    case "ezines":
    case "ezines/":
      return `1/  2/`;
      break;
    
    case "ezines/1/":
    case "ezines/1":
      return '1-es.txt  ' +
              '1.txt  ' +
              'coast-guard.mp3  ' +
              'pendrive-reuse.txt  ' +
              'pendrive-reuse-es.txt';
      break;
  
    case "ezines/2/":
    case "ezines/2":
      return `directory is empty.`;
      break;

    default:
        if (path.length === 0) {
            return "ezines/";
        } else return "";
      break;
  }
};

export const cat = async (file: string): Promise<string> => {
    if (String(file).startsWith("ezines") && String(file).endsWith(".txt")) {
    file = String(file).slice("ezines".length);
        return await getWebContent(`${config.ezine_url}/${file}`);
    } else {
        return `Print content of plaintext files.\nusage: cat readme.txt`;
    } 
};