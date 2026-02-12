import { useState } from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Success } from "./Success";
import type { FormData } from "./types";

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  notifications: false,
  contactMethod: "email",
};

export function UserSetupForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateData = (fields: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const handleNext = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_DATA);
    setStep(1);
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
        <Success onReset={handleReset} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center space-x-2">
           {/* Simple Step Indicator */}
           <div className={`h-2 w-12 rounded-full transition-colors ${step >= 1 ? 'bg-primary' : 'bg-gray-200'}`} />
           <div className={`h-2 w-12 rounded-full transition-colors ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`} />
        </div>

        <div className="flex justify-center">
          {step === 1 ? (
            <Step1 
              data={formData} 
              updateData={updateData} 
              onNext={handleNext} 
            />
          ) : (
            <Step2 
              data={formData} 
              updateData={updateData} 
              onBack={handleBack} 
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          )}
        </div>
      </div>
    </div>
  );
}
