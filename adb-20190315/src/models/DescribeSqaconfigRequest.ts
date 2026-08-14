// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQAConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL cluster.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of AnalyticDB for MySQL clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * am-8vbyw9awuj141haf9
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * > Call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/612410.html) operation to query information about the resource groups of a specific cluster, including the resource group names.
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
   * The region ID.
   * 
   * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the region IDs supported by AnalyticDB for MySQL.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
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

