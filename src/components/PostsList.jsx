
import Post from './Post';
import NewPost from '../routes/NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';
import { useLoaderData } from 'react-router-dom';

function PostsList() {
  const posts = useLoaderData()

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // setPost([postData, ...posts])
  }



  return (
    <>


      <ul className={classes.posts}>
        {/* <Post author="Paul" body="Get the Best out of yourself,everytime." /> */}
        {posts.map(e => <Post key={e.body} author={e.author} body={e.body} />)}
      </ul>



    </>
  );
}

export default PostsList;
