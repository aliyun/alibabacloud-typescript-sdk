import * as $dara from '@darabonba/typescript';
export declare class DescribeRCAvailableResourceResponseBodyAvailableZonesAvailableResourcesSupportedResources extends $dara.Model {
    max?: number;
    min?: number;
    quotaStatus?: string;
    status?: string;
    statusCategory?: string;
    unit?: string;
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
export declare class DescribeRCAvailableResourceResponseBodyAvailableZonesAvailableResources extends $dara.Model {
    supportedResources?: DescribeRCAvailableResourceResponseBodyAvailableZonesAvailableResourcesSupportedResources[];
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
export declare class DescribeRCAvailableResourceResponseBodyAvailableZones extends $dara.Model {
    availableResources?: DescribeRCAvailableResourceResponseBodyAvailableZonesAvailableResources[];
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
export declare class DescribeRCAvailableResourceResponseBody extends $dara.Model {
    availableZones?: DescribeRCAvailableResourceResponseBodyAvailableZones[];
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
