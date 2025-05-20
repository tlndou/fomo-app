// src/Posts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapPinIcon, TagIcon } from '@heroicons/react/24/solid';


const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the posts!', error);
      });
  }, []);

  return (
    <div>
      <div className="text-center bg-pink-500 text-white p-6 rounded-xl">
            <h1 className="text-3xl font-bold">FOMO feed</h1>
        </div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <div className="name-container">
              <strong>{post.name}</strong> (aka {post.nickname}) <br />
            </div>
            <div className="location-container flex flex-row">
              <div className="location-icon"><MapPinIcon className="h-5 w-5 text-gray-600" /></div>
              <p className="location" placeholder="location">{post.location}</p>
            </div>
            <p>{post.content}</p>
            {post.media_url && (
              <img src={post.media_url} alt="post media" width="200" />
            )}
            <p><em>Tag: {post.tag}</em></p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
