// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountMaskingPrivilegeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n8t18o******6d5
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * myDB
   */
  DBName?: string;
  /**
   * @remarks
   * The expiration time of the permission in UTC format. This parameter is required only for the fullAccess permission.
   * 
   * @example
   * 2026-01-22T02:01:20Z
   */
  expireTime?: string;
  ownerId?: string;
  /**
   * @remarks
   * The permission type. Valid values: noneAccess, restrictedAccess, and fullAccess.
   * 
   * This parameter is required.
   * 
   * @example
   * restrictedAccess
   */
  privilege?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * ap-southeast-1
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the account. You can specify multiple account names separated by commas.
   * 
   * This parameter is required.
   * 
   * @example
   * user1,user2
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      DBName: 'DBName',
      expireTime: 'ExpireTime',
      ownerId: 'OwnerId',
      privilege: 'Privilege',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      DBName: 'string',
      expireTime: 'string',
      ownerId: 'string',
      privilege: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

