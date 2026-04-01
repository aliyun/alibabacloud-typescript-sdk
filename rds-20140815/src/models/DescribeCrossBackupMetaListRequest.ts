// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrossBackupMetaListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cross-region backup file that you want to use. You can call the [DescribeCrossRegionBackups](https://help.aliyun.com/document_detail/121733.html) operation to query the ID of the cross-region backup file.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  backupSetId?: string;
  /**
   * @remarks
   * The name of the database that you want to query. The system implements exact match based on the value of this parameter and returns the name of the matched database and the names of the tables in the matched database.
   * 
   * @example
   * testdb1
   */
  getDbName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Valid values: any non-zero positive integer.
   * 
   * > This parameter only takes effect when you specify the **PageSize** parameter.
   * 
   * @example
   * 1
   */
  pageIndex?: string;
  /**
   * @remarks
   * The number of entries to return per page. Default value: **1**.
   * 
   * > This parameter only takes effect when you specify the **PageIndex** parameter.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The name of the database that you want to query. The system implements fuzzy match based on the value of this parameter and returns only the name of the matched database.
   * 
   * > You can implement fuzzy match and then exact match. For example, you can set the Pattern parameter to test to query the testdb1 and testdb2 databases. Then, you can specify the **GetDbName** parameter to query only the matched database and the tables in the matched database.
   * 
   * @example
   * test
   */
  pattern?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      getDbName: 'GetDbName',
      ownerId: 'OwnerId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      pattern: 'Pattern',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      getDbName: 'string',
      ownerId: 'number',
      pageIndex: 'string',
      pageSize: 'string',
      pattern: 'string',
      region: 'string',
      resourceGroupId: 'string',
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

