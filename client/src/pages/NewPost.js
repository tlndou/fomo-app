import '../styles/newpost.scss';

export default function NewPost() {
  return (
    <div className="new-post">
        <div className="top-buttons">
            <button>cancel</button>
            <button>post</button>
        </div>
        <div className="text-center bg-pink-500 text-white p-6 rounded-xl">
            <h1 className="text-3xl font-bold">Make a new post!</h1>
        </div>
        <div className="user-info">
            <div className="pfp">pfp</div>
            <input className="user-name" placeholder="name" />
            <div className="aka">aka</div>
            <input className="nickname" placeholder="nickname" />
            <div className="location-icon">icon</div>
            <input className="location" placeholder="location" />
        </div>
        <input className="location" placeholder="Whats going on rn??" />
        <button>add media</button>
    </div>
  );
}
