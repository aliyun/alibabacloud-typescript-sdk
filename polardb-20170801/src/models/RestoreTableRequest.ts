// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreTableRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * >  You must specify this parameter if you need to restore a database or a table by using a backup set. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/98102.html) operation to query the ID of the backup set.
   * 
   * @example
   * 111111
   */
  backupId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters within your account.
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
   * The point in time for the restoration. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mmZ format. The time must be in UTC.
   * 
   * > 
   * 
   * *   You must specify this parameter if you need to restore the database or the table to a point in time.
   * 
   * *   You can restore your cluster to a particular time only over the past seven days.
   * 
   * @example
   * 2020-10-04T01:40:00Z
   */
  restoreTime?: string;
  securityToken?: string;
  /**
   * @remarks
   * The JSON string that contains the information of the database and the table that you want to restore. All values of the database and table information are of the string type. Example: `[ { "tables":[ { "name":"testtb", "type":"table", "newname":"testtb_restore" } ], "name":"testdb", "type":"db", "newname":"testdb_restore" } ]`.
   * 
   * >  You can call the [DescribeMetaList](https://help.aliyun.com/document_detail/194770.html) operation to query the names and details of databases and tables that can be restored and enter their information into the corresponding locations in the preceding example.
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

