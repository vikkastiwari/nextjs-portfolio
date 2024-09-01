import { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';

function useScrollToTop() {

	return (
		<>
			<FiChevronUp
				className="scrollToTop"
				style={{
					height: 40,
					width: 40,
					padding: 7,
					borderRadius: 50,
					right: 50,
					bottom: 50,
					display: 'flex',
				}}
			/>
		</>
	);
}

export default useScrollToTop;
