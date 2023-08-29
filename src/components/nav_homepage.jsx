import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HomeNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Swap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">關於我們</Nav.Link>
            <Nav.Link href="/status">目前狀態</Nav.Link>
            <Nav.Link href="/status">最新消息</Nav.Link>
            <Nav.Link href="/status">使用說明</Nav.Link>
            
          </Nav>
          <Nav className="ms-auto" >
            <Nav.Link href="/signin">登入</Nav.Link>
            <Nav.Link href="/signup">註冊</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;