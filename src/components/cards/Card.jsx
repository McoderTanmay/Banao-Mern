import "./cards.css";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import dropdownImg from "../../static/dropdown.png";
import shareImg from "../../static/share.png";

function Cards({bgImg, type, profile, name}) {
  return (
    <>
      <Card style={{ width: "70%" }} className="mb-2 infoCard">
        <Card.Img variant="top" src={bgImg} />
        <Card.Body>
          <Card.Text className="fw-bold">✍️ {type}</Card.Text>
          <Card.Title>
            What if famous brands had regular fonts? Meet RegulaBrands!
          </Card.Title>
          <Card.Text className="card-text">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
            <div className="dropdown">
              <Dropdown>
                <Dropdown.Toggle className="dropdown" id="dropdown-basic">
                  <img src={dropdownImg} alt="" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Card.Text>
          <div className="botton-card">
            <div className="name d-flex align-items-center">
              <img
                src={profile}
                alt=""
                className="me-2 rounded-circle"
                srcset=""
              />
              {name}
            </div>
            <div className="viewAndShare">
              <div className="views me-2">1.4k views</div>
              <div className="share">
                <img src={shareImg} alt="" />
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
