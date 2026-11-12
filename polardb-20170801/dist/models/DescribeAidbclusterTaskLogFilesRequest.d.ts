import * as $dara from '@darabonba/typescript';
export declare class DescribeAIDBClusterTaskLogFilesRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID of the model operator.
     *
     * This parameter is required.
     *
     * @example
     * pm-bp10gr***
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The end time of the query. Specify the time in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
     *
     * This parameter is required.
     *
     * @example
     * 2026-01-15T15:00:00Z
     */
    endTime?: string;
    /**
     * @remarks
     * The log type. Valid values:
     *
     * - **sls**
     *
     * This parameter is required.
     *
     * @example
     * sls
     */
    logType?: string;
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
     * The number of entries per page. Valid values: **30**, **50**, and **100**. Default value: **100**.
     *
     * @example
     * 100
     */
    pageSize?: number;
    /**
     * @remarks
     * The instance ID of the associated PolarDB instance.
     *
     * @example
     * pc-bp10ze***
     */
    relativeDBClusterId?: string;
    /**
     * @remarks
     * Specifies whether to sort the results in descending order. Default value: *false*.
     *
     * @example
     * false
     */
    reverse?: boolean;
    /**
     * @remarks
     * The start time of the query. Specify the time in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
     *
     * This parameter is required.
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
