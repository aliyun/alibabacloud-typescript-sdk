// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetaListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set used for the query. You can call DescribeBackups to query the backup set ID.
   * > This parameter is required when **RestoreType** is set to **BackupSetID**.
   * 
   * @example
   * 14***
   */
  backupSetID?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database to query. This parameter supports exact match and returns the specified database name and all tables in the database.
   * > If you leave this parameter empty, a list of all databases is returned.
   * 
   * @example
   * testdb1
   */
  getDbName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Valid values: greater than **0** and up to the maximum value of Integer. Default value: **1**.
   * > This parameter takes effect only when it is specified together with **PageSize**.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **1**.
   * > This parameter takes effect only when it is specified together with **PageIndex**.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the database to query. This parameter supports fuzzy match and returns only the matched database names without table names.
   * > For example, if you specify `test`, the databases `testdb1` and `testdb2` are matched. After you identify the target database, specify the exact database name by using the **GetDbName** parameter to query all tables in the database.
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
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time used for the query. The value must be earlier than the current time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC). You can call DescribeBackups to query available time points.
   * > This parameter is required when **RestoreType** is set to **RestoreTime**.
   * 
   * @example
   * 2019-05-30T03:29:10Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The restoration method. Valid values:
   * 
   * * **BackupSetID**: Restores data from a backup set. You must also specify the **BackupSetID** parameter.
   * * **RestoreTime**: Restores data to a point in time. You must also specify the **RestoreTime** parameter.
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

