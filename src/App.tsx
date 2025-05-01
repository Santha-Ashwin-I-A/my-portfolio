
import './App.css'
import { TextGenerateEffect } from './Components/ui/text-generate'

import { NavBar } from './Components/nav-bar';
import { ArrowRight } from 'lucide-react';

function App() {

  const words = " Hi, I'm Santha Ashwin"
  const mySelf = "A passionate Full-Stack Developer, Who loves to learn new tech and develop myself everyday"
  return (
    <>  
      <div className=" h-screen  bg-black text-white">
      <div className= " w-full">
      <NavBar/>
      <div className='p-4'>
          <div className="p-4 mx-8 border-2 h-[500px]">
            <TextGenerateEffect className='text-6xl' words={words}/>
            <TextGenerateEffect className='text-4xl w-[900px]' words={mySelf}/>
            <div className='top-2 flex text-3xl mt-2 '>
              About Myself
              <div className='relative left-[8px] '>
                <button className='flex border-2 rounded-full ml-2 hover:bg-white hover:text-black'>
                  <div className='ml-2'>Go to About</div><ArrowRight className='w-6 h-10 mr-2'/>
                </button>
              </div>
            </div>
          </div>
       </div>
      </div>
    </div>
      
    </>

  )
}

export default App
