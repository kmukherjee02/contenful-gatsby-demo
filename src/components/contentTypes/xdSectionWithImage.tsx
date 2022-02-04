import React from 'react'
import XDImageWithText from './xdImageWithText';
import XDSetOfCallToAction from './xdSetOfCallToActions';
import XDSetOfProgressBar from './xdSetOfProgressBar';
import ButtonAnimated from '../ButtonAnimated';
import cn from 'classnames';

interface IXDSectionWithImageProps {
	entry: Record<string, any>;
}

const XDSectionWithImage = ({ entry }: IXDSectionWithImageProps) =>  {
	const renderDetails = () : JSX.Element => {
		switch (entry.detail.sys.contentType.sys.id) {
			case 'xdSetOfCallToAction':
				return (
					<div className='grid gap-6 mt-8 sm:grid-cols-2'>
						<XDSetOfCallToAction
							entry={entry.detail.fields.setOfCta}
						/>
					</div>
				);
				break;
			case 'xdSetOfProgressBar':
				return (
					<div className='mt-8'>
						<XDSetOfProgressBar
							entry={entry.detail.fields.progressBars}
						/>
					</div>
				);
				break;
			default:
				console.log(
					'Section type not found: ' + entry.detail.sys.contentType.id
				);
				return (
					<div data-content-type='not-found'>
						Illegal Section Type
					</div>
				);
		}
	};
    const imgWithTextComponent:JSX.Element = (
        <div className='p-2 mx-auto lg:p-0 lg:w-2/5'>
            <XDImageWithText entry={entry.imageWithText.fields} />
        </div>
    )

	return (
		<section className='container py-16 mx-auto lg:py-24'>
			<div className='flex flex-col justify-between lg:flex-row lg:items-center'>
				{entry.imageWithTextAlignment === 'left' && imgWithTextComponent}
				<div className='px-3 lg:w-1/2 lg:mr-24'>
					<h6
						className={cn('', {
							'text-primary-normal': entry.theme === 'primary',
							'text-orange-light': entry.theme === 'secondary',
						})}
					>
						{entry.caption}
					</h6>
					<h2 className='mb-5 text-2xl font-bold font-dosis lg:text-4xl'>
						{entry.title}
					</h2>
					<p className='text-sm'>
						{entry.description}
					</p>
					{renderDetails()}
					{entry.button && (
						<div className='inline-block my-4'>
							<ButtonAnimated entry={entry.button.fields} />
						</div>
					)}
				</div>
				{entry.imageWithTextAlignment === 'right' && imgWithTextComponent}
			</div>
		</section>
	);
}

export default XDSectionWithImage;