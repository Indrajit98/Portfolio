import React from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';


const ProjectDetails = (id) => {
    console.log(id);
    const pp = useLoaderData()
    console.log(pp)
 
    return (
        <div>
            project details
        </div>
    );
};

export default ProjectDetails;