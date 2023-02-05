import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Posts, { loader as posterLoaders } from './routes/Posts'
import NewPost, { action as newPostAction } from './routes/NewPost'
import './index.css'
import RootLayout from './Routes/RootLayout'

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: posterLoaders,
        children: [
          { path: '/new-post', element: <NewPost />, action: newPostAction }
        ]
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
)
