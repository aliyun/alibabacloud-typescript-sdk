// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantOperatorPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1565u55p32****
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
   * *   **Control**: configuration permissions. The service account is granted permissions to query and modify cluster configurations.
   * *   **Data**: data permissions. The service account is granted permissions to query schemas, indexes, and SQL statements.
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

