// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetaListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * > - You must specify either the `BackupId` or `RestoreTime` parameter.
   * >
   * > - Call the [DescribeBackups](https://help.aliyun.com/document_detail/98102.html) operation to query the backup set ID.
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
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database, such as `test_db`. If you specify this parameter, the names of all tables that can be recovered from the specified database are returned.
   * 
   * > - You can specify only one database name at a time.
   * >
   * > - If you do not specify this parameter, the names of all databases that can be recovered from the current backup set are returned. The names of tables in each database are not returned.
   * 
   * @example
   * test_db
   */
  getDbName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0 and does not exceed the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100** Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call [DescribeDBClusterAttribute](https://help.aliyun.com/document_detail/2319132.html) to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which you want to restore data. Specify the time in the YYYY-MM-DDThh:mmZ format. The time must be in UTC.
   * 
   * > You must specify either the `BackupId` or `RestoreTime` parameter. Call the [DescribeBackups](https://help.aliyun.com/document_detail/98102.html) operation to query the point in time for restoration.
   * 
   * @example
   * 2020-10-04T01:40:00Z
   */
  restoreTime?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      DBClusterId: 'DBClusterId',
      getDbName: 'GetDbName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionCode: 'RegionCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      DBClusterId: 'string',
      getDbName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
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

