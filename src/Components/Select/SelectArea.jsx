import PropTypes from 'prop-types'
import SingleArea from '../SingleArea/SingleArea';

const SelectArea = ({area}) => {
    return (
        <div>
           <h2>Course Name: {area.length}</h2>
           {
            area.map(singlearea => <SingleArea 
               key={singlearea.id}
                singlearea={singlearea}></SingleArea>)
           } 
        </div>
    );
};
SelectArea.proptype ={
    area: PropTypes.array
}

export default SelectArea;