import * as $dara from '@darabonba/typescript';
export declare class DescribeRCSnapshotsRequestTag extends $dara.Model {
    /**
     * @remarks
     * The tag key.
     *
     * @example
     * testRC
     */
    key?: string;
    /**
     * @remarks
     * The tag value.
     *
     * @example
     * test01
     */
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
export declare class DescribeRCSnapshotsRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the cloud disk.
     *
     * @example
     * rcd-wz9c8isqly8637zw****
     */
    diskId?: string;
    /**
     * @remarks
     * The ID of the RDS Custom instance.
     *
     * @example
     * rc-dh2jf9n6j4s14926****
     */
    instanceId?: string;
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
     * The number of entries per page. Valid values: **30** to **100**. Default value: **30**.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The region ID. You can call the DescribeRegions operation to query the region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The snapshot IDs. You can specify up to 100 IDs. Separate multiple IDs with commas (,).
     *
     * @example
     * ["rcds-bp67acfmxazb4p****", "rcds-bp67acfmxazb5p****", … "rcds-bp67acfmxazb6p****"]
     */
    snapshotIds?: string;
    /**
     * @remarks
     * The tag details.
     */
    tag?: DescribeRCSnapshotsRequestTag[];
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
