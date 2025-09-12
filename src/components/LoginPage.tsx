import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Fingerprint, Wallet } from "lucide-react";
const LoginPage = () => {
  const handleFingerprintAuth = () => {
    // Fingerprint authentication logic would go here
    console.log("Attempting fingerprint authentication...");
  };
  const handleMetaMaskAuth = () => {
    // MetaMask connection logic would go here
    console.log("Attempting MetaMask connection...");
  };
  return <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-pulse-glow" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-primary-glow/5 rounded-full blur-2xl animate-gradient-shift" style={{ animationDelay: '3s' }} />
      
      {/* Rotating geometric shapes */}
      <div className="absolute top-1/3 right-1/3 w-32 h-32 border border-primary/20 rounded-lg animate-rotate-slow" />
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-accent/20 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
      
      {/* Additional floating particles */}
      <div className="absolute top-1/2 left-1/6 w-4 h-4 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '4s' }} />
      <div className="absolute top-1/6 right-1/6 w-6 h-6 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
      <div className="absolute bottom-1/6 left-3/4 w-3 h-3 bg-primary/40 rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '5s' }} />
      
      <Card className="w-full max-w-md relative z-10 bg-card/80 backdrop-blur-xl border-border/50 shadow-card">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
            <Wallet className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Secure Login
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Choose your preferred authentication method to continue
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Fingerprint Authentication */}
          <Button variant="fingerprint" size="lg" onClick={handleFingerprintAuth} className="w-full h-16 text-lg">
            <Fingerprint className="w-6 h-6 mr-3" />
            Fingerprint Authentication
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or</span>
            </div>
          </div>

          {/* MetaMask Authentication */}
          <Button variant="metamask" size="lg" onClick={handleMetaMaskAuth} className="w-full h-16 text-lg">
            <svg className="w-6 h-6 mr-3" viewBox="0 0 318.6 318.6" fill="currentColor">
              <path d="M274.1 35.5l-99.5 73.9L193 65.8z" fill="#e2761b" />
              <path d="M44.4 35.5l98.7 74.6-17.5-44.3z" fill="#e4761b" />
              <path d="M238.3 206.8l-26.5 40.6 56.7 15.6 16.3-55.3z" fill="#e4761b" />
              <path d="M33.9 207.7L50.1 263l56.7-15.6-26.5-40.6z" fill="#e4761b" />
              <path d="M103.6 138.2l-15.8 23.9 56.3 2.5-1.9-60.6z" fill="#e4761b" />
              <path d="M214.9 138.2l-39-34.8-1.3 61.2 56.2-2.5z" fill="#e4761b" />
              <path d="M106.8 247.4l33.8-16.5-29.2-22.8z" fill="#e4761b" />
              <path d="M177.9 230.9l33.9 16.5-4.7-39.3z" fill="#e4761b" />
            </svg>
            Connect MetaMask
          </Button>

          {/* Security Note */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground">New to BioKey ? Register here</p>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default LoginPage;