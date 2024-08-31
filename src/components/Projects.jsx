import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'


const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
        initial={{opacity:0, y:-100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>
            
            Projects
        </motion.h1>
      {PROJECTS.map((project,index)=>(
        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
        <motion.div 
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1}}
        className='mb-4 w-full lg:w-1/4 lg:mr-10' >
        <img src={project.image} width={400} height={400} alt={project.title}/>
        </motion.div>
          <motion.div 
          initial={{opacity:0, x:100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:1}}
          className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 font-semibold'>{project.title}</h6>
            <p className='mb-4 text-neutral-400'>{project.description}</p>
            <div className='flex flex-wrap'>
              {project.technologies.map((tech, index) => (
                <div key={index} className='mr-2 mb-2 rounded px-2 py-1 bg-neutral-900 text-purple-800 text-sm font-medium'>
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      ))}
    </div>
  )
}

export default Projects
