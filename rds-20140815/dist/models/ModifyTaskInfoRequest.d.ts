import * as $dara from '@darabonba/typescript';
export declare class ModifyTaskInfoRequest extends $dara.Model {
    /**
     * @remarks
     * The parameters related to the action. You can add extensions based on your business requirements. When TaskAction is set to modifySwitchTime, set ActionParams to `{"recoverMode": "xxx", "recoverTime": "xxx"}`.
     *
     * recoverMode specifies the task recovery pattern. Valid values:
     * - **timePoint**: executes the task at a specified point in time.
     * - **immediate**: executes the task immediately.
     *
     * recoverTime specifies the recovery time in UTC. The format is yyyy-MM-ddTHH:mm:ssZ. When recoverMode is set to timePoint, recoverTime is required.
     *
     * @example
     * {"recoverTime":"2023-04-12T18:30:00Z","recoverMode":"timePoint"}
     */
    actionParams?: string;
    /**
     * @remarks
     * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/610399.html) operation to query available region IDs.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    securityToken?: string;
    /**
     * @remarks
     * The name of the execution step.
     *
     * @example
     * ha_switch
     */
    stepName?: string;
    /**
     * @remarks
     * The task action. Set the value to modifySwitchTime, which indicates modifying the switchover time or recovery time.
     *
     * @example
     * modifySwitchTime
     */
    taskAction?: string;
    /**
     * @remarks
     * The task ID. You can call the DescribeTasks operation to obtain the task ID.
     *
     * This parameter is required.
     *
     * @example
     * t-83br18hloum8u3948s
     */
    taskId?: string;
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
