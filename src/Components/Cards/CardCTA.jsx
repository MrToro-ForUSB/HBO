const CardCTA = () => {
	return (
		<div className="card card--cta">
			<img
				className="card__image"
				src="/public/images/Card-CTA.jpeg"
				draggable="false"
			/>

			<div className="card__play">
				<img
					className="card__icon"
					src="/public/images/btn--play.svg"
					draggable="false"
				/>
				<img
					className="card__icon"
					src="/public/images/btn--add.svg"
					draggable="false"
				/>
			</div>
		</div>
	);
};

export default CardCTA;
