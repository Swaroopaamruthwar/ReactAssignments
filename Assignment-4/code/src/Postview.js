import './Postview.css';
import React from 'react';
import { FiCamera } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { useState } from 'react';
import { useEffect } from 'react';
import { BsSuitHeart } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
const Postview = () => {
  const [post, setPost] = useState([])
  const getUsers = async () => {
    const response = await fetch(`http://localhost:3004/user`)
    setPost(await response.json());
  }
  useEffect(() => {
    getUsers();
  }, [])
  return (
    <div className="site-container">
      <div className='header'>
        <div className='left-nav'>
          <div className="logo loop">
            <span ><FaInstagramSquare /></span>
          </div>
          <div className="logo logo-name">
            Instaclone
          </div>

        </div>
        <div className="right-nav">
          <span><FiCamera /></span>
        </div>
      </div>
      <div className="body">
        {
          post.map((ele, idx) => {
            return (
              <div className="body-content">
                <div className="card-datails">
                  <div className="info top">
                    <div className=" card-top name-location">
                      <span key={idx}><strong>{ele.name}</strong></span>
                      <span key={idx} className="location">{ele.location}</span>
                    </div>
                    <div className="card-top three-dots" >
                      <BsThreeDots />
                    </div>
                  </div>
                  <div className="info middle">
                    <p key={idx}><img src={ele.PostImage} ></img></p>
                  </div>
                  <div className="info middle-bottom">
                    <div className="middle-bottom-left">
                      <div className=" icon heart-icon">
                        <div className="likes">
                          <span className="btn"><BsSuitHeart /></span>
                        </div>
                        <div className="likes-number">
                          <p key={idx}>{ele.likes} likes</p>
                        </div>
                      </div>
                      <div className="icon">
                        <span className="btn"><FiSend /></span>
                      </div>
                    </div>
                    <div className="middle-bottom-right">
                      <p key={idx}>{ele.date}</p>
                    </div>
                  </div>


                  <div className="info bottom">
                    <p key={idx}>{ele.description}</p>
                  </div>


                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Postview;
