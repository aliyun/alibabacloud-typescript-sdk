// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the O&M tasks. Separate multiple IDs with commas (,).
   * 
   * > You can call the DescribeActiveOperationTasks operation to retrieve the O&M task IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 11111,22222
   */
  ids?: string;
  /**
   * @remarks
   * Specifies whether to immediately enter the execution scheduling phase. Valid values:
   * - 0: No. This is the default value.
   * - 1: Yes.
   * > - If this parameter is set to 0, SwitchTime takes effect. If this parameter is set to 1, SwitchTime does not take effect, the task start time is set to the current time, and the switchover time is automatically calculated based on the new start time.
   * > - Immediately entering the execution scheduling phase does not mean an immediate switchover. Instead, the task immediately enters the preparing state, and the switchover is performed after the preparation is complete. You can call the DescribeActiveOperationTasks operation and check the value of the PrepareInterval response parameter to obtain the preparation time.
   * 
   * @example
   * 0
   */
  immediateStart?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The scheduled switchover time to be set. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > The time cannot be later than the latest operation time. You can call the DescribeActiveOperationTasks operation and check the value of the Deadline response parameter to obtain the latest operation time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-10-17T18:50:00Z
   */
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      immediateStart: 'ImmediateStart',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      immediateStart: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

