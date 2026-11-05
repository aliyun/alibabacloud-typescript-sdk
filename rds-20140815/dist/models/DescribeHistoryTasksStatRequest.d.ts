import * as $dara from '@darabonba/typescript';
export declare class DescribeHistoryTasksStatRequest extends $dara.Model {
    /**
     * @remarks
     * The minimum execution duration of the task. This parameter is used to filter tasks whose execution duration is greater than the specified value. Unit: seconds. Default value: 0, which indicates that no limit is applied.
     *
     * @example
     * 0
     */
    fromExecTime?: number;
    /**
     * @remarks
     * The start time of the query. Specify the time in the <i>yyyy-mm-dd</i>T<i>hh:mm</i>Z format. The time must be in UTC.
     *
     * This parameter is required.
     *
     * @example
     * 2023-05-08T07:04:17Z
     */
    fromStartTime?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-2ze704f*****
     */
    instanceId?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID. You can call the DescribeRegions operation to obtain the region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-acfmy*****
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    securityToken?: string;
    /**
     * @remarks
     * The task status. Valid values:
     * - **Scheduled**: pending execution
     * - **Running**: running
     * - **Succeed**: succeeded
     * - **Failed**: failed
     * - **Cancelling**: being canceled
     * - **Canceled**: canceled
     * - **Waiting**: waiting for the scheduled time
     *
     * Separate multiple values with commas (,). If this parameter is left empty, all statuses are queried.
     *
     * @example
     * Scheduled
     */
    status?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 12221
     */
    taskId?: string;
    /**
     * @remarks
     * The task type.
     *
     * @example
     * all
     */
    taskType?: string;
    /**
     * @remarks
     * The maximum execution duration of the task. This parameter is used to filter tasks whose execution duration is not less than the specified value. Unit: seconds. Default value: 0, which indicates that no limit is applied.
     *
     * @example
     * 0
     */
    toExecTime?: number;
    /**
     * @remarks
     * The end time of the task start time range. This parameter specifies that only tasks started before this time are queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
     *
     * This parameter is required.
     *
     * @example
     * 2023-02-24T10:01:37Z
     */
    toStartTime?: string;
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
