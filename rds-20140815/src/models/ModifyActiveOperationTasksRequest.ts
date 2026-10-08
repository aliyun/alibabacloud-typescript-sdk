// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The O&M task IDs. Separate multiple IDs with commas (,).
   * > You can call DescribeActiveOperationTasks to obtain O&M task IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 11111,22222
   */
  ids?: string;
  /**
   * @remarks
   * Specifies whether to immediately start the execution scheduling.
   * - 0: No. This is the default value.
   * - 1: Yes.
   * > - If the value is 0, the SwitchTime parameter takes effect. If the value is 1, the SwitchTime parameter does not take effect. The task start time is set to the current time, and the switchover time is automatically calculated based on the new start time.
   * > - Immediately starting the execution scheduling does not mean an immediate switchover. Instead, the task immediately enters the Preparing state. After the preparation is complete, the switchover is performed. You can call DescribeActiveOperationTasks and check the value of the PrepareInterval response parameter to obtain the preparation time.
   * 
   * @example
   * 0
   */
  immediateStart?: number;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The scheduled switchover time to set. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * > The time cannot be later than the latest operation time. You can call DescribeActiveOperationTasks and check the value of the Deadline response parameter to obtain the latest operation time.
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
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      immediateStart: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
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

