// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDTCSecurityIpHostsForSQLServerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  securityIpHosts?: string;
  securityToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  whiteListGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityIpHosts: 'SecurityIpHosts',
      securityToken: 'SecurityToken',
      whiteListGroupName: 'WhiteListGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityIpHosts: 'string',
      securityToken: 'string',
      whiteListGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

