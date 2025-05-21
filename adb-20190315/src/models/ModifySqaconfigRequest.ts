// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySQAConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-8vb369k7zxdt10tz0
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * >  You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/459446.html) operation to query the resource group name of a cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  groupName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable short query acceleration (SQA).
   * 
   * This parameter is required.
   * 
   * @example
   * off
   */
  SQAStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      SQAStatus: 'SQAStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      SQAStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

