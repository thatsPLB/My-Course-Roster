/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const SingleBlog = ({ blog }) => {
   const {name, image_url,description,price,credit} = blog;
    return (
        <div>
            <img src={image_url} alt="" />
           <h2 className='text-4xl'>{name}</h2> 
           <p>{description}</p>
           <div className='flex'>
            <p>Price: {price}</p>
            <p>Credit: {credit}hrs</p>
           </div>
           <button className='bg-blue-300'>Select</button>
        </div>
    );
};
SingleBlog.PropTypes ={
    blog: PropTypes.object.isRequired
}

export default SingleBlog;