import "./nav.css";
import logo from "../../static/logo.png";

function Nav({ onCreateAC }) {
  const createAccountHandeler = (event) => {
    event.preventDefault();
    onCreateAC();
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary custom-nav">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-content" id="navbarTogglerDemo03">
            <div className="logocover">
            <a className="navbar-brand" href="#">
              <img src={logo} className="ms-5 nav-logo" alt="" srcset="" />
            </a>
            </div>
            <div className="d-flex justify-content-center search_cover">
              <form className="d-flex " role="search">
                <input
                  className="form-control rounded-pill me-2 search_input"
                  type="search"
                  placeholder="Search for Your favourate grpops in ATG"
                  aria-label="Search"
                />
              </form>
            </div>
            <div className="signupCover">
            <a onClick={createAccountHandeler} className="signUp">
              Create account. <samp className="free">It's free</samp>
            </a>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
