function Featured({ name, image, type, link }) {
  return (
      <div className="featured box column mx-5">
      <div className="content ">
  <span className="is-size-4 has-text-weight-semibold">{name}<span className="has-text-purple is-size-5 has-text-weight-medium"> - {type}</span></span>
      </div>
        <a href={link}>
      <div className="image-scroll-container">
      <figure className="image image-scroll is-3by2">
        <img src={image} />
      </figure>
      </div>
      </a>
      </div>
  );
}

export default Featured;
