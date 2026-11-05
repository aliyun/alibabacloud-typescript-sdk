import * as $dara from '@darabonba/typescript';
export declare class DescribeRCResourcesModificationResponseBodyAvailableZonesAvailableResourcesSupportedResources extends $dara.Model {
    status?: string;
    statusCategory?: string;
    value?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribeRCResourcesModificationResponseBodyAvailableZonesAvailableResources extends $dara.Model {
    supportedResources?: DescribeRCResourcesModificationResponseBodyAvailableZonesAvailableResourcesSupportedResources[];
    type?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribeRCResourcesModificationResponseBodyAvailableZones extends $dara.Model {
    availableResources?: DescribeRCResourcesModificationResponseBodyAvailableZonesAvailableResources[];
    regionId?: string;
    status?: string;
    statusCategory?: string;
    zoneId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribeRCResourcesModificationResponseBody extends $dara.Model {
    availableZones?: DescribeRCResourcesModificationResponseBodyAvailableZones[];
    requestId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
