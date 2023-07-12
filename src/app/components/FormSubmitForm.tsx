"use client";

import React, { ComponentProps } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type FormSubmitFormProps = {
    children: React.ReactNode;
    className?: string;
} & ComponentProps<"button">;
const FormSubmitButton = ({
    children,
    className,
    ...props
}: FormSubmitFormProps) => {
    const { pending } = useFormStatus();

    return (
        <button
            {...props}
            className={`btn btn-primary ${className} w-[80%]`}
            type="submit"
            disabled={pending}
        >
            {pending && <span className="loading loading-spinner" />}
            {children}
        </button>
    );
};
export default FormSubmitButton;
