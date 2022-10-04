import website from '../assets/website.png'
import medium from '../assets/medium.png'
import linkedin from '../assets/linkedin.jpg'
import polygence from '../assets/polygence.png'
import tor from '../assets/tor.png'
import github from '../assets/github.png'
import telegram from '../assets/telegram.png'
import shockpoint from '../assets/shockpoint.png'
import { ItemType } from '../ts';

const items: ItemType[] = [{
    "title": "LinkedIn",
    "subtitle": "Professional Background",
    "image": linkedin,
    "link": "https://www.linkedin.com/in/charliealgert/" // linkedin
},
{
    "title": "GitHub",
    "subtitle": "All my open-source projects",
    "image": github,
    "link": "https://github.com/algertc" //Github Profile link
},
{
    "title": "Research",
    "subtitle": "Polyvence Scholar Profile",
    "image": polygence,
    "link": "https://www.polygence.org/scholars/charlie-algert"// polygence profile link 
},
{
    "title": "Tor Atlas",
    "subtitle": "View My Relay Stats",
    "image": tor,
    "link": "https://metrics.torproject.org/rs.html#details/5D410EB085D4A8FBA22305FBA8DC19B71D9387FC"//atlas  link 
},
{
    "title": "ShockPoint",
    "subtitle": "Check Out The Website",
    "image": shockpoint,
    "link": "https://shockpointmedia.com" 
},
{
    "title": "Medium Author",
    "subtitle": "View My Articles",
    "image": medium,
    "link": "https://medium.com/@charliealgert" //medium profile link 
}]

export default items
