// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBResourceGroupShrinkRequest extends $dara.Model {
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
   * The working mode of the resource group. Valid values:
   * 
   * *   **Disable** (default)
   * *   **AutoScale**
   * 
   * @example
   * AutoScale
   */
  clusterMode?: string;
  /**
   * @remarks
   * The resource specifications of a single compute cluster. Unit: ACU.
   * 
   * @example
   * 16ACU
   */
  clusterSizeResource?: string;
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
   * The Spark application configuration parameters that can be applied to all Spark jobs executed in the resource group. If you want to configure parameters for a specific Spark job, you can specify values for the parameters in the code editor when you submit the job.
   * 
   * @example
   * {\\"spark.adb.version\\":\\"3.5\\"}
   */
  engineParamsShrink?: string;
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
   * *   **interactive** (default)
   * *   **batch**
   * *   **job**
   * 
   * >  For more information, see [Query execution modes](https://help.aliyun.com/document_detail/189502.html).
   * 
   * @example
   * batch
   */
  groupType?: string;
  /**
   * @remarks
   * The maximum number of compute clusters that are allowed in the resource group. Maximum value: 10.
   * 
   * @example
   * 4
   */
  maxClusterCount?: number;
  /**
   * @remarks
   * The maximum amount of reserved computing resources, which refers to the amount of resources that are not allocated in the cluster. Unit: ACU.
   * 
   * *   When GroupType is set to interactive, set this parameter to a value in increments of 16ACU.
   * *   When GroupType is set to job, set this parameter to a value in increments of 8ACU.
   * 
   * @example
   * 48ACU
   */
  maxComputeResource?: string;
  /**
   * @remarks
   * The minimum number of compute clusters that are required in the resource group. Minimum value: 1.
   * 
   * @example
   * 1
   */
  minClusterCount?: number;
  /**
   * @remarks
   * The minimum amount of reserved computing resources. Unit: AnalyticDB compute unit (ACU).
   * 
   * *   When GroupType is set to interactive, set this parameter to 16ACU.
   * *   When GroupType is set to job, set this parameter to 0ACU.
   * 
   * @example
   * 0ACU
   */
  minComputeResource?: string;
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
  poolUserListShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clusterMode: 'ClusterMode',
      clusterSizeResource: 'ClusterSizeResource',
      DBClusterId: 'DBClusterId',
      engineParamsShrink: 'EngineParams',
      groupName: 'GroupName',
      groupType: 'GroupType',
      maxClusterCount: 'MaxClusterCount',
      maxComputeResource: 'MaxComputeResource',
      minClusterCount: 'MinClusterCount',
      minComputeResource: 'MinComputeResource',
      nodeNum: 'NodeNum',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      poolUserListShrink: 'PoolUserList',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clusterMode: 'string',
      clusterSizeResource: 'string',
      DBClusterId: 'string',
      engineParamsShrink: 'string',
      groupName: 'string',
      groupType: 'string',
      maxClusterCount: 'number',
      maxComputeResource: 'string',
      minClusterCount: 'number',
      minComputeResource: 'string',
      nodeNum: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      poolUserListShrink: 'string',
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

