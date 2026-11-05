import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstanceMetricsResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The description of the enhanced metric.
     *
     * @example
     * sys CPU usage, sys CPU usage / total CPU capacity
     */
    description?: string;
    /**
     * @remarks
     * The category of the enhanced metric. Valid values:
     * - **os**: operating system metrics.
     * - **db**: database metrics.
     *
     * @example
     * os
     */
    dimension?: string;
    /**
     * @remarks
     * The key of the group to which the enhanced metric belongs.
     *
     * @example
     * os.cpu_usage
     */
    groupKey?: string;
    /**
     * @remarks
     * The name of the group to which the enhanced metric belongs.
     *
     * @example
     * CPU usage
     */
    groupKeyType?: string;
    /**
     * @remarks
     * The statistical method for the enhanced metric. Valid values:
     * - **avg**: average value.
     * - **min**: minimum value.
     * - **max**: maximum value.
     *
     * @example
     * avg
     */
    method?: string;
    /**
     * @remarks
     * The key of the enhanced metric.
     *
     * @example
     * os.cpu_usage.sys.avg
     */
    metricsKey?: string;
    /**
     * @remarks
     * The alias of the enhanced metric.
     *
     * @example
     * os.cpu_usage.sys
     */
    metricsKeyAlias?: string;
    /**
     * @remarks
     * The sequence number of the enhanced metric.
     *
     * @example
     * 1
     */
    sortRule?: number;
    /**
     * @remarks
     * The unit of the enhanced metric.
     *
     * @example
     * %
     */
    unit?: string;
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
export declare class DescribeDBInstanceMetricsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-bp1****
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The list of enhanced metrics that are enabled for the instance.
     */
    items?: DescribeDBInstanceMetricsResponseBodyItems[];
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 318C3754-F6D0-54BB-A55C-23EAA04708B7
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of enhanced metrics that are enabled for the instance.
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
