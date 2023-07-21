import React, { useState } from "react";

import Button from "../Button/Button";

import s from "./PostCreator.module.css";

// const [formData, setFormData] = useState({
//     name: "",
//     content: ""
//   })
// const onFieldChange = (e) => {
//     setFormData(prev => ({
//         ...prev,
//         [e.target.name]: e.target.value
//     }))
//   }

function PostCreator() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const createPost = () => {
    setPosts(prev => [...prev, {
        id: Date.now(),
        name,
        content
    }])
    setName("")
    setContent("")
  };

  return (
    <div className={s.postCreator}>
      <form className={s.form}>
        <label className={s.inputWrapper}>
          <span className={s.labelText}>Post name</span>
          <input
            type="text"
            className={s.input}
            value={name}
            onChange={onNameChange}
            name="name"
          />
        </label>
        <label className={s.inputWrapper}>
          <span className={s.labelText}>Post content</span>
          <input
            type="text"
            className={s.input}
            value={content}
            onChange={onContentChange}
            name="content"
          />
        </label>
        <Button onClick={createPost}>Create post</Button>
      </form>
      <div className={s.posts}>
        {posts.map((post) => (
          <div className={s.post} key={post.id}>
            <div>{post.name}</div>
            <div>{post.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostCreator;
