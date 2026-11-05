import * as $dara from '@darabonba/typescript';
export declare class DescribeRegionInfosResponseBodyRegionsRDSRegion extends $dara.Model {
    regionId?: string;
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
export declare class DescribeRegionInfosResponseBodyRegions extends $dara.Model {
    RDSRegion?: DescribeRegionInfosResponseBodyRegionsRDSRegion[];
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
export declare class DescribeRegionInfosResponseBody extends $dara.Model {
    regions?: DescribeRegionInfosResponseBodyRegions;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 5414A4E5-4C36-4461-95FC-****
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
