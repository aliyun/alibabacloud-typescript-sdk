// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTaskInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters related to the action, in JSON format.
   * If **TaskAction** is set to **modifySwitchTime**, set this parameter to `{"recoverMode": "xxx", "recoverTime": "xxx"}`.
   * * **recoverMode**: the recovery mode of the task. Valid values:
   *   * **imePoint**: executes the task at a specified point in time.
   *   * **immediate**: executes the task immediately.
   *   * **maintainTime**: executes the task during the O&M window.
   * 
   * * **recoverTime**: the specified point in time. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. This parameter is required when **recoverMode** is set to **timePoint**.
   * 
   * @example
   * {"recoverMode":"immediate"}
   */
  actionParams?: string;
  /**
   * @remarks
   * The region ID of the instance.
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
   * The name of the current execution step. You can call the [DescribeHistoryTasks](https://help.aliyun.com/document_detail/2400077.html) operation to query the current execution step of a specified task. A common value is **do_pause**, which indicates that the task is waiting to be executed at a preset time.
   * 
   * @example
   * do_pause
   */
  stepName?: string;
  /**
   * @remarks
   * The operation name. Valid value: **modifySwitchTime**, which indicates modifying the switchover time or recovery time.
   * 
   * @example
   * modifySwitchTime
   */
  taskAction?: string;
  /**
   * @remarks
   * The task ID. Separate multiple task IDs with commas (,). A maximum of 30 task IDs are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * t-0mq3kfhn8i1nlt****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      actionParams: 'ActionParams',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      stepName: 'StepName',
      taskAction: 'TaskAction',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionParams: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      stepName: 'string',
      taskAction: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

