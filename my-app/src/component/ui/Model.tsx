import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { ReactNode } from 'react';

interface IProps {
  isOpen: boolean;
  close: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
}

const Model = ({ isOpen, close, title, children, description }: IProps) => {
  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-lg bg-white p-6 backdrop-blur-2xl shadow-xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              {title && (
                <DialogTitle as="h3" className="text-lg font-medium text-black">
                  {title}
                </DialogTitle>
              )}
              {description && (
                <p className="mt-2 text-gray-700 text-sm">{description}</p>
              )}
              <div className="mt-4">
                {children}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};


export default Model;
