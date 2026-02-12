export interface FormData {
  name: string;
  email: string;
  notifications: boolean;
  contactMethod: "email" | "none";
}

export interface FormErrors {
  name?: string;
  email?: string;
}

export interface StepProps {
  data: FormData;
  updateData: (fields: Partial<FormData>) => void;
  onNext?: () => void;
  onBack?: () => void;
  errors?: FormErrors;
  setErrors?: (errors: FormErrors) => void;
}
