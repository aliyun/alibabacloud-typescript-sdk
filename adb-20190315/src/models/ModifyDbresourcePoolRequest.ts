// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBResourcePoolRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * *   Each node provides 16 cores and 64 GB memory.
   * *   The amount of resources that you want to add to or remove from the cluster cannot exceed the total amount of resources in the cluster.
   * 
   * > - If you do not specify this parameter, the original value is retained.
   * > - You must specify at least one of the QueryType and NodeNum parameters.
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
   * This parameter is required.
   * 
   * @example
   * test_group
   */
  poolName?: string;
  /**
   * @remarks
   * The mode in which SQL statements are executed. Valid values:
   * 
   * *   **batch**
   * *   **interactive**
   * 
   * > If you do not specify this parameter, the original value is retained.
   * 
   * @example
   * batch
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

