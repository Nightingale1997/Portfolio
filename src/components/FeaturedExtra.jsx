function FeaturedExtra({ name, image, type, link }) {
  return (
      <div className="featured column is-one-third px-5 py-5">
      <div className="content ">
  <span className="is-size-5 has-text-weight-semibold">{name}</span>
      </div>
              <a href={link}>
      <div className="image-scroll-container has-border-purple">
      <figure className="image image-scroll is-3by2">
        <img src={image} />
      </figure>

      </div>
          </a>

      <div className="columns">
        <div className="column">{type}
        </div>
        <div className="column">
        Stuff
        </div>
        </div>
      </div>
  );
}

export default FeaturedExtra;
