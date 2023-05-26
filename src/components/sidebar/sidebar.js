import { Link } from "react-router-dom";

import { Logo, Li, Wrapper, Span } from "./sidebar-styled";
import {
  AccountCircleOutlined,
  AddBoxOutlined,
  DensityMediumOutlined,
  ExploreOutlined,
  FavoriteBorderOutlined,
  HomeOutlined,
  MapsUgcOutlined,
  MovieFilterOutlined,
  Search,
} from "@mui/icons-material";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <Logo
          src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/social-media/instagram-text-logo.png"
          alt="instagram"
        />
        <ul className="list__group">
          <Link to="/home">
            <Li className="list__groupItem">
              <HomeOutlined />
              <Span>Home</Span>
            </Li>
          </Link>
          <Li className="list__groupItem">
            <Search />
            <Span>Search</Span>
          </Li>
          <Li className="list__groupItem">
            <ExploreOutlined />
            <Span>Explore</Span>
          </Li>
          <Li className="list__groupItem">
            <MovieFilterOutlined />
            <Span>Reels</Span>
          </Li>
          <Li className="list__groupItem">
            <MapsUgcOutlined />
            <Span>Messages</Span>
          </Li>
          <Li className="list__groupItem">
            <FavoriteBorderOutlined />
            <Span>Notifications</Span>
          </Li>
          <Link to="/create">
            <Li className="list__groupItem">
              <AddBoxOutlined />
              <Span>Create</Span>
            </Li>
          </Link>
          <Li className="list__groupItem">
            <AccountCircleOutlined />
            <Span>Profile</Span>
          </Li>
        </ul>
      </div>

      <Li mbottom>
        <DensityMediumOutlined />
        <Span>More</Span>
      </Li>
    </div>
  );
};

export default Sidebar;
