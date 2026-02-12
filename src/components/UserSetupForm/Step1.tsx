import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import type { FormData, StepProps } from "./types";

export function Step1({ data, updateData, onNext }: StepProps) {
  const [touched, setTouched] = useState<{ name: boolean; email: boolean }>({
    name: false,
    email: false
  });

  const validate = (data: FormData) => {
    const errors: { name?: string; email?: string } = {};

    if (!data.name.trim()) {
      errors.name = "Name is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Invalid email format";
    }

    return errors;
  };

  const errors = validate(data);
  const isValid = Object.keys(errors).length === 0;

  const handleBlur = (field: "name" | "email") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="John Doe"
            value={data.name}
            onChange={(e) => updateData({ name: e.target.value })}
            onBlur={() => handleBlur("name")}
            className={
              touched.name && errors.name
                ? "border-red-500 focus-visible:ring-red-500"
                : ""
            }
          />
          {touched.name && errors.name && (
            <p className="text-sm text-red-500">{errors.name}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={data.email}
            onChange={(e) => updateData({ email: e.target.value })}
            onBlur={() => handleBlur("email")}
            className={
              touched.email && errors.email
                ? "border-red-500 focus-visible:ring-red-500"
                : ""
            }
          />
          {touched.email && errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onNext} disabled={!isValid}>
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
