/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import {FaDollarSign, FaBookOpen } from 'react-icons/fa';

const SingleBlog = ({ blog,handleAddToArea,handleCredit }) => {
   const {name, image_url,description,price,credit} = blog;
    return (
        <div>
            <img src={image_url} alt="" />
           <h2 className='text-4xl'>{name}</h2> 
           <p>{description}</p>
           <div className='flex'>
            <p><FaDollarSign></FaDollarSign>Price: {price}</p>
            <p><FaBookOpen></FaBookOpen>Credit: {credit}hrs</p>
           </div>
           <button onClick={() =>handleAddToArea(blog)}>Select</button>
        </div>
    );
};
SingleBlog.PropTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToArea : PropTypes.func
}

export default SingleBlog;