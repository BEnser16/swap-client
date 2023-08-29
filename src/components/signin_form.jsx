import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import HomeNavbar from './nav_homepage';

function SigninForm() {
  return (
    <div>

        <HomeNavbar/>
        <Container className='my-4 col-6' >
            
            <Form className='mt-4'>
                <h3>歡迎登入</h3>
                <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Label>使用者帳號或電子郵件</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>密碼</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="記住我" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    登入
                </Button>
            </Form>
        </Container>
    </div>
  );
}

export default SigninForm;