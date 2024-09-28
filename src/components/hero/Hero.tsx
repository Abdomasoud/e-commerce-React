import "./Hero.css";
import HandIcon from "../../assets/hand_icon.png";
import ArrowIcon from "../../assets/arrow.png";
import HeroImage from "../../assets/hero_image.png";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={HandIcon} alt="HandIcon" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={ArrowIcon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
