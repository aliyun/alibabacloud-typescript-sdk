import * as $dara from '@darabonba/typescript';
export declare class DescribeActiveOperationTaskResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The time when the task was created. The time follows the `yyyy-MM-ddTHH:mmZ` format (UTC).
     *
     * @example
     * 2020-06-09T22:00:42Z
     */
    createdTime?: string;
    /**
     * @remarks
     * The database engine type.
     *
     * @example
     * polardb_mysql
     */
    dbType?: string;
    /**
     * @remarks
     * The database engine version.
     *
     * @example
     * 8.0
     */
    dbVersion?: string;
    /**
     * @remarks
     * The deadline for adjusting the task execution time. The time follows the `yyyy-MM-ddTHH:mmZ` format (UTC).
     *
     * @example
     * 2020-06-11T15:59:59Z
     */
    deadline?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 111111
     */
    id?: number;
    /**
     * @remarks
     * The cluster name.
     *
     * @example
     * pc-*****************
     */
    insName?: string;
    /**
     * @remarks
     * The time when the task was modified. The time follows the `yyyy-MM-ddTHH:mmZ` format (UTC).
     *
     * @example
     * 2020-06-09T22:00:42Z
     */
    modifiedTime?: string;
    /**
     * @remarks
     * The preparation time before the transient disconnection. The time follows the `HH:mm:ss` format.
     *
     * @example
     * 04:00:00
     */
    prepareInterval?: string;
    /**
     * @remarks
     * The region where the task is located.
     *
     * @example
     * cn-hangzhou
     */
    region?: string;
    /**
     * @remarks
     * The task execution result.
     *
     * @example
     * 1
     */
    resultInfo?: string;
    /**
     * @remarks
     * The time when the task is executed in the background. The time follows the `yyyy-MM-ddTHH:mmZ` format (UTC).
     *
     * @example
     * 2020-06-09T18:00:00Z
     */
    startTime?: string;
    /**
     * @remarks
     * The task status.
     * * If you set IsHistory to **0**, the details of the pending task status are returned. Valid values:
     *
     *     * **2**: waiting for the user to set the task start time
     *     * **3**: waiting to be processed
     *     * **4**: the task is being processed
     *
     * * If you set IsHistory to **1**, the details of the historical task status are returned. Valid values:
     *      * **5**: the task is completed and executed successfully
     *      * **6**: the task is completed but failed
     *      * **7**: the task is canceled
     *
     * @example
     * 5
     */
    status?: number;
    /**
     * @remarks
     * The time when the transient disconnection occurs. The time follows the `yyyy-MM-ddTHH:mmZ` format (UTC).
     *
     * @example
     * 2020-06-09T22:00:00Z
     */
    switchTime?: string;
    /**
     * @remarks
     * The task parameters.
     *
     * @example
     * {\\"action\\": \\"UpgradeDBVersion\\", \\"check_method\\": \\"check_cpu_usage\\", \\"params\\": {\\"RelativeDbtype\\": \\"maxscale\\", \\"DBInstanceName\\": \\"pc-*************\\", \\"User_ID\\": \\"11111\\", \\"UID\\": \\"1406926474******\\", \\"UpgradePolicy\\": \\"hot\\"}}"
     */
    taskParams?: string;
    /**
     * @remarks
     * The task type.
     *
     * @example
     * rds_apsaradb_upgrade
     */
    taskType?: string;
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
export declare class DescribeActiveOperationTaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of tasks.
     */
    items?: DescribeActiveOperationTaskResponseBodyItems[];
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
     * The number of entries per page.
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
     * ED2BD080-F9D9-4822-ACBB-AE5D87******
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
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
