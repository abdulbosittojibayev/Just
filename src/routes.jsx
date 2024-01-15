import React from 'react'
import { Outlet, useRoutes } from 'react-router-dom'
import Home from './pages/Home/Home'

export const Routes = () => {
    const PublicRoute = [
        {
            element:(
            <div>
            <Outlet/>
            </div>),
            children: [
                { path: '', element: <Home /> },
            ],
        },
    ];
    return useRoutes(PublicRoute)
}
