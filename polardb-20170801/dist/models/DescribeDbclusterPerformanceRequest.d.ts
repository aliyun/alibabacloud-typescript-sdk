import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClusterPerformanceRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the PolarDB cluster. Before you query performance data, the cluster must be in the Running state. You can call the DescribeDBClusters operation and check the DBClusterStatus parameter to confirm the cluster status.
     *
     * This parameter is required.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The end time of the query. Specify the time in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.
     *
     * This parameter is required.
     *
     * @example
     * 2020-09-23T01:00Z
     */
    endTime?: string;
    /**
     * @remarks
     * The data granularity of the performance data. Valid values:
     *
     * - 5
     * - 30
     * - 60
     * - 600
     * - 1800
     * - 3600
     * - 86400
     *
     * @example
     * 60
     */
    interval?: string;
    /**
     * @remarks
     * The performance metrics to query. Separate multiple values with commas (,). For more information, see [Performance metrics](https://help.aliyun.com/document_detail/141787.html).
     *
     * > You can specify up to 5 performance metrics.
     *
     * This parameter is required.
     *
     * @example
     * PolarDBDiskUsage
     */
    key?: string;
    /**
     * @remarks
     * The start time of the query. Specify the time in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.
     *
     * This parameter is required.
     *
     * @example
     * 2020-09-23T01:01Z
     */
    startTime?: string;
    /**
     * @remarks
     * The name of the subgroup for the performance metrics. Specify this parameter only when the queried metrics contain a subgroup.
     *
     * @example
     * example-name
     */
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
