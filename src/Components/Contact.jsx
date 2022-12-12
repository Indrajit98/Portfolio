import React from 'react';

const Contact = () => {
    return (
        <div className='container mx-auto justify-center '>
            <h1 className='text-center text-4xl'>Contact</h1>
            <div >
                <form className='flex flex-col items-center mt-8 mx-2'>
                    <input type="text" placeholder="Your Name" className="input input-bordered my-2 lg:w-1/2 w-full" />
                    <input type="text" placeholder="Your Email" className="input input-bordered my-2 lg:w-1/2 w-full" />
                    <input type="text" placeholder="Message" className="input input-bordered my-2 lg:w-1/2 w-full" />
                    <input type="submit" className="input input-bordered my-2 lg:w-1/2 w-full" />

                </form>

            </div>

        </div>
    );
};

export default Contact;