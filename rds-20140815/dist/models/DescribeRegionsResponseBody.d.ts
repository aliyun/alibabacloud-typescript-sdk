import * as $dara from '@darabonba/typescript';
export declare class DescribeRegionsResponseBodyRegionsRDSRegion extends $dara.Model {
    localName?: string;
    regionEndpoint?: string;
    regionId?: string;
    zoneId?: string;
    zoneName?: string;
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
    RDSRegion?: DescribeRegionsResponseBodyRegionsRDSRegion[];
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
     * The request ID.
     *
     * @example
     * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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
