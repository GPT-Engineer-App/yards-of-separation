import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Welcome to AI Image Generator</CardTitle>
          <CardDescription>Explore AI-generated images based on text descriptions</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            Click the button below to view our latest AI-generated image featuring an NFL play.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link to="/ai-image" className="flex items-center">
              View AI Image <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;