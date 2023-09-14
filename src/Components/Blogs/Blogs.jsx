import { useEffect, useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddToArea,handleCredit}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() =>{
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div>
            {
              blogs.map(blog =><SingleBlog key={blog.id}
                 blog={blog}
                 handleAddToArea={handleAddToArea}
                 handleCredit={handleCredit}
                 ></SingleBlog>)  
            }
        </div>
    );
};
Blogs.prototype = {
    handleAddToArea : PropTypes.func,
    handleCredit: PropTypes.func
}
export default Blogs;