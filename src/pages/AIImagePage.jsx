import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AIImagePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">AI Generated Image</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <img
            src="/images/kupp-separation.png"
            alt="Kupp's separation"
            className="w-full h-auto rounded-lg shadow-lg mb-4"
          />
          <p className="text-lg text-center mt-4">
            "Kupp had 17.0 yards of separation from the nearest defender"
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild variant="outline">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AIImagePage;