// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTaskInfoRequest extends $dara.Model {
  /**
   * @remarks
   * A action-related parameter. This parameter can be extended based on your business requirements. This parameter value varies with the value of the TaskAction parameter.
   * 
   * @example
   * {\\"recoverMode\\":\\"immediate\\"}
   */
  actionParams?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the step visible to the user.
   * 
   * This parameter is required.
   * 
   * @example
   * exec_task
   */
  stepName?: string;
  /**
   * @remarks
   * The action name that corresponds to the state described in the actionInfo parameter of the [DescribeHistoryTasks](https://help.aliyun.com/document_detail/2639186.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * modifySwitchTime
   */
  taskAction?: string;
  /**
   * @remarks
   * The task ID. Separate multiple IDs with commas (,). You can specify up to 10 task IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * t-83br18hlpdrw3uxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      actionParams: 'ActionParams',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
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

