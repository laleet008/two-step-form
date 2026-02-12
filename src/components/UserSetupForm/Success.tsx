import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export function Success({ onReset }: { onReset: () => void }) {
  return (
    <Card className="w-[350px] text-center">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="h-12 w-12 text-green-500" />
        </div>
        <CardTitle>Success!</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6">
          Your information has been submitted successfully.
        </p>
        <Button onClick={onReset} className="w-full">
          Start Over
        </Button>
      </CardContent>
    </Card>
  );
}
