// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to immediately start execution scheduling.
   * 
   * - 0: No (default).
   * - 1: Yes.
   * 
   * >- If the value is 0, the SwitchTime parameter is required.
   * >- If the value is 1, the SwitchTime parameter does not take effect. The event start time is set to the current time, and the switchover time is automatically calculated based on the new start time. The event immediately enters execution scheduling (not an immediate switchover) and begins pre-switchover preparations. The switchover is performed after the preparations are complete. You can call the DescribeActiveOperationTasks operation and obtain the preparation time from the PrepareInterval response parameter.
   * 
   * @example
   * 0
   */
  immediateStart?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the region information of all clusters under the target account.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The planned switchover time to set. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * > 
   * > - The time cannot be later than the deadline.
   * > - You can call the DescribeActiveOperationTasks operation and obtain the deadline from the Deadline response parameter.
   * 
   * @example
   * 2023-04-25T06:00:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The list of task IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 11111,22222
   */
  taskIds?: string;
  static names(): { [key: string]: string } {
    return {
      immediateStart: 'ImmediateStart',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      switchTime: 'SwitchTime',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      immediateStart: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      switchTime: 'string',
      taskIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

