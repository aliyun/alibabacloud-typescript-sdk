import * as $dara from '@darabonba/typescript';
export declare class DescribeHALogsResponseBodyHaLogItems extends $dara.Model {
    /**
     * @remarks
     * The switchover cause code.
     *
     * @example
     * Platform.Ha.AuroraService.ManualOperations
     */
    switchCauseCode?: string;
    /**
     * @remarks
     * The switchover cause.
     *
     * @example
     * Platform.Ha.ManuallyTriggered
     */
    switchCauseDetail?: string;
    /**
     * @remarks
     * The end time of the switchover.
     *
     * The time is in ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2025-05-20T03:09:56Z
     */
    switchFinishTime?: string;
    /**
     * @remarks
     * The ID of the primary/secondary switchover log.
     *
     * @example
     * e571f897-9b3c-4012-9470-88333832dec4
     */
    switchId?: string;
    /**
     * @remarks
     * The start time of the switchover.
     *
     * The time is in ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2025-05-20T03:09:45Z
     */
    switchStartTime?: string;
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
export declare class DescribeHALogsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * pc-a*************
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The instance type. Valid values:
     * - **polardb_mysql_rw**: read/write instance.
     * - **polardb_mysql_ro**: read-only instance.
     * - **polardb_mysql_standby**: standby instance.
     *
     * @example
     * polardb_mysql_rw
     */
    DBInstanceType?: string;
    /**
     * @remarks
     * The list of primary/secondary switchover logs.
     */
    haLogItems?: DescribeHALogsResponseBodyHaLogItems[];
    /**
     * @remarks
     * Indicates whether primary/secondary switchover records exist. Valid values:
     * - **1**: No records exist.
     * - **0**: Records exist.
     *
     * @example
     * 1
     */
    haStatus?: number;
    /**
     * @remarks
     * The number of items in the log list on the current page.
     *
     * @example
     * 10
     */
    itemsNumbers?: number;
    /**
     * @remarks
     * The page number. The value is a positive integer that does not exceed the maximum value of the Integer data type. Default value: 1.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values: 30 to 100. Default value: 30.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of records.
     *
     * @example
     * 160
     */
    totalRecords?: number;
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
