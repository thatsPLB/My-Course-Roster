import PropTypes from 'prop-types'

const SingleArea = ({singlearea}) => {
    const {name} = singlearea;
    return (
        <div>
            <h3 className='text-3xl'>{name}</h3>
        </div>
    );
};
SingleArea.propTypes={
    singlearea: PropTypes.object
}

export default SingleArea;