import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import XDCallToAction from './xdCallToAction';
import XDCounter from "./xdCounter";
import cn from 'classnames'
import {getAbsoluteImageUrlInWebp} from '../../lib/utilities';

interface IXDBanner {
	entry: Record<string, any>;
}
const XDBanner = ({entry}: IXDBanner) => {
    const { cta, counter,  description, image } = entry;
    const bgImgSrc: string = getAbsoluteImageUrlInWebp(image.fields.file.url);
   
    const counters: JSX.Element = counter?.map((item: Record<string, any>,index: number) => (
        <XDCounter entry={item} key={index} />
    ))
    const buttons: JSX.Element = cta?.map((item: Record<string, any>,index: number) => (
        <XDCallToAction entry={item} key={index} />
    ));

    // apply styles to rendered rich text
    const H2 = ({children}) => <h2 className='text-white'>{children}</h2>;
    const P = ({children}) => <p className='text-white md:text-lg'>{children}</p>;
    const options = {
        renderNode: {
            [BLOCKS.HEADING_2]: (node: Record<string, any>, children: string) => <H2>{children}</H2>,
            [BLOCKS.PARAGRAPH]: (node: Record<string, any>, children: string) => <P>{children}</P>,
          },
    }
    
    return (
        <div className={cn('bg-center bg-cover bg-no-repeat w-full border text-center py-12 px-8 relative z-10 before:content-[""] before:h-full before:w-full before:bg-black before:absolute before:top-0 before:left-0 before:opacity-60 before:-z-10', {
            'bg-fixed': counter
        })} style={{backgroundImage: `url(${bgImgSrc})`}}>
            {counter && 
                <div className='flex flex-col items-center justify-around my-8 md:flex-row'>
                    {counters}
                </div>
            }
            {description && 
                <div className='mx-auto banner-description md:w-3/5'>
                    <div className='mb-8'>
                        {documentToReactComponents(description, options)}
                    </div>
                    {cta && 
                        <div className='flex flex-col items-center justify-center md:flex-row'>
                            {buttons}
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default XDBanner;