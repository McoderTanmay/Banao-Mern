import "./signup.css";
import flogo from "../../static/facebook.png";
import glogo from "../../static/google.png";
import group3 from "../../static/GroupImg.png"
import cancel from "../../static/cancel.png"

function Signup({onCancel}) {
  const cancelHandeler = () =>{
    onCancel();
  }
  return (
    <>
    
      <div className="signup">
        
        <div className="cover">
        <button className="cancel-btn" onClick={cancelHandeler}><img src={cancel} alt=""/></button>
          <div className="d-flex align-items-center justify-content-between already">
            <h2>Create Account</h2>
            <div>
              Already have an account?
              <a href="" className="signin">
                {" "}
                Sign In
              </a>
            </div>
          </div>
          <div className="full">
            <div className="firstHalf">
              <form>
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control fname rounded-0"
                    id="exampleInputEmail1"
                    placeholder="First Name"
                    aria-describedby="emailHelp"
                  />
                  <input
                    type="text"
                    className="form-control lname rounded-0"
                    id="exampleInputEmail1"
                    placeholder="Last Name"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="form-control inptEmail rounded-0"
                    id="exampleInputEmail1"
                    placeholder="Email"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    className="form-control password rounded-0"
                    placeholder="Password"
                    id="exampleInputPassword1"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    className="form-control cnfPassword rounded-0"
                    placeholder="Confirm Password"
                    id="exampleInputCNFPassword1"
                  />
                </div>
                <button type="submit" className="btn sbt-btn bg-primary">
                  Create Account
                </button>
              </form>
              <div className="d-flex flex-column">
                <button className="withGoogle btn mb-1">
                  <img src={flogo} alt="" /> Sign in with Facebook
                </button>
                <button className="withGoogle btn">
                  <img src={glogo} alt="" srcset="" /> Sign in with Google
                </button>
              </div>
            </div>
            <div className="secondHalf">
              <img src={group3} alt="" />
              <p className="termsCond">By signing up, you agree to our Terms & conditions, Privacy policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
