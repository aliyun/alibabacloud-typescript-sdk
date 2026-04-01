// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantOperatorPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The expiration time of the permissions. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-27T16:00:00Z
   */
  expiredTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The permissions that you want to grant to the service account. Valid values:
   * 
   * *   **Control**: the configuration permissions, which allow you to view and modify configurations of the instance.
   * *   **Data**: the data permissions, which allow you to view schemas, indexes, and SQL statements of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * Control
   */
  privileges?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      expiredTime: 'ExpiredTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      privileges: 'Privileges',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      expiredTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      privileges: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

