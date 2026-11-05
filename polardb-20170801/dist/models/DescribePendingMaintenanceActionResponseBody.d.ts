import * as $dara from '@darabonba/typescript';
export declare class DescribePendingMaintenanceActionResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The time when the task was created. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
     *
     * @example
     * 2020-06-09T22:00:42Z
     */
    createdTime?: string;
    /**
     * @remarks
     * The ID of the cluster.
     *
     * @example
     * pc-************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The type of the database engine. Valid values:
     *
     * - **MySQL**
     *
     * - **PostgreSQL**
     *
     * - **Oracle**
     *
     * @example
     * MySQL
     */
    DBType?: string;
    /**
     * @remarks
     * The version of the database engine.
     *
     * - Valid values for the MySQL database engine:
     *
     *   - **5.6**
     *
     *   - **5.7**
     *
     *   - **8.0**
     *
     * - Valid values for the PostgreSQL database engine:
     *
     *   - **11**
     *
     *   - **14**
     *
     * - Valid value for the Oracle database engine: **11**
     *
     * @example
     * 8.0
     */
    DBVersion?: string;
    /**
     * @remarks
     * The deadline before which the task can be executed. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
     *
     * @example
     * 2020-06-11T15:59:59Z
     */
    deadline?: string;
    /**
     * @remarks
     * The ID of the task.
     *
     * @example
     * 111111
     */
    id?: number;
    /**
     * @remarks
     * The time when the parameter was modified. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
     *
     * @example
     * 2020-06-09T22:00:42Z
     */
    modifiedTime?: string;
    /**
     * @remarks
     * The preparation time that is required before the pending event is switched. The time follows the `HH:mm:ss` format.
     *
     * @example
     * 04:00:00
     */
    prepareInterval?: string;
    /**
     * @remarks
     * The region ID of the pending event.
     *
     * @example
     * cn-hangzhou
     */
    region?: string;
    /**
     * @remarks
     * The execution result of the task. Valid values:
     *
     * - **manualCancel**: The task is manually canceled.
     *
     * - **paramCheckNotPass**: The task fails to pass the parameter check.
     *
     * > This parameter is returned only when the value of the `Status` parameter is **6** or **7**. The value 6 indicates that the task is completed but fails to be executed. The value 7 indicates that the task is canceled.
     *
     * @example
     * manualCancel
     */
    resultInfo?: string;
    /**
     * @remarks
     * The time when the task was executed in the background. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
     *
     * @example
     * 2020-06-09T18:00:00Z
     */
    startTime?: string;
    /**
     * @remarks
     * The status of the pending task.
     *
     * - If you set the `IsHistory` parameter to **0**, the status of the pending task is returned. Valid values:
     *
     *   - **2**: The start time of the task is to be specified.
     *
     *   - **3**: The task is pending.
     *
     *   - **4**: The task is running. In this case, you cannot modify the execution time.
     *
     * - If you set the `IsHistory` parameter to **1**, the details of the historical tasks are returned. Valid values:
     *
     *   - **5**: The task is completed and executed.
     *
     *   - **6**: The task is completed but fails to be executed.
     *
     *   - **7**: The task is canceled.
     *
     * @example
     * 3
     */
    status?: number;
    /**
     * @remarks
     * The time when the pending event was switched. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
     *
     * @example
     * 2020-06-09T22:00:00Z
     */
    switchTime?: string;
    /**
     * @remarks
     * The type of the pending event.
     *
     * @example
     * DatabaseSoftwareUpgrading
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
export declare class DescribePendingMaintenanceActionResponseBody extends $dara.Model {
    /**
     * @remarks
     * Details about tasks.
     */
    items?: DescribePendingMaintenanceActionResponseBodyItems[];
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
     * The ID of the request.
     *
     * @example
     * 2F029645-FED9-4FE8-A6D3-488954******
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of returned entries.
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
