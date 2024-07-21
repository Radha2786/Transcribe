import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ModalProps {
  title: string;
  icon?: React.ReactNode;
  description?: string;
  children: React.ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    { title, icon , description, children, isModalOpen, setIsModalOpen, className },
    ref
  ) => {
    return (
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <Button>{icon || title}</Button>
        </DialogTrigger>
        <DialogContent
          className={`sm:max-w-[425px] bg-white text-black ${className}`}
          ref={ref}
        >
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
            {children}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;