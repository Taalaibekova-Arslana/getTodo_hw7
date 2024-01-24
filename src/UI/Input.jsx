import React from "react";

const Input = ({ placeholder, value, onChange, className }) => {
	return (
		<div>
			<input
				className={className}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				type="text"
			/>
		</div>
	);
};

export default Input;
