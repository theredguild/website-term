// About command.

import config from '../../../config.json';

const about = async (args: string[]): Promise<string> => {
    return `
                                                      
                                                      
                                                      
                                                            
                                                            
                                                            
                  ████████████                         About ${config.name} 🪷
             ████▓▓▓▓▒▒▒▒▒▒▓▓▓▓████                   -----------
          ███▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓███                Our vision is that of an autonomous guild that 
        ██▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓██              carries out applied security research, 
      ██▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓██            education and advocacy as a social good.
    ██▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓██          
   ██▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓██         <u><a href="${config.social.about}" target="_blank">Fragment from our article: The Truth</a></u>
  ██▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓██        
  █▓▒▒▒▒▒▒▒▒▒▓▓▓▓▒▒▒▒▓▓██▓▓▒▒▒▒▓▓▓▓▒▒▒▒▒▒▒▒▒▓██       
 █▓▒▒▒▒▓█▓▓▓▓▓▓▓▓▓▓▒▓██████▓▒▓▓▓▓▓▓▓▓▓▓█▓▒▒▒▒▓█        Socials
██▒▒▒▒▒▒▓████▓▓▓▓▓▓▓▓▓████▓▓▓▓▓▓▓▓▓████▓▒▒▒▒▒▒██      -----------
█▓▒▒▒▒▒▒▒▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▒▒▒▒▒▒▒▓█      <u><a href="https://blog.theredguild.org/${config.social.blog}" target="_blank">Our blog</a></u>
█▓▒▒▒▒▒▒▓▓▓███▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███▓▓▓▒▒▒▒▒▒▓█       <a href="mailto:${config.email}" target="_blank">${config.email}</a>
█▓▒▒▒▒▒▒▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▓█      X <a href="https://x.com/${config.social.x}" target="_blank">@${config.social.x}</a> | <a href="https://github.com/${config.social.github}" target="_blank">GH @${config.social.github}</a> | <a href="https://youtube.com/@${config.social.youtube}" target="_blank">YT @${config.social.youtube}</a>
█▓▒▒▒▒▒▒▒▓██▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓██▓▒▒▒▒▒▒▒▓█      
█▓▒▒▒▒▒▒▒▒████▓▓▓▓▓▓▓██████▓▓▓▓▓▓▓███▓▒▒▒▒▒▒▒▒▓█      
██▒▒▓▓▓▓██▓▓▓████▓▓▓█████████▓▓████▓▓▓███▓▓▓▒▒██       Support us
 █▓▒▒▒▓█████▓▓▓▓████████████████▓▓▓▓█████▓▒▒▒▓█       -----------
  █▓▒▒▒▒▓█████████▓▓▓██████▓▓▓█████████▓▒▒▒▒▓██       <a href="${config.support_urls.mainnet}" target="_blank">mainnet  ${config.support_urls.mainnet}</a>
  ██▓▒▒▒▒▒▓███████████▓▓▓▓███████████▓▒▒▒▒▒▓██        <a href="${config.support_urls.optimism}" target="_blank">op       ${config.support_urls.optimism}</a>
   ██▓▒▒▒▒▓█████▓▓████████████▓▓█████▓▒▒▒▒▓██         
    ██▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓██          
      ██▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓██            
        ██▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓██              
          ███▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓███                
             ████▓▓▓▒▒▒▒▒▒▒▒▓▓▓████                   
                  ████████████                        
`;
};
                  


export default about;
