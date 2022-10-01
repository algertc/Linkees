import website from '../assets/website.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.jpg'
import youtube from '../assets/youtube.jpeg'
import dribbble from '../assets/dribbble.png'
import github from '../assets/github.png'
import telegram from '../assets/telegram.png'
import twitter from '../assets/twitter.png'
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
    "title": "Twitter",
    "subtitle": "@heysagnik | 😉",
    "image": twitter,
    "link": "https://twitter.com/heysagnik"// twitter profile link 
},
{
    "title": "LinkedIn",
    "subtitle": "Professional Endeavors 👨‍💼",
    "image": linkedin,
    "link": "https://www.linkedin.com/in/charliealgert/" // linkedin
},
{
    "title": "Research",
    "subtitle": "Polygence | Scholar Profile",
    "image": youtube,
    "link": "https://www.polygence.org/scholars/charlie-algert"//polygence  link 
},

{
    "title": "Dribbble",
    "subtitle": "@virtuonic | shots of dezigns ",
    "image": dribbble,
    "link": "https://dribbble.com/virtuonic" // Dribbble profile link 
},
{
    "title": "Telegram",
    "subtitle": "@heysagnik | Chat with me instantly ",
    "image": telegram,
    "link": "https://telegram.me/heysagnik" //Telegram Pofile 
}]

export default items
