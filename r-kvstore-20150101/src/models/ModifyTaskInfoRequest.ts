// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTaskInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON-formatted parameters related to the action. Set this parameter to `{"recoverMode": "xxx", "recoverTime": "xxx"}` if the **TaskAction** parameter is set to **modifySwitchTime**.
   * 
   * *   **recoverMode**: specifies the restoration mode for the task. Valid values:
   * 
   *     *   **timePoint**: performs the task at the specified point in time.
   *     *   **immediate**: performs the task immediately.
   *     *   **maintainTime**: performs the task within the maintenance window.
   * 
   * *   **recoverTime**: specifies the point in time for restoration. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. This parameter is required if the **recoverMode** parameter is set to **timePoint**.
   * 
   * @example
   * {\\"recoverMode\\":\\"immediate\\"}
   */
  actionParams?: string;
  /**
   * @remarks
   * The ID of the region where the instance is deployed.
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
   * The name of the current step.
   * 
   * @example
   * exec_task
   */
  stepName?: string;
  /**
   * @remarks
   * The action name. Set the value to **modifySwitchTime**. The value specifies that you want to change the switching time or restoration time.
   * 
   * @example
   * modifySwitchTime
   */
  taskAction?: string;
  /**
   * @remarks
   * The task ID. Separate multiple task IDs with commas (,). You can specify up to 30 task IDs.
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

