// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTaskInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters related to the action, in JSON format.
   * If **TaskAction** is set to **modifySwitchTime**, the ActionParams value is `{"recoverMode": "xxx", "recoverTime": "xxx"}`.
   * * **recoverMode** specifies the task recovery mode. Valid values:
   *   * **imePoint**: Execute at a specified point in time.
   *   * **immediate**: Execute immediately.
   *   * **maintainTime**: Execute during the O&M window.
   * 
   * * **recoverTime** specifies the point in time, in UTC+0, in the yyyy-MM-ddTHH:mm:ssZ format. This parameter is required when **recoverMode** is set to **timePoint**.
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
   * The name of the current execution step. You can call [DescribeHistoryTasks](https://help.aliyun.com/document_detail/2400077.html) to query the current execution step of a specified node ID. A common value is **do_pause**, which indicates waiting for the preset time to execute.
   * 
   * @example
   * do_pause
   */
  stepName?: string;
  /**
   * @remarks
   * The operation name. Currently, the valid value is **modifySwitchTime**, which indicates modifying the switchover time or recovery time.
   * 
   * @example
   * modifySwitchTime
   */
  taskAction?: string;
  /**
   * @remarks
   * The node ID. To specify multiple IDs, separate them with commas (,). You can specify up to 30 IDs.
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

