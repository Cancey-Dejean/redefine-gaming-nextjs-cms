import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-[var(--white)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--brand)] text-[var(--white)] hover:bg-[var(--brand)]/90",
        destructive:
          "bg-[var(--error)] text-[var(--brand-foreground)] hover:bg-[var(--error)]/90",
        outline:
          "border border-[var(--border)] bg-[var(--transparent)] hover:bg-[var(--white-smoke)] hover:text-[var(--brand)]",
        secondary:
          "bg-[var(--white-smoke)] text-[var(--brand)] hover:bg-[var(--white)]/80",
        ghost: "hover:bg-[var(--white-smoke)] hover:text-[var(--brand)]",
        link: "text-[var(--brand)] underline-offset-4 hover:underline",
      },
      size: {
        default: "px-7 py-3",
        sm: "px-3",
        lg: "px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
