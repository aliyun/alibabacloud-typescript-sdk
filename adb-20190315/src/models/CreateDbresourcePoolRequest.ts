// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBResourcePoolRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The number of nodes. Default value: 0.
   * 
   * *   Each node provides 16 cores and 64 GB memory.
   * *   The total amount of resources provided by the nodes (number of nodes × 16 cores, number of nodes × 64 GB memory) cannot exceed the total amount of resources in the cluster. Set this parameter to a proper value.
   * 
   * @example
   * 2
   */
  nodeNum?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * *   The name can be up to 255 characters in length.
   * *   The name must start with a letter or a digit.
   * *   The name can contain letters, digits, hyphens (_), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  poolName?: string;
  /**
   * @remarks
   * The mode in which to execute SQL statements.
   * 
   * *   **batch**
   * 
   * *   **interactive**
   * 
   * > For more information, see [Query execution modes](https://help.aliyun.com/document_detail/189502.html).
   * 
   * @example
   * interactive
   */
  queryType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      nodeNum: 'NodeNum',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      poolName: 'PoolName',
      queryType: 'QueryType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      nodeNum: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      poolName: 'string',
      queryType: 'string',
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

