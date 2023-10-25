const CardStar = () => {
	return (
		<div className="card card--star">
			<img
				className="card__image"
				src="/public/images/Card-star.jpeg"
				draggable="false"
			/>

			<div className="card__play"></div>
		</div>
	);
};

export default CardStar;
