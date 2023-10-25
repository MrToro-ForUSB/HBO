const ButtonProfile = () => {
	return (
		<button className="profile">
			<img
				className="profile__image"
				src="/public/images/Profile.png"
				draggable
			/>
			<span className="profile__name">Jon</span>
		</button>
	);
};

export default ButtonProfile;
