import React from 'react'
import {Link} from "gatsby"
import ButtonAnimated from '../ButtonAnimated'

interface IXDCallToActionProps {
	entry: Record<string, any>;
}

const XDCallToAction = ({entry}: IXDCallToActionProps) =>  {   
    return (
        <>
           {entry.fields.link ? 
                <ButtonAnimated entry={entry.fields.link.fields} />
            : 
                <ButtonAnimated entry={entry.fields} />
            }
        </>
    )
}

export default XDCallToAction;