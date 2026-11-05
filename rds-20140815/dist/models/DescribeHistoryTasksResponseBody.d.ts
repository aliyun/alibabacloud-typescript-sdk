import * as $dara from '@darabonba/typescript';
export declare class DescribeHistoryTasksResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The allowed operation information. In actual use, the operation action is matched in this information based on currentStepName and status. If no action is matched, the current status of the task does not support the operation. Example:
     * ```
     *   "steps": [
     *     {
     *       "step_name": "exec_task", // The step name, which matches currentStepName.
     *       "action_info": {    // The operations supported by the step.
     *         "Waiting": [      // The status, which matches status.
     *           "modifySwitchTime" // The operation action. Multiple actions indicate that multiple operations are supported.
     *         ]
     *       }
     *     },
     *     {
     *       "step_name": "init_task", // The step name.
     *       "action_info": {    // The operations supported by the step.
     *         "Running": [      // The status.
     *           "cancel",       // The operation.
     *           "pause"
     *         ]
     *       }
     *     }
     *   ]
     * }
     * ```
     *
     * Operations supported by the system:
     * - **retry**: Retry.
     * - **cancel**: Cancel.
     * - **modifySwitchTime**: Modify the switchover time or recovery time.
     *
     * @example
     * {\\"steps\\":[{\\"action_info\\":{\\"Waiting\\":[\\"modifySwitchTime\\"]},\\"step_name\\":\\"exec_task\\"}]}
     */
    actionInfo?: string;
    /**
     * @remarks
     * The ID of the requesting user. If callerSource is User, this parameter represents the user UID.
     *
     * @example
     * 141345906006****
     */
    callerSource?: string;
    /**
     * @remarks
     * The request source. Valid values:
     * - **System**: System.
     * - **User**: User.
     *
     * @example
     * User
     */
    callerUid?: string;
    /**
     * @remarks
     * The name of the current step. If this parameter is empty, the task has not started.
     *
     * @example
     * exec_task
     */
    currentStepName?: string;
    /**
     * @remarks
     * The database type.
     *
     * @example
     * mysql
     */
    dbType?: string;
    /**
     * @remarks
     * The end time of the task.
     *
     * @example
     * 2022-02-03T12:06:17Z
     */
    endTime?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-uf62br2491p5l****
     */
    instanceId?: string;
    /**
     * @remarks
     * The instance name.
     *
     * @example
     * test
     */
    instanceName?: string;
    /**
     * @remarks
     * The instance type.
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
     * rds
     */
    product?: string;
    /**
     * @remarks
     * The current progress.
     *
     * @example
     * 79.0
     */
    progress?: number;
    /**
     * @remarks
     * The cause of the current task.
     *
     * @example
     * ****
     */
    reasonCode?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-shanghai
     */
    regionId?: string;
    /**
     * @remarks
     * The estimated remaining execution time. Unit: seconds.
     *
     * @example
     * 1000
     */
    remainTime?: number;
    /**
     * @remarks
     * The start time of the task.
     *
     * @example
     * 2022-02-03T11:31:03Z
     */
    startTime?: string;
    /**
     * @remarks
     * The task status. Valid values:
     * - Scheduled: Pending execution.
     * - Running: Running.
     * - Succeed: Succeeded.
     * - Failed: Failed.
     * - Cancelling: Cancelling.
     * - Canceled: Canceled.
     * - Waiting: Waiting for the scheduled time.
     *
     * @example
     * Running
     */
    status?: string;
    /**
     * @remarks
     * The task details.
     *
     * @example
     * {\\"callerUid\\":\\"test\\"}
     */
    taskDetail?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * t-83br18hloy3faf****
     */
    taskId?: string;
    /**
     * @remarks
     * The task type.
     *
     * @example
     * autotest_dispatch_cases
     */
    taskType?: string;
    /**
     * @remarks
     * The ID of the user to which the resource belongs.
     *
     * @example
     * 141345906006****
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
     * The page number of the query result.
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
     * The unique request ID. If you encounter any issues, provide this request ID for troubleshooting.
     *
     * @example
     * 5CD61041-35F7-10F7-BE94-33A48B22****
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of tasks that meet the specified conditions, regardless of pagination.
     *
     * @example
     * 2
     */
    totalCount?: number;
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
