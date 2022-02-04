import React, { useEffect } from "react";
import { hubSpotFormCreate, HubSpotFormDetails } from '../lib/utilities/hubSpot';

type HubSpotFormType = {
    formDetail: HubSpotFormDetails,
    height: string
}

export function HubSpotForm({ formDetail, height } : HubSpotFormType) {
    useEffect(() => {
        hubSpotFormCreate(formDetail)
    }, [formDetail])

    return (
        <div className="flex justify-center" style={{minHeight: `${height}` + 'px'}}>
            <div className="my-[1rem]">
                <div className="block max-w-sm p-6 bg-white rounded-lg shadow-lg">
                    <div className="pb-4 form"></div>
                </div>
            </div>
        </div>
    )
}