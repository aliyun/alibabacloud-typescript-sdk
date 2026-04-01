// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetaListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set from which you want to restore data. You can call the DescribeBackups operation to query the IDs of data backup files.
   * 
   * >  This parameter is required when you set the **RestoreType** parameter to **BackupSetID**.
   * 
   * @example
   * 14358
   */
  backupSetID?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the generated token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
   */
  clientToken?: string;
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
   * The name of the database to query. The system implements exact match based on the value of this parameter and returns the name of the matched database and the names of all tables contained in the database.
   * 
   * > If you leave this parameter empty, the system returns all databases that are created on the instance.
   * 
   * @example
   * testdb1
   */
  getDbName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Valid values: any non-zero positive integer.**** Default value: **1**.
   * 
   * > This parameter only takes effect when you specify the **PageSize** parameter.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **1**.
   * 
   * > This parameter only takes effect when you specify the **PageIndex** parameter.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the database to query. The system implements fuzzy match based on the value of this parameter and returns only the name of the matched database.
   * 
   * > For example, if you set the value to `test`, the system returns `testdb1` and `testdb2`. Then, you can specify the **GetDbName** parameter to query tables in the required database.
   * 
   * @example
   * test
   */
  pattern?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which you want to restore data. The specified point in time must be earlier than the current time. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC. You can call the DescribeBackups operation to query the restorable time range.
   * 
   * >  This parameter must be specified when the **RestoreType** parameter is set to **RestoreTime**.
   * 
   * @example
   * 2019-05-30T03:29:10Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The restoration method that you want to use. Valid values:
   * 
   * *   **BackupSetID**: Data is restored from the backup set. If you use this value, you must also specify the **BackupSetID** parameter.
   * *   **RestoreTime**: Data is restored to a specific point in time. If you use this value, you must also specify the **RestoreTime** parameter.
   * 
   * Default value: **BackupSetID**.
   * 
   * @example
   * BackupSetID
   */
  restoreType?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetID: 'BackupSetID',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      getDbName: 'GetDbName',
      ownerId: 'OwnerId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      pattern: 'Pattern',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      restoreType: 'RestoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetID: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      getDbName: 'string',
      ownerId: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      pattern: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      restoreType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

