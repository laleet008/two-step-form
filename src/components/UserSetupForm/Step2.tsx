import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { StepProps } from "./types";

interface Step2Props extends StepProps {
  onSubmit: () => void;
  isSubmitting: boolean;
}

export function Step2({ data, updateData, onBack, onSubmit, isSubmitting }: Step2Props) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="notifications"
            checked={data.notifications}
            onCheckedChange={(checked) => 
              updateData({ notifications: checked === true })
            }
          />
          <Label htmlFor="notifications" className="cursor-pointer">
            Receive notifications
          </Label>
        </div>

        <div className="space-y-3">
          <Label>Preferred contact method</Label>
          <RadioGroup
            value={data.contactMethod}
            onValueChange={(value) => 
              updateData({ contactMethod: value as "email" | "none" })
            }
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="email" id="contact-email" />
              <Label htmlFor="contact-email" className="cursor-pointer">Email</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="none" id="contact-none" />
              <Label htmlFor="contact-none" className="cursor-pointer">None</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onBack} disabled={isSubmitting}>
          Back
        </Button>
        <Button onClick={onSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </CardFooter>
    </Card>
  );
}
