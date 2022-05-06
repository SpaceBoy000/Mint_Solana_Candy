import "./Navbar.styles.css";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-material-ui";
import styled from "styled-components";

interface Props {
  scrollToHome: any;
  scrollToBuyAnApeRef: any;
  scrollToRoadMap: any;
  scrollToTeam: any;
  scrollToArt: any;
  scrollToIntroduction: any;
  scrollToWhitePaper: any;
  homeRef: any;
}
const ConnectButton = styled(WalletMultiButton)`
  padding: 5px 10px !important;
  background-color: transparent !important;
  border: 1px solid gray !important;
  transition: all 0.25s !important;
  font-family: brlnsr !important;
  &:hover {
    color: rgb(255, 255, 9) !important;
    box-shadow: unset;
  }
`;
const Navbar: React.FC<Props> = ({
  scrollToHome,
  scrollToBuyAnApeRef,
  scrollToRoadMap,
  scrollToTeam,
  scrollToArt,
  scrollToIntroduction,
  scrollToWhitePaper,
  homeRef,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar_container" ref={homeRef}>
      <div className="routes_list">
        <ConnectButton />
        <div className="routes_list ">
          <p className="mr_m route_item" onClick={() => scrollToIntroduction()}>
            introduction
          </p>
          <p className="mr_m route_item" onClick={() => scrollToWhitePaper()}>
            whitepaper
          </p>
          <p className="mr_m route_item" onClick={() => scrollToRoadMap()}>
            roadmap
          </p>
          <p className="mr_m route_item" onClick={() => scrollToArt()}>
            art
          </p>
          {/* <p className="mr_m route_item" onClick={() => scrollToBuyAnApeRef()}>
            buy maskerade
          </p> */}
          <p className="mr_m route_item" onClick={() => scrollToTeam()}>
            team
          </p>
        </div>
        <div className="nav_icons">
          <a href="https://discord.gg/maskeradesol" style={{ color: "white" }}>
            <FaDiscord className="icon mr_m" />
          </a>
          <a
            href="https://twitter.com/maskeradesol"
            style={{ color: "white" }}
          >
            <AiOutlineTwitter className="icon mr_m" />
          </a>
        </div>
      </div>

      {/* nav-mob  */}
      <div className="nav_mob">
        <ConnectButton />
        <HiOutlineMenuAlt3
          className="nav_mob__icon"
          onClick={() => setOpen(!open)}
        />
        {open && (
          // <div className={open ? "nav_mob__menu acitve" : "nav_mob__menu"}>
          <div className={"nav_mob__menu"}>
            <p className="mr_m route_item" onClick={() => scrollToIntroduction()}>
              introduction
            </p>
            <p className="mr_m route_item" onClick={() => scrollToWhitePaper()}>
              whitepaper
            </p>
            <p className="mr_m route_item" onClick={() => scrollToRoadMap()}>
              roadmap
            </p>
            <p className="mr_m route_item" onClick={() => scrollToArt()}>
              art
            </p>
            
            {/* <p
              className="mr_m route_item"
              onClick={() => scrollToBuyAnApeRef()}
            >
              buy maskerade
            </p> */}

            <p className="mr_m route_item" onClick={() => scrollToTeam()}>
              team
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
