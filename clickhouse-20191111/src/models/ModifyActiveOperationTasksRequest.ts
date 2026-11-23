// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the O&M tasks. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 188****,188****,188****
   */
  ids?: string;
  /**
   * @remarks
   * Specifies whether to immediately execute the O&M tasks. Valid values:
   * 
   * - **1**: Executes the tasks immediately.
   * - **0**: Executes the tasks at the specified time.
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
   * The time when the backend initiates the switchover operation. The time is in UTC and follows the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-09T05:00:00Z
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

