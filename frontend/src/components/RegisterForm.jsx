import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function RegisterForm() {
  // State variables for form inputs and errors
  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Handle password changes
  const handlePasswordChange = (e) => {
    const input = e.target.value;
    setPassword(input);

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(input)) {
      setPasswordError(
        "Password should contain 8 characters, at least 1 uppercase and at least one special character."
      );
    } else {
      setPasswordError("");
    }
  };

  // Handle confirm password changes
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setError("Passwords do not match.");
    } else {
      setError("");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error && !mobileError && !usernameError) {
      alert("Form submitted successfully!");
      // Handle form submission logic here
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Registration Form</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMobile">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter mobile number"
          value={mobile}
          onChange={(e) => {
            const input = e.target.value;
            if (/^\d{0,10}$/.test(input)) setMobile(input);
            if (input.length !== 10) {
              setMobileError("Mobile number must be exactly 10 digits.");
            } else {
              setMobileError("");
            }
          }}
          required
        />
        {mobileError && (
          <Form.Text className="text-danger">{mobileError}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => {
            const input = e.target.value;
            if (/^[a-zA-Z0-9]{0,15}$/.test(input)) setUsername(input);
            if (input.length < 3 || input.length > 15) {
              setUsernameError(
                "Username must be 3-15 characters long and alphanumeric."
              );
            } else {
              setUsernameError("");
            }
          }}
          required
        />
        {usernameError && (
          <Form.Text className="text-danger">{usernameError}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {passwordError && (
          <Form.Text className="text-danger">{passwordError}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword1">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password..."
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        {error && <Form.Text className="text-danger">{error}</Form.Text>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I agree to terms and conditions" />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!!error}>
        Register
      </Button>
    </Form>
  );
}

export default RegisterForm;
