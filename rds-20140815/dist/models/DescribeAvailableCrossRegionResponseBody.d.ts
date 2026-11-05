import * as $dara from '@darabonba/typescript';
export declare class DescribeAvailableCrossRegionResponseBodyRegions extends $dara.Model {
    region?: string[];
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
export declare class DescribeAvailableCrossRegionResponseBody extends $dara.Model {
    regions?: DescribeAvailableCrossRegionResponseBodyRegions;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 39265F46-EC77-4036-8AC4-F035F32F6BE2
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
