import { useEffect, useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({ isPosting, hideModal }) {



  const [posts, setPost] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:8080/posts')
      const resData = await response.json()
      setPost(resData.posts)
    }
    fetchPosts()
  }, [])


  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setPost([postData, ...posts])
    console.log(posts);
  }


  return (
    <>
      {
        isPosting ?
          <Modal onClose={hideModal}>
            <NewPost
              onAddPost={addPostHandler}
              onCancel={hideModal}
            />
          </Modal>
          : null
      }
      <ul className={classes.posts}>
        <Post author="Paul" body="Get the Best out of yourself,everytime." />
        {
          posts.map(e => <Post key={e} author={e.author} body={e.body} />)
        }
      </ul>
    </>
  );
}

export default PostsList;
