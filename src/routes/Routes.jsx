import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import Error from '../components/Error/Error';
import Questions from '../components/Questions/Questions';
import Statistics from '../components/Statistics/Statistics';
import Topics from '../components/Topics/Topics';
import Main from '../layout/Main';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
                    element: <Topics></Topics>
                },
                {
                    path: "/topics",
                    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
                    element: <Topics></Topics>
                },
                {
                    path: "/:id",
                    loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                    element: <Questions></Questions>
                },
                {
                    path: "/statistics",
                    element: <Statistics></Statistics>
                },
                {
                    path: "/blog",
                    element: <Blog></Blog>
                }
            ],
            errorElement: <Error></Error>
        }
    ]);
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Routes;