import { Eye } from 'lucide-react';
import {NavBar} from '../Components/nav-bar'

const AboutPage = () => {

    return (
        <div className='bg-black h-screen'>
            <NavBar/>
            
            <div className="ml-12 p-4 text-6xl text-white bg-black">
                About My-Self
            </div>
            <div className="ml-12 p-4 text-2xl text-white bg-black">
                I am a web developer who develope my skills every day to upskill my self.<br/> I did develope many applications on my own 
            </div>
            <div className='flex ml-12 p-4 text-2xl text-white bg-black'>
                See my works 
                <div className='relative left-[8px] '>
                <button className='flex border-2 rounded-full ml-2 hover:bg-white hover:text-black'>
                  <div className='ml-2'>Watch Projects</div><Eye className='ml-2 w-6 h-10 mr-2'/>
                </button>
              </div>
            </div>
        </div>
    )

}

export default AboutPage;