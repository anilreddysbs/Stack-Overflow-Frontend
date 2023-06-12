import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'
const Tags = () => {
    const tagsList = [{
        id:1,
        tagName:"javascript",
        tagDesc:"For questions regarding programming in ECMAScript."
        },{
            id:2,
            tagName:"python",
            tagDesc:"Python is a multi-paradigm,dynamically typed language."
        },{
            id:3,
            tagName:"c#",
            tagDesc:"c# is a high level language."
    },{
       id:4,
       tagName:"java",
       tagDesc:"java is high level object oriented programming language." 
    },{
        id:5,
        tagName:"html",
        tagDesc:"HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser."
    },{
        id:6,
        tagName:"css",
        tagDesc:"CSS is a representation style sheet language used for describing the look and formating HTMl tags."
    }]
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className="home-container-2">
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
        <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
        <div className="tags-list-container">
            {
                tagsList.map((tag)=>(
                    <TagsList tag={tag} key={tagsList.id} />
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Tags
