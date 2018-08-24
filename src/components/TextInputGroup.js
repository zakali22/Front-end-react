import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = (props) => {
	const { htmlFor, type, className, id, placeholder, name, onChange, value, errors } = props;
    return (
        <div className="form-group">
			<label htmlFor={htmlFor}>Name</label>
			<input 
				type={type} 
				className={classnames('form-control', {'is-invalid': errors})} 
				id={id} 
				placeholder={placeholder} 
				value={value} 
				onChange={onChange} 
				name={name}/>
			{errors && <div className="invalid-feedback">
				{errors}
			</div> }
		</div>
    );
};

TextInputGroup.propTypes = {
	htmlFor: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
}

export default TextInputGroup;
