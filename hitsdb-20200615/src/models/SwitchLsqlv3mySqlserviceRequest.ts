// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchLSQLV3MySQLServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the operation. Valid value:
   * 
   * *   1: enables the MySQL compatibility feature.
   * *   0: disables the MySQL compatibility feature.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  actionType?: number;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp1o3y0yme2i2****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

