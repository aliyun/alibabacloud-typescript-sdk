// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBResourceGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A client token used to ensure the idempotence of the request. The client generates this value to make sure that it is unique among different requests. The token is case-sensitive and cannot exceed 64 ASCII characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-t7241****
   */
  clientToken?: string;
  /**
   * @remarks
   * The mode of the resource group. Valid values:
   * 
   * - **Disable** (default): regular mode.
   * 
   * - **AutoScale**: auto-scaling mode.
   * 
   * @example
   * AutoScale
   */
  clusterMode?: string;
  /**
   * @remarks
   * The resource specifications of a single cluster, in ACU.
   * 
   * @example
   * 16ACU
   */
  clusterSizeResource?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all Data Warehouse Edition clusters in the destination region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The engine of the resource group. Valid values:
   * 
   * - **AnalyticDB** (default): the AnalyticDB for MySQL engine.
   * 
   * - **SparkWarehouse**: the SparkWarehouse engine.
   * 
   * @example
   * AnalyticDB
   */
  engine?: string;
  /**
   * @remarks
   * The configuration parameters for the Spark application. These parameters apply to all Spark jobs that are executed in the resource group. To configure parameters for a specific Spark job, set the parameters in the code when you submit the job.
   * 
   * @example
   * {\\"spark.adb.version\\":\\"3.5\\"}
   */
  engineParamsShrink?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * - The name can be up to 255 characters in length.
   * 
   * - The name must start with a digit or an uppercase letter.
   * 
   * - The name can contain digits, uppercase letters, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * TEST_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * The query type. Valid values:
   * 
   * - **interactive** (default): interactive query mode.
   * 
   * - **batch**: batch query mode.
   * 
   * - **Job**: offline job mode.
   * 
   * @example
   * interactive
   */
  groupType?: string;
  /**
   * @remarks
   * The maximum number of clusters that can run in the resource group. The maximum value is 10.
   * 
   * @example
   * 2
   */
  maxClusterCount?: number;
  /**
   * @remarks
   * The maximum reserved computing resources, in ACU.
   * 
   * - If the resource group type is Interactive, the maximum reserved computing resources are the current unallocated resources of the cluster. The step size is 16 ACU.
   * 
   * - If the resource group type is Job, the maximum reserved computing resources are the current unallocated resources of the cluster. The step size is 8 ACU.
   * 
   * @example
   * 32ACU
   */
  maxComputeResource?: string;
  /**
   * @remarks
   * The minimum number of clusters that must run in the resource group. The minimum value is 1.
   * 
   * @example
   * 1
   */
  minClusterCount?: number;
  /**
   * @remarks
   * The minimum reserved computing resources, in ACU.
   * 
   * - If the resource group type is Interactive, the minimum reserved computing resources are 16 ACU.
   * 
   * - If the resource group type is Job, the minimum reserved computing resources are 0 ACU.
   * 
   * @example
   * 0ACU
   */
  minComputeResource?: string;
  /**
   * @remarks
   * The number of nodes. The default value is 0.
   * 
   * - The resources of one node are 16 cores and 64 GB.
   * 
   * - The number of nodes cannot be too large. The value must meet the following condition: Number of nodes × (16 cores and 64 GB) ≤ Remaining available resources of the cluster.
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
      clusterMode: 'ClusterMode',
      clusterSizeResource: 'ClusterSizeResource',
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
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
      engine: 'string',
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

