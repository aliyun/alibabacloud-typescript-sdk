// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTaskInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The action-related parameters. You can add action-related parameters based on your business requirements. If you set the TaskAction parameter to modifySwitchTime, you must set this parameter to `{"recoverMode": "xxx", "recoverTime": "xxx"}`.
   * 
   * The recoverMode field specifies the task restoration mode. valid values:
   * 
   * *   **timePoint**: The task is executed at a specified point in time.
   * *   **Immediate**: The task is executed immediately.
   * *   **maintainTime**: The task is executed based on the O\\&M time.
   * 
   * The recoverTime field specifies restoration time. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. If you set the recoverMode field to timePoint, you must also specify the recoverTime field.
   * 
   * @example
   * {\\"recoverTime\\":\\"2023-04-12T18:30:00Z\\",\\"recoverMode\\":\\"timePoint\\"}
   */
  actionParams?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: number;
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
   * The task action. Set the value to modifySwitchTime. The value specifies that you want to change the switching time or restoration time.
   * 
   * @example
   * ImportImage
   */
  taskAction?: string;
  /**
   * @remarks
   * The task ID. You can call the DescribeTasks operation to query task IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * t-83br18hloum8u3948s
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
      resourceOwnerAccount: 'number',
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

