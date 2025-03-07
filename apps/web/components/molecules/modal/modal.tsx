import { Card, Heading, VisuallyHidden } from 'ui';
import { type ReactNode, useId } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

type ModalProps = {
	title: string;
	children: ReactNode;
	isOpen: boolean;
	closeHandler: () => void;
};

export const Modal = ({
	title,
	children,
	isOpen,
	closeHandler,
}: ModalProps) => {
	const id = useId();
	const onClickHandler = () => {
		closeHandler();
	};

	if (!isOpen) {
		return null;
	}

	return (
		<div
			id={id}
			className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-white/80 z-20"
			role="modal"
			aria-modal
			aria-labelledby={`${id}-title`}
		>
			<div
				onClick={onClickHandler}
				className="w-full h-full absolute top-0 left-0 z-10"
			></div>
			<div className="bg-white z-40 w-11/12 mx-auto max-w-7xl">
				<Card tag="div">
					<div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-200 pt-3 pb-6">
						<Heading
							tag="h2"
							size="large"
							className="text-4xl font-bold text-center tracking-tight text-gray-900 md:pr-20 order-2 md:order-1 md:text-left"
							id={`${id}-title`}
						>
							{title}
						</Heading>
						<button
							className="w-8 h-8 absolute top-4 right-4"
							onClick={onClickHandler}
						>
							<XMarkIcon />
							<VisuallyHidden>zamknij modal</VisuallyHidden>
						</button>
					</div>
					{children}
				</Card>
			</div>
		</div>
	);
};
