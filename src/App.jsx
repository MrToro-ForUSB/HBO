import "./index.css";

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
		</>
	);
}

export default App;
