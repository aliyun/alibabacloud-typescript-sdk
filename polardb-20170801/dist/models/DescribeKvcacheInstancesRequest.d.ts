import * as $dara from '@darabonba/typescript';
export declare class DescribeKVCacheInstancesRequest extends $dara.Model {
    /**
     * @remarks
     * The description of the KVCache instance.
     *
     * @example
     * Test cache instance
     */
    KVCacheInstanceDescription?: string;
    /**
     * @remarks
     * The KVCache instance IDs. Separate multiple instance IDs with commas (,).
     *
     * @example
     * pkv-123456,pkv-789012
     */
    KVCacheInstanceIds?: string;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries to return on each page.
     *
     * @example
     * 20
     */
    pageSize?: number;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The instance ID of the associated PolarDB instance.
     *
     * @example
     * pc-123456
     */
    relativeDBClusterId?: string;
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
