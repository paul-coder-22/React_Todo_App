
import Post from './Post';
import NewPost from '../routes/NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';
import { useLoaderData } from 'react-router-dom';

function PostsList() {
  const posts = useLoaderData()

  function addPostHandler(postData) {

  }



  return (
    <>
      <ul className={classes.posts}>
        {posts.map(e => <Post key={e.body} author={e.author} body={e.body} />)}
      </ul>
    </>
  );
}

export default PostsList;
