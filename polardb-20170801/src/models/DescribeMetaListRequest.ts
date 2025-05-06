// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetaListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data backup file.
   * 
   * >*   When you run a query, you must specify the `BackId` or `RestoreTime` parameter.
   * >*   You can call the [DescribeBackups](https://help.aliyun.com/document_detail/98102.html) operation to query the ID of the backup set.
   * 
   * @example
   * 111111
   */
  backupId?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters under your account.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specify the specific database name (such as `test_db`) to query the names of all data tables that can be restored in the desired database.
   * 
   * >*   You can specify only one database name each time.
   * >*   If you do not specify this parameter, you can query the names of all databases that can be restored in the current backup set. However, you cannot query the names of data tables in each database.
   * 
   * @example
   * test_db
   */
  getDbName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * *   **30**
   * 
   * *   **50**
   * 
   * *   **100**
   * 
   *     Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region in which the instance resides. You can call the [DescribeDBClusterAttribute](https://help.aliyun.com/document_detail/2319132.html) operation to query the region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time for the restoration. Specify the time in the YYYY-MM-DDThh:mmZ format. The time must be in UTC.
   * 
   * >  When you run a query, you must specify the `BackId` or `RestoreTime` parameter. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/98102.html) operation to query the point in time for the restoration.
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

