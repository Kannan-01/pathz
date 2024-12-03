import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../src/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <>

      {/* navbar */}
      <Navbar expand="lg" className="bg-black text-white">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            NAVBAR
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-white" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" href="#link">
                Link
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item className="text-white" href="#action/3.1">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item className="text-white" href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
      <div className="d-flex justify-content-center align-items-center">

        <div>
          <h1 className="text-center">Hello this is a sample project</h1>
        </div>
      </div>
    </>
  );
}

export default App;
