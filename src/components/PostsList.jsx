
import Post from './Post';
import classes from './PostsList.module.css';
import { useLoaderData } from 'react-router-dom';

function PostsList() {
  const posts = useLoaderData()
  return (
    <>
      <ul className={classes.posts}>
        {posts.map(e => <Post key={e.id} id={e.id} author={e.author} body={e.body} />)}
      </ul>
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
