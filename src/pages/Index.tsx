import React from 'react';
import AuthCard from '../components/Auth/AuthCard';

const LoginPage: React.FC = () => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  // const [error, setError] = React.useState<string | null>(null); // Optional: for displaying login errors

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    // setError(null); // Reset error on new submission

    console.log('Login attempt with:', { username, password });

    // Simulate API call
    setTimeout(() => {
      // Example validation logic
      if (username === 'testuser' && password === 'password123') {
        console.log('Login successful');
        // alert('Login successful!'); // Replace with actual navigation or state update
      } else {
        console.error('Login failed: Invalid credentials');
        // setError('Invalid username or password.');
        // alert('Login failed: Invalid credentials. Try testuser/password123');
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleFooterLinkClick = () => {
    console.log('Footer link (Sign up) clicked.');
    // Example: alert('Navigate to sign up page or open sign up modal.');
    // If using react-router, you might navigate here: history.push('/signup');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <AuthCard
        title="Log in"
        usernameLabel="Username"
        usernamePlaceholder="Enter your username"
        passwordLabel="Password"
        passwordPlaceholder="Enter your password"
        buttonText="Log in"
        footerText="or,"
        footerLinkText="sign up"
        footerLinkHref="/signup" // Example href, actual navigation handled by onFooterLinkClick
        onUsernameChange={handleUsernameChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSubmit}
        onFooterLinkClick={handleFooterLinkClick} // This ensures click is handled, default navigation prevented by AuthCard
        isLoading={isLoading}
        // You can pass specific values for username and password to AuthCard
        // if you want Index.tsx to be the single source of truth for input values.
        // However, AuthCard already manages its internal state for inputs and calls
        // onUsernameChange/onPasswordChange, so passing `username` and `password` props
        // back to AuthCard for its `value` prop is redundant given current AuthCard setup.
        // AuthCard's internal state is sufficient for its InputField values.
      />
      {/* Optional: Display error message 
      {error && <p className="mt-4 text-center text-red-500">{error}</p>} 
      */} 
    </div>
  );
};

export default LoginPage;
