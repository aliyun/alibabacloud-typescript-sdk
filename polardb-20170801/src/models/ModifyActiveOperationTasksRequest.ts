// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to immediately start scheduling. Valid values:
   * 
   * *   0: No. This is the default value.
   * *   1: Yes.
   * 
   * > 
   * 
   * *   If you set this parameter to 0, you must specify the SwitchTime parameter.
   * 
   * *   If you set this parameter to 1, the SwitchTime parameter does not take effect. In this case, the start time of the event is set to the current time, and the system determines the switching time based on the start time. Scheduling is started immediately, which is a prerequisite for the switchover. Then, the switchover is performed. You can call the DescribeActiveOperationTasks operation and check the return value of the PrepareInterval parameter for the preparation time.
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
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the region information about all clusters within a specified account.
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
   * The scheduled switching time that you want to specify. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > 
   * 
   * *   The time that is specified by this parameter cannot be later than the latest execution time.
   * 
   * *   You can call the DescribeActiveOperationTasks operation and check the return value of the Deadline parameter for the latest execution time.
   * 
   * @example
   * 2023-04-25T06:00:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The task IDs.
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

