import "./Profile.css";

import ButtonProfile from "../Buttons/ButtonProfile";
import { IoAdd } from "react-icons/io5";

const Profile = () => {
	return (
		<main className="profile-page">
			<section className="profie-page__heading">
				<img className="profile-page__logo" src="/public/images/Splash.png" />
				<h1 className="profile-page__title">Who Is Watching?</h1>
			</section>
			<section className="profile-page__profiles">
				<ButtonProfile />
				<ButtonProfile />
			</section>
			<section className="profie-page__footing">
				<div className="profie-page__add-profile-buttons">
					<button className="profile-page__add-button">
						<IoAdd className="profile-page__add-icon" />
						ADULT
					</button>
					<button className="profile-page__add-button">
						<IoAdd className="profile-page__add-icon" />
						KID
					</button>
				</div>
				<button className="profie-page__manager-profiles">
					MANAGER PROFILES
				</button>
			</section>
		</main>
	);
};

export default Profile;
