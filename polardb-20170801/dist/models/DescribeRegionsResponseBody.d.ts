import * as $dara from '@darabonba/typescript';
export declare class DescribeRegionsResponseBodyRegionsRegionZonesZone extends $dara.Model {
    vpcEnabled?: boolean;
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
export declare class DescribeRegionsResponseBodyRegionsRegionZones extends $dara.Model {
    zone?: DescribeRegionsResponseBodyRegionsRegionZonesZone[];
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
export declare class DescribeRegionsResponseBodyRegionsRegion extends $dara.Model {
    regionId?: string;
    zones?: DescribeRegionsResponseBodyRegionsRegionZones;
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
export declare class DescribeRegionsResponseBodyRegions extends $dara.Model {
    region?: DescribeRegionsResponseBodyRegionsRegion[];
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
export declare class DescribeRegionsResponseBody extends $dara.Model {
    regions?: DescribeRegionsResponseBodyRegions;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 3F9E6A3B-C13E-4064-A010-18582A******
     */
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
