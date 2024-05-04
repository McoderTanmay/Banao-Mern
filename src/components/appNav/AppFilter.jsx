import "./appFilter.css";
import userImg from "../../static/user-logo.png";
import Button from "react-bootstrap/Button";

function Filter() {
  return (
    <>
      <div className="navFilter mt-2 mb-2">
        <div className="posts"><p className="fw-bold">Posts</p></div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
              Articles
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
              Education
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
              Job
              </a>
            </li>
            <li>
            <Button variant="secondary me-2">write a post</Button>
            </li>
            <li>
            <Button variant="primary">
            <img src={userImg} alt="" srcset="" />
            Join Group
            </Button>
            </li>
          </ul>
        </div>
        {/* next */}
      </div>
    </>
  );
}

export default Filter;
