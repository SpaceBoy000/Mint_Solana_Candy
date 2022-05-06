import "./footer.styles.css";

import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

interface Props {
  scrollToHome: any;
}

const Footer: React.FC<Props> = ({ scrollToHome }) => {
  return (
    <div className="footer">
      <div className="footer_icons">
        <a href="https://discord.gg/maskeradesol" style={{ color: "white" }}>
          <FaDiscord className="icon mr_m" />
        </a>
        <a
          href="https://twitter.com/maskeradesol"
          style={{ color: "white" }}
        >
          <AiOutlineTwitter className="icon  mr_m" />
        </a>
        <p style={{ fontSize: "1.5rem", color: "white", marginTop: '15px', fontFamily: "brlnsr"}}>
          © The Maskerade Project
        </p>
      </div>
    </div>
  );
};
export default Footer;
