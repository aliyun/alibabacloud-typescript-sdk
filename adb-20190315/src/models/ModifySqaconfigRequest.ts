// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySQAConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Data Warehouse Edition cluster.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all Data Warehouse Edition clusters in a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-xxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * > Call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/459446.html) operation to view the name of the resource group for a specific cluster.
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
   * The ID of the resource group.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable SQA.
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

