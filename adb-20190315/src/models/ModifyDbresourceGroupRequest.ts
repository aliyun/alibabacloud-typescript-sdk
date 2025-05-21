// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-t7241****
   */
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
   * *   **interactive**
   * *   **batch**
   * 
   * >  For more information, see [Query execution modes](https://help.aliyun.com/document_detail/189502.html).
   * 
   * @example
   * batch
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
   * 1
   */
  nodeNum?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The database accounts with which to associate the resource group. They can be standard accounts or privileged accounts.
   */
  poolUserList?: string[];
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
      poolUserList: 'PoolUserList',
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
      poolUserList: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.poolUserList)) {
      $dara.Model.validateArray(this.poolUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

