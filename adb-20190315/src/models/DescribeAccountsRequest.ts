// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * > You can call the [TagResources](https://help.aliyun.com/document_detail/179253.html) operation to create a tag for a cluster.
   * 
   * @example
   * AnalyticDB_IO_UTIL
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * low_env
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database account.
   * 
   * > If you omit this parameter, information about all database accounts is returned.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * The account type. By default, accounts of all types are returned. Valid values:
   * 
   * - **Normal**: a standard account.
   * 
   * - **Super**: a privileged account.
   * 
   * @example
   * Super
   */
  accountType?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL clusters in a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource tags.
   */
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

