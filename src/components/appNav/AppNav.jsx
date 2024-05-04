import "./appNav.css";
import userImg from "../../static/user-logo.png";
import Button from "react-bootstrap/Button";

function AppNav() {
  return (
    <>
      <div className="nav">
        <div className="nav-btns d-flex">
          <div className="AllPosts me-4"> All Posts <div className="underline"></div></div>
          <div className="articles me-4">Articles</div>
          <div className="education me-4">Education</div>
          <div className="Job">Job</div>
        </div>
        <div className="btns">
          <Button variant="secondary me-2">write a post</Button>
          <Button variant="primary">
            <img src={userImg} alt="" srcset="" />
            Join Group
          </Button>
        </div>
      </div>
    </>
  );
}

export default AppNav;
