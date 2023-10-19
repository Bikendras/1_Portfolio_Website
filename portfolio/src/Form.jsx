import "./Form.css";

import React from 'react'

export default function Form() {
  return (
    <div className="skill_1">
      <div className='skill_Tech'>
          <h1>Contact</h1>
        </div>
        <form>
            <label>Your Name</label>
            <input type="text" placeholder="Enter your Name" ></input>
            <label>Email</label>
            <input type="email" placeholder="Enter your Email" ></input>
            <label>Subject</label>
            <input type="text" placeholder="Enter your Subject" ></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here!!" ></textarea>
            <button className="btn">Submit</button>
        </form>

    </div>
  )
}
