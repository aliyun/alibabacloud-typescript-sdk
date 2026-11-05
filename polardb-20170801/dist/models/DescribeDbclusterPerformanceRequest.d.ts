import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClusterPerformanceRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The end of the time range to query. Specify the time in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.
     *
     * This parameter is required.
     *
     * @example
     * 2020-09-23T01:00Z
     */
    endTime?: string;
    /**
     * @remarks
     * The granularity of the performance data. Valid values:
     *
     * - 5
     *
     * - 30
     *
     * - 60
     *
     * - 600
     *
     * - 1800
     *
     * - 3600
     *
     * - 86400
     *
     * @example
     * 60
     */
    interval?: string;
    /**
     * @remarks
     * The performance metrics that you want to query. Separate multiple metrics with commas (,). For more information, see [Performance parameters](https://help.aliyun.com/document_detail/141787.html).
     *
     * > Specify up to five performance metrics.
     *
     * This parameter is required.
     *
     * @example
     * PolarDBDiskUsage
     */
    key?: string;
    /**
     * @remarks
     * The beginning of the time range to query. Specify the time in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.
     *
     * This parameter is required.
     *
     * @example
     * 2020-09-23T01:01Z
     */
    startTime?: string;
    subGroupName?: string;
    /**
     * @remarks
     * The query type.
     *
     * @example
     * orca
     */
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
