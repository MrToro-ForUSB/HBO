import "./App.css";

function App() {
	return (
		<>
			{/* Encabezado */}
			<h1>HBO</h1>

			{/* Párrafo */}
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
				recusandae assumenda minus ad quis expedita quos ex illo iste veniam,
				pariatur est doloribus nulla repellendus quod amet iusto voluptatum
				enim!
			</p>

			{/* Enlace */}
			<a href="#">Enlace random</a>

			{/* Enlace con variante de color */}
			<a href="#" className="link--variant">
				Enlace random con una variante de color
			</a>

			{/* Botón */}
			<a href="#" className="btn">
				BOTON NORMAL
			</a>

			{/* Botón con variante de color */}
			<a href="#" className="btn btn--gradient">
				BOTONCHITO
			</a>

			{/* Botón con imágen */}
			<a href="#" className="btn btn--brand">
				<img src="/public/images/Branding-HBO.png" draggable="false" />
			</a>

			<button className="profile">
				<img
					className="profile__image"
					src="/public/images/Profile.png"
					draggable
				/>
				<span className="profile__name">Jon</span>
			</button>

			<button className="profile profile--small">
				<img
					className="profile__image"
					src="/public/images/Profile.png"
					draggable
				/>
			</button>

			<div className="card card--star">
				<img
					className="card__image"
					src="/public/images/Card-star.jpeg"
					draggable="false"
				/>

				<div className="card__play"></div>
			</div>

			<div className="card card--medium">
				<img
					className="card__image"
					src="/public/images/Card-medium.jpeg"
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
		</>
	);
}

export default App;
