import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>
        Projects
      </h1>
      {PROJECTS.map((project,index)=>(
        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/4'>
        <img src={project.image} width={150} height={150} alt={project.title}/>
        </div>
        <div className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 text-semibold'>{project.title}</h6>
            <p className='mb-4 text-neutral-400'>{project.description}</p>
            {project.technologies.map((tech,index)=>(
                <span key={index} className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-800 text-sm font-medium'>
                    {tech}
                </span>
            ))}
        </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
