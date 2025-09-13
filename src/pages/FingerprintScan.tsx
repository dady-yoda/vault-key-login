import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, Fingerprint } from "lucide-react";

const FingerprintScanPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background effects (same as main page) */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-pulse-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-primary-glow/5 rounded-full blur-2xl animate-gradient-shift" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/3 right-1/3 w-32 h-32 border border-primary/20 rounded-lg animate-rotate-slow" />
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-accent/20 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
      <div className="absolute top-1/2 left-1/6 w-4 h-4 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '4s' }} />
      <div className="absolute top-1/6 right-1/6 w-6 h-6 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
      <div className="absolute bottom-1/6 left-3/4 w-3 h-3 bg-primary/40 rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '5s' }} />
      <Card className="w-full max-w-md relative z-10 bg-card/80 backdrop-blur-xl border-border/50 shadow-card">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
            <Wallet className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Fingerprint Scanning
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6">
          {/* Scanning Animation */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            <Fingerprint className="w-24 h-24 text-primary animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border-4 border-primary animate-fingerprint-scan" />
            </div>
          </div>
          <p className="text-lg text-muted-foreground text-center">Place your finger on the scanner...</p>
        </CardContent>
      </Card>
      {/* Add fingerprint scan animation CSS below in your global styles */}
    </div>
  );
};
export default FingerprintScanPage;
