// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the O&M events. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 1111721,1111718
   */
  ids?: string;
  /**
   * @remarks
   * Specifies whether to immediately enter execution scheduling.
   * 
   * - 0: no (default)
   * - 1: yes
   * 
   * > 
   * > If the value is 0, SwitchTime takes effect. If the value is 1, SwitchTime does not take effect, the event start time is set to the current time, and the switchover time is automatically calculated based on the new start time.
   * The event immediately enters execution scheduling but is not immediately switched over. Preparations for the switchover are performed, and the switchover is executed after the preparations are completed. You can call the DescribeActiveOperationTasks operation to obtain the preparation time from the value of the PrepareInterval response parameter.
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
   * The scheduled switchover time to set. The time must be in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * > 
   * > The time cannot be later than the deadline.
   * You can call the DescribeActiveOperationTasks operation to obtain the deadline from the value of the Deadline response parameter.
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

