import { Parallax } from "react-parallax";
function Hero() {
  return (
    //<Parallax
    //  bgImage="https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
    //  bgImageAlt="the cat"
    //  strength={300}
    //  >
    <section id="hero" className="hero is-white is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns has-text-centered is-vcentered">
            <div className="column" data-aos="fade-right">
              <p className="subtitle is-4">Hello, I am</p>
              <p className="title is-1">
                Kevin <span className="has-text-green-dark">Solovjov</span>
              </p>
              <p className="subtitle is-4">UI/UX Designer and Web Developer</p>
              <button className="button is-green-dark is-medium">
                Hire me
              </button>
            </div>
            <div className="column" data-aos="fade-left" data-aos-delay="200">
              <div className="">
                <figure className="image is-square">
                  <img className="hero-img hero-normal" src="me_round.png" />
                  <img className="hero-img hero-hd" src="me_round_hd.png" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-foot center">
        <figure
          className="image is-48x48 is-clickable"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-anchor="#hero"
        >
          <img src="double-down.png" />
        </figure>
      </div>
    </section>
    //</Parallax>
  );
}

export default Hero;
