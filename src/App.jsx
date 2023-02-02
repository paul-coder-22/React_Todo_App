import { useState } from 'react';
import MainHeader from './components/Mainheader';
import PostsList from './components/PostsList';

function App() {

  const [modalVisisble, setModalIsVisisble] = useState(false)

  function showModulehandler() {
    setModalIsVisisble(true)
  }


  function hideModalHandler() {
    setModalIsVisisble(false)
  }

  return (
    <>
      <MainHeader onCreatePost={showModulehandler} />
      <main>
        <PostsList isPosting={modalVisisble}
          hideModal={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
