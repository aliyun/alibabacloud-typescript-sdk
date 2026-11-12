import * as $dara from '@darabonba/typescript';
export declare class DescribeAIDBClusterTaskMetricsResponseBodyItemsSlsMetricsItems extends $dara.Model {
    /**
     * @remarks
     * The current step.
     *
     * @example
     * 21
     */
    currentStep?: number;
    /**
     * @remarks
     * The epoch.
     *
     * @example
     * 0.23
     */
    epoch?: number;
    /**
     * @remarks
     * The global step.
     *
     * @example
     * 90
     */
    globalStep?: number;
    /**
     * @remarks
     * The log time.
     *
     * The time is in the ISO 8601 format and the UTC time zone. The seconds part can include a fractional component.
     *
     * @example
     * 2026-01-15T14:16:49.52140317Z
     */
    logTime?: string;
    /**
     * @remarks
     * The metric details.
     *
     * @example
     * {"memory(GiB)":"xxx"}
     */
    metric?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * The metric type.
     *
     * @example
     * train
     */
    metricType?: string;
    /**
     * @remarks
     * The specific time point of the monitoring metrics. The format is a UNIX timestamp in seconds.
     *
     * @example
     * 1742090703
     */
    timestamp?: string;
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
export declare class DescribeAIDBClusterTaskMetricsResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The list of metrics.
     *
     * @example
     * []
     */
    slsMetricsItems?: DescribeAIDBClusterTaskMetricsResponseBodyItemsSlsMetricsItems[];
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
export declare class DescribeAIDBClusterTaskMetricsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pm-2zejpr***
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The end time of the query. Format: `yyyy-MM-ddTHH:mm:ssZ` (UTC time).
     *
     * @example
     * 2026-01-15T15:00:00Z
     */
    endTime?: string;
    /**
     * @remarks
     * The list.
     *
     * @example
     * {}
     */
    items?: DescribeAIDBClusterTaskMetricsResponseBodyItems;
    /**
     * @remarks
     * The metric type.
     *
     * @example
     * all
     */
    metricType?: string;
    /**
     * @remarks
     * The page number of the returned page. Default value: 1.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The total number of entries that meet the query conditions. This parameter is optional and is not returned by default.
     *
     * @example
     * 5
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The maximum number of entries returned for the current request.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The ID of the associated PolarDB cluster.
     *
     * @example
     * pc-2zejpr***
     */
    relativeDbClusterId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 5E71541A-6007-4DCC-A38A-F872C31FEB45
     */
    requestId?: string;
    /**
     * @remarks
     * The start time of the query. Format: `yyyy-MM-ddTHH:mm:ssZ` (UTC time).
     *
     * @example
     * 2026-01-15T14:00:00Z
     */
    startTime?: string;
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
