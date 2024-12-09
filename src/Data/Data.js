import {CiDumbbell} from "react-icons/ci"
import {BsHeartPulse} from "react-icons/bs"
import {BiTimeFive} from "react-icons/bi"
import {AiOutlineArrowRight} from "react-icons/ai"

import img6 from "../assets/img-7.jpg"
import img7 from "../assets/img-15.jpg"
import img8 from "../assets/img-9.jpg"

export const navLinks = [
    {label:"Home",href:"#home"},
    {label:"About",href:"#about"},
    {label:"Services",href:"#services"},
    {label:"Schedule",href:"#schedule"},
    {label:"Gallery",href:"#gallery"},
    {label:"Contact",href:"#about"}
]

export const services = [
    {
        icon:<CiDumbbell />,
        label:"QUALITY EQUIPMENT",
        desc:"The sea freight service has grown consider ably in recent years. We spend timetting to kn.",
        btnDec:"DISCOVER MORE ABOUT US",
        btnIcon:<AiOutlineArrowRight />
    },
    {
        icon:<BsHeartPulse />,
        label:"HEALTH CARING",
        desc:"The sea freight service has grown consider ably in recent years. We spend timetting to kn.",
        btnDec:"DISCOVER MORE ABOUT US",
        btnIcon:<AiOutlineArrowRight />
    },
    {
        icon:<BiTimeFive />,
        label:"GYM STRATEGIES",
        desc:"The sea freight service has grown consider ably in recent years. We spend timetting to kn.",
        btnDec:"DISCOVER MORE ABOUT US",
        btnIcon:<AiOutlineArrowRight />
    }
]




export const teamMembers =[
    {
        img:img6,
        role:"Creative director",
        name:"Jhon Sunsaev"
    },
    {
        img:img7,
        role:"Fitness Trainer",
        name:"Thamlus"
    },
    {
        img:img8,
        role:"Personal Trainer",
        name:"Jason"
    },
]



