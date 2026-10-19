// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The O&M event IDs. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 1111721,1111718
   */
  ids?: string;
  /**
   * @remarks
   * Specifies whether to immediately start execution scheduling.
   * 
   * - 0: No. (Default)
   * - 1: Yes.
   * 
   * > 
   * > If the value is 0, SwitchTime takes effect. If the value is 1, SwitchTime does not take effect. The event start time is set to the current time, and the switchover time is automatically calculated based on the new start time.
   * The event immediately enters execution scheduling (not an immediate switchover). Pre-switchover preparations begin, and the switchover is performed after the preparations are complete. Call DescribeActiveOperationTasks and check the value of the PrepareInterval response parameter to obtain the preparation time.
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
   * The planned switchover time to set. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * > 
   * >  The time cannot be later than the deadline. Call DescribeActiveOperationTasks and check the value of the Deadline response parameter to obtain the deadline.
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

