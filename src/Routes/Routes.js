import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About";
import Blog from "../Components/Blog";
import Home from "../Components/Home";
import ProjectDetails from "../Components/ProjectDetails";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path: "/", element: <Main></Main>,
        children:[
            {
                path: "/", element: <Home></Home>,
                loader:() => fetch('projectData.json')
            },  
            {
                path:"/about", element: <About></About>
            } ,
            {
                path:"/blog", element: <Blog></Blog>
            },
            {
                path:"/projectDetails/:id", element: <ProjectDetails></ProjectDetails>,
                loader:({params}) => fetch(`projectData.json/${params.id}`)
            } 
        ]
        
    },
])
