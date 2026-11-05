import * as $dara from '@darabonba/typescript';
export declare class DescribeCrossCloudRegionResponseBodyCrossCloudRegionListCrossCloudZoneList extends $dara.Model {
    /**
     * @remarks
     * The ID of the third-party cloud zone.
     *
     * @example
     * cn-east-3-1
     */
    crossCloudZoneId?: string;
    /**
     * @remarks
     * The name of the third-party cloud zone.
     *
     * @example
     * cn-east-3-1
     */
    crossCloudZoneName?: string;
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
export declare class DescribeCrossCloudRegionResponseBodyCrossCloudRegionList extends $dara.Model {
    /**
     * @remarks
     * The ID of the third-party cloud region.
     *
     * @example
     * cn-east-3
     */
    crossCloudRegionId?: string;
    /**
     * @remarks
     * The name of the third-party cloud region.
     *
     * @example
     * cn-east-3
     */
    crossCloudRegionName?: string;
    /**
     * @remarks
     * A list of third-party cloud zones.
     */
    crossCloudZoneList?: DescribeCrossCloudRegionResponseBodyCrossCloudRegionListCrossCloudZoneList[];
    /**
     * @remarks
     * The resource pool ID.
     *
     * @example
     * pj-87681rbcef6******
     */
    projectId?: string;
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
export declare class DescribeCrossCloudRegionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The information about the cross-cloud regions.
     */
    crossCloudRegionList?: DescribeCrossCloudRegionResponseBodyCrossCloudRegionList[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E56531A4-E552-40BA-9C58-137B80******
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
