import * as $dara from '@darabonba/typescript';
export declare class DescribeKVCacheInstancesResponseBodyItemsKVCacheItem extends $dara.Model {
    AIDBClusterId?: string;
    creationTime?: string;
    DBClusterId?: string;
    expireTime?: string;
    expired?: string;
    KVCacheInstanceId?: string;
    KVCacheInstanceStatus?: string;
    KVCacheSpace?: number;
    payType?: string;
    regionId?: string;
    VPCId?: string;
    vSwitchId?: string;
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
export declare class DescribeKVCacheInstancesResponseBodyItems extends $dara.Model {
    KVCacheItem?: DescribeKVCacheInstancesResponseBodyItemsKVCacheItem[];
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
export declare class DescribeKVCacheInstancesResponseBody extends $dara.Model {
    items?: DescribeKVCacheInstancesResponseBodyItems;
    /**
     * @remarks
     * The current page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of instances returned on the current page.
     *
     * @example
     * 1
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 2921D843-433A-5FB3-A03B-4EC093B219F8
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of instances that match the filter conditions.
     *
     * @example
     * 1
     */
    totalRecordCount?: number;
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
