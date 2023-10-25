import "./Splash.css";

import { useState } from "react";
import { BsCircleFill } from "react-icons/bs";

const Splash = () => {
	let [active, setActive] = useState(0);

	(function () {
		setTimeout(() => {
			fakeLoading();
		}, 2000);
	})();

	const fakeLoading = () => {
		active++;
		setActive(active);

		if (active === 3) {
			active = 0;
			setActive(active);
		}

		delayLoop();
	};

	return (
		<main className="splash">
			<img src="/public/images/Splash.png" draggable="false" />

			<div className="splash__loading">
				<BsCircleFill
					className={`splash__loading-circle ${active == 0 ? "active" : ""}`}
				/>
				<BsCircleFill
					className={`splash__loading-circle ${active == 1 ? "active" : ""}`}
				/>
				<BsCircleFill
					className={`splash__loading-circle ${active == 2 ? "active" : ""}`}
				/>
			</div>
		</main>
	);
};

export default Splash;
