import { useState } from 'react';
// import MainHeader from '../components/Mainheader';

import PostsList from '../components/PostsList';
import { Outlet } from 'react-router-dom';


function Posts() {

  // const [modalVisisble, setModalIsVisisble] = useState(false)

  /*   function showModulehandler() {
      setModalIsVisisble(true)
    }
   */

  /*   function hideModalHandler() {
      setModalIsVisisble(false)
    } */

  return (
    <>
      <Outlet />
      {/* <MainHeader onCreatePost={showModulehandler} /> */}
      <main>
        <PostsList
        // isPosting={modalVisisble}
        // hideModal={hideModalHandler}
        />
      </main>
    </>
  );
}

export default Posts;

// loader function executing accesing the in the route.
export async function loader() {
  const response = await fetch('http://localhost:8080/posts')
  const resData = await response.json()
  return resData.posts
}