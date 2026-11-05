import * as $dara from '@darabonba/typescript';
export declare class DescribeAvailableMetricsResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The description of the enhanced monitoring metric.
     *
     * @example
     * sys CPU usage, sys CPU used / total CPU
     */
    description?: string;
    /**
     * @remarks
     * The category of the enhanced monitoring metric. Valid values:
     * - **os**: operating system metrics
     * - **db**: database metrics
     *
     * @example
     * os
     */
    dimension?: string;
    /**
     * @remarks
     * The key of the group to which the enhanced monitoring metric belongs.
     *
     * @example
     * os.cpu_usage
     */
    groupKey?: string;
    /**
     * @remarks
     * The name of the group to which the enhanced monitoring metric belongs.
     *
     * @example
     * CPU usage
     */
    groupKeyType?: string;
    /**
     * @remarks
     * The statistical method of the enhanced monitoring metric. Valid values:
     * - **avg**: average value
     * - **min**: minimum value
     * - **max**: maximum value
     *
     * @example
     * avg
     */
    method?: string;
    /**
     * @remarks
     * The key of the enhanced monitoring metric.
     *
     * @example
     * os.cpu_usage.sys.avg
     */
    metricsKey?: string;
    /**
     * @remarks
     * The alias of the enhanced monitoring metric.
     *
     * @example
     * cpu_sys_per_core
     */
    metricsKeyAlias?: string;
    /**
     * @remarks
     * The sequence number of the enhanced monitoring metric.
     *
     * @example
     * 1
     */
    sortRule?: number;
    /**
     * @remarks
     * The unit of the enhanced monitoring metric.
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
export declare class DescribeAvailableMetricsResponseBody extends $dara.Model {
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
     * The list of enhanced monitoring metrics.
     */
    items?: DescribeAvailableMetricsResponseBodyItems[];
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 5CD61041-35F7-10F7-BE94-33A48B221218
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of enhanced monitoring metrics supported by the instance.
     *
     * @example
     * 4
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
