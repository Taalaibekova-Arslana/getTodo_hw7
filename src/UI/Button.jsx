import React from "react";

const Button = ({ onClick, className, text }) => {
	return (
		<div>
			<button onClick={onClick} className={className}>
				{text}
			</button>
		</div>
	);
};

export default Button;
