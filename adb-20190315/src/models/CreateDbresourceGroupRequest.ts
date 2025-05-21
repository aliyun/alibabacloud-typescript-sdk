// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBResourceGroupRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * *   The name can be up to 255 characters in length.
   * *   The name must start with an uppercase letter or a digit.
   * *   The name can contain uppercase letters, digits, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The query execution mode. Valid values:
   * 
   * *   **interactive** (default)
   * *   **batch**
   * 
   * @example
   * interactive
   */
  groupType?: string;
  /**
   * @remarks
   * The number of nodes. Default value: 0.
   * 
   * *   Each node is configured with the resources of 16 cores and 64 GB memory.
   * *   Make sure that the amount of resources of the nodes (Number of nodes × 16 cores and 64 GB memory) is less than or equal to the amount of unused resources of the cluster.
   * 
   * @example
   * 2
   */
  nodeNum?: number;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      nodeNum: 'NodeNum',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      groupName: 'string',
      groupType: 'string',
      nodeNum: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
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

