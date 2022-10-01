import website from '../assets/website.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.jpg'
import polygence from '../assets/polygence.png'
import tor from '../assets/tor_navy.png'
import github from '../assets/github.png'
import telegram from '../assets/telegram.png'
import shockpoint from '../assets/shockpoint (4).png'
import { ItemType } from '../ts';

const items: ItemType[] = [{
    "title": "Website",
    "subtitle": "Look at my work!",
    "image": website,
    "link": "https://charliealgert.com" //your personal website or portfolio  link
},
{
    "title": "GitHub",
    "subtitle": "@algertc| 🏡 to all my open-source projects",
    "image": github,
    "link": "https://github.com/algertc" //Github Profile link
},
{
    "title": "Instagram",
    "subtitle": "@charlie.algert",
    "image": instagram,
    "link": "https://instagram.com/algertc" //instagram profile link 
},
{
    "title": "Research",
    "subtitle": "Polyvence Scholar Profile",
    "image": polygence,
    "link": "https://www.polygence.org/scholars/charlie-algert"// polygence profile link 
},
{
    "title": "LinkedIn",
    "subtitle": "Professional Background",
    "image": linkedin,
    "link": "https://www.linkedin.com/in/charliealgert/" // linkedin
},
{
    "title": "Tor Atlas",
    "subtitle": "View My Relay Stats",
    "image": tor,
    "link": "https://metrics.torproject.org/rs.html#details/5D410EB085D4A8FBA22305FBA8DC19B71D9387FC"//atlas  link 
},

{
    "title": "ShockPoint",
    "subtitle": "Check Out The Website ",
    "image": shockpoint,
    "link": "https://shockpointmedia.com" 
},
{
    "title": "Telegram",
    "subtitle": "",
    "image": telegram,
    "link": "https://telegram.me/" //Change To Car Progress Blog 
}]

export default items
