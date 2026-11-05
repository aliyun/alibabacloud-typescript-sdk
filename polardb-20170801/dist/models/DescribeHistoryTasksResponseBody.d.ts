import * as $dara from '@darabonba/typescript';
export declare class DescribeHistoryTasksResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The allowed operation information.
     *
     * > This feature is not supported.
     *
     * @example
     * {}
     */
    actionInfo?: string;
    /**
     * @remarks
     * The request source. Valid values:
     * * **System**: system.
     * * **User**: user.
     *
     * @example
     * User
     */
    callerSource?: string;
    /**
     * @remarks
     * The ID of the requesting user. When CallerSource is set to User, this value represents the user UID.
     *
     * @example
     * 1816563541899***
     */
    callerUid?: string;
    /**
     * @remarks
     * The name of the current step being executed. An empty value indicates that the task has not started.
     *
     * @example
     * finish_task
     */
    currentStepName?: string;
    /**
     * @remarks
     * The database type.
     *
     * @example
     * polardb_mysql
     */
    dbType?: string;
    /**
     * @remarks
     * The task end time.
     *
     * The time is in the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time is displayed in UTC.
     *
     * @example
     * 2025-03-03T07:30:57Z
     */
    endTime?: string;
    /**
     * @remarks
     * The resource ID.
     *
     * @example
     * pc-2zed3m89cw***
     */
    instanceId?: string;
    /**
     * @remarks
     * The resource name.
     *
     * @example
     * pc-2zed3m89cw***
     */
    instanceName?: string;
    /**
     * @remarks
     * The resource type.
     *
     * @example
     * Instance
     */
    instanceType?: string;
    /**
     * @remarks
     * The product.
     *
     * @example
     * polardb
     */
    product?: string;
    /**
     * @remarks
     * The current progress.
     *
     * @example
     * 100.0
     */
    progress?: number;
    /**
     * @remarks
     * The reason why the current task was initiated.
     *
     * @example
     * ""
     */
    reasonCode?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The estimated remaining execution duration. Unit: seconds.
     *
     * > This value is for reference only. The actual execution duration may vary.
     *
     * @example
     * 0
     */
    remainTime?: number;
    /**
     * @remarks
     * The task start time.
     *
     * The time is in the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time is displayed in UTC.
     *
     * @example
     * 2025-03-03T07:25:16Z
     */
    startTime?: string;
    /**
     * @remarks
     * The task status.
     *
     * * Scheduled: Waiting for execution.
     * * Running: Running.
     * * Succeed: Succeeded.
     * * Failed: Failed.
     * * Cancelling: Being canceled.
     * * Canceled: Canceled.
     * * Waiting: Waiting for the scheduled time.
     *
     * @example
     * Succeed
     */
    status?: string;
    /**
     * @remarks
     * The task details.
     *
     * @example
     * {\\"steps\\":[{\\"step_name\\":\\"init_task\\"},{\\"step_name\\":\\"exec_task\\"},{\\"step_name\\":\\"finish_task\\"}]}
     */
    taskDetail?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * t-0mqt8qhnw04ipz0***
     */
    taskId?: string;
    /**
     * @remarks
     * The task type.
     *
     * @example
     * ChangeVariable
     */
    taskType?: string;
    /**
     * @remarks
     * The ID of the user to whom the resource belongs.
     *
     * @example
     * 1816563541899***
     */
    uid?: string;
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
export declare class DescribeHistoryTasksResponseBody extends $dara.Model {
    /**
     * @remarks
     * The task list.
     */
    items?: DescribeHistoryTasksResponseBodyItems[];
    /**
     * @remarks
     * The page number of the query results.
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
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * F90D7C14-2D1C-5B88-9CD1-23AB2CF89***
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of tasks that meet the filter conditions, regardless of pagination.
     *
     * @example
     * 2
     */
    totalCount?: string;
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
