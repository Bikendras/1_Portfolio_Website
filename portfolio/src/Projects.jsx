import React from 'react'
import { FaGithubSquare, FaWordpressSimple } from 'react-icons/fa';
export default function Projects() {
  return (
    <div className='project' id='project'>
      <div className='project_1'>
        <div className='project_web'>
          <h2>Web Creations</h2>
        </div>
        <div className='all_project'>
          <article className='project_artic'>
            <img src="pexels-photo-326503.webp" alt="" />
            <div className='project_data'>
              <h2>First Project</h2>
              <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic Omnis Doloribus Dolores Enim Deleniti.</p>
              <div className='Project_icons'><FaGithubSquare /><FaWordpressSimple /></div>
            </div>
          </article>
          <article className='project_artic'>
            <img src="pexels-photo-2148222.webp" alt="" />
            <div className='project_data'>
              <h2>Second Project</h2>
              <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic Omnis Doloribus Dolores Enim Deleniti.</p>
              <div className='Project_icons'><FaGithubSquare /><FaWordpressSimple /></div>
            </div>
          </article>
          <article className='project_artic'>
            <img src="pexels-photo-12883026.webp" alt="" />
            <div className='project_data'>
              <h2>Third Project</h2>
              <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic Omnis Doloribus Dolores Enim Deleniti.</p>
              <div className='Project_icons'><FaGithubSquare /><FaWordpressSimple /></div>
            </div>
          </article>
        </div>
      </div>
    </div>

  )
}
