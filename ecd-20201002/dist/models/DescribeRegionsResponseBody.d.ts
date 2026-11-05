import * as $dara from '@darabonba/typescript';
export declare class DescribeRegionsResponseBodyRegions extends $dara.Model {
    /**
     * @remarks
     * The endpoint of the region.
     *
     * @example
     * ecd.cn-hangzhou.aliyuncs.com
     */
    regionEndpoint?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-hangzhou
     */
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
export declare class DescribeRegionsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The region information objects.
     */
    regions?: DescribeRegionsResponseBodyRegions[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
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
