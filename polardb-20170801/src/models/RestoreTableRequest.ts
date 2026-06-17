// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreTableRequest extends $dara.Model {
  /**
   * @remarks
   * The backup set ID.
   * 
   * > This parameter is required if you want to restore databases and tables from a backup set. Call the [DescribeBackups](https://help.aliyun.com/document_detail/98102.html) operation to query backup set IDs.
   * 
   * @example
   * 111111
   */
  backupId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters in your account.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp***************
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which you want to restore data. Specify the time in the YYYY-MM-DDThh:mmZ format. The time must be in Coordinated Universal Time (UTC).
   * 
   * > - This parameter is required if you want to restore data to a specific point in time.
   * >
   * > - Data can be restored to any point in time within the last seven days.
   * 
   * @example
   * 2020-10-04T01:40:00Z
   */
  restoreTime?: string;
  securityToken?: string;
  /**
   * @remarks
   * A JSON string that specifies the destination databases and tables to restore. All values in the JSON string must be strings.
   * For example: `[ { "tables":[ { "name":"testtb", "type":"table", "newname":"testtb_restore" } ], "name":"testdb", "type":"db", "newname":"testdb_restore" } ]`.
   * 
   * > Call the [DescribeMetaList](https://help.aliyun.com/document_detail/194770.html) operation to query the names of the databases and tables that can be restored. Then, enter the information into the example format.
   * 
   * This parameter is required.
   * 
   * @example
   * [ { "tables":[ { "name":"testtb", "type":"table", "newname":"testtb_restore" } ], "name":"testdb", "type":"db", "newname":"testdb_restore" } ]
   */
  tableMeta?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      securityToken: 'SecurityToken',
      tableMeta: 'TableMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      securityToken: 'string',
      tableMeta: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

