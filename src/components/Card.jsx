const Card = ({ title, url, imageUrl, tools }) => {
	return (
		<div>
			<div id="card">
				<h5>{title}</h5>
				<p style={{ width: "130px" }}>{tools}</p>
				<a href={url} target="_blank" rel="noreferrer">
					<img src={imageUrl} alt="coverImg" className="cover-img" />
				</a>
			</div>
		</div>
	);
};

export default Card;
