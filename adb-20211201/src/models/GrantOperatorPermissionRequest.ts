// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantOperatorPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1565u55p32****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The expiration time of the service account permissions. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-11-30T00:00:00Z
   */
  expiredTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the permissions. Valid values:
   * 
   * *   **Control**: the configuration permissions. The service account is granted the permissions to query and modify cluster configurations.
   * *   **Data**: the data permissions. The service account is granted the permissions to query schemas, indexes, and SQL statements.
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
      DBClusterId: 'DBClusterId',
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
      DBClusterId: 'string',
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

