import '../styles/newpost.scss';
import '../styles/stylesheet.scss';
import { GifIcon, MapPinIcon, NumberedListIcon, PhotoIcon, TagIcon } from '@heroicons/react/24/solid';


export default function NewPost() {
  return (
    <div className="new-post flex flex-col">
        <div className="top-buttons flex justify-between">
            <button>cancel</button>
            <button>post</button>
        </div>
        <div className="text-center bg-pink-500 text-white p-6 rounded-xl">
            <h1 className="text-3xl font-bold">Make a new post!</h1>
        </div>
        <div className="user-info flex flex-row">
            <img src="profile.jpg" alt="pfp" className="profile-pic" />
            <div className='name-location flex flex-col'>
                <div className="name-container flex flex-row">
                    <input className="user-name" placeholder="name" />
                    <div className="aka">aka</div>
                    <input className="nickname" placeholder="nickname" />
                </div>
                <div className="location-container flex flex-row">
                    <div className="location-icon"><MapPinIcon className="h-5 w-5 text-gray-600" /></div>
                    <input className="location" placeholder="location" />
                </div>
            </div>
        </div>
        <textarea className="post-text flex-grow" placeholder="Whats going on rn??" />
        <div className="extra-buttons flex flex-row justify-between">
            <div className="media-icon"><PhotoIcon className="h-5 w-5 text-gray-600" /></div>
            <div className="topic-icon"><TagIcon className="h-5 w-5 text-gray-600" /></div>
            <div className="gif-icon"><GifIcon className="h-5 w-5 text-gray-600" /></div>
            <div className="poll-icon"><NumberedListIcon className="h-5 w-5 text-gray-600" /></div>
            <div className="character-count">250</div>
        </div>
    </div>
  );
}
