// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccountsRequestTags } from "./DescribeAccountsRequestTags";


export class DescribeAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database account.
   * 
   * >  If you do not specify this parameter, the information about all database accounts is returned.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * The type of the database account. If you do not specify this parameter, the information about all account types is returned. Valid values:
   * 
   * *   **Normal**: standard account.
   * *   **Super**: privileged account.
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tags?: DescribeAccountsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountType: 'AccountType',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountType: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': DescribeAccountsRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

