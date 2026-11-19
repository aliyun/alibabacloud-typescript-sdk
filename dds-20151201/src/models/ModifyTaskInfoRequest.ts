// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTaskInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters related to the action. These parameters can be extended based on business requirements. Different values must be passed for different taskAction names.
   * 
   * > When TaskAction is set to modifySwitchTime, this parameter is required. It must be a JSON string that contains the recoverMode key. Valid values for recoverMode: immediate, maintainTime, and timePoint.
   * 
   * @example
   * {\\"recoverMode\\":\\"immediate\\"}
   */
  actionParams?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the region ID.
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
   * The name of the step visible to the current user.
   * 
   * This parameter is required.
   * 
   * @example
   * exec_task
   */
  stepName?: string;
  /**
   * @remarks
   * The name of the operation. The value is the action name corresponding to the status in the actionInfo obtained from the [DescribeHistoryTasks](https://help.aliyun.com/document_detail/2639186.html) operation.
   * 
   * > Valid values: retry, cancel, and modifySwitchTime.
   * 
   * This parameter is required.
   * 
   * @example
   * modifySwitchTime
   */
  taskAction?: string;
  /**
   * @remarks
   * The task ID. Separate multiple IDs with commas (,). You can specify up to 10 IDs.
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

