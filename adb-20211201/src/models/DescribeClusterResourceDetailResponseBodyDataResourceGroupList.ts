// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterResourceDetailResponseBodyDataResourceGroupList extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  clusterMode?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * 0
   */
  clusterSizeResource?: string;
  /**
   * @remarks
   * Indicates whether the preemptible instance feature is enabled for the resource group. After the preemptible instance feature is enabled, you are charged for resources at a lower unit price but the resources are probably released. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * The True value is returned only for job resource groups.
   * 
   * @example
   * true
   */
  enableSpot?: boolean;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * 0
   */
  maxClusterCount?: number;
  /**
   * @remarks
   * The maximum amount of reserved computing resources.
   * 
   * @example
   * 128ACU
   */
  maxComputeResource?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * 0
   */
  minClusterCount?: number;
  /**
   * @remarks
   * The minimum amount of reserved computing resources.
   * 
   * @example
   * 16ACU
   */
  minComputeResource?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * 17
   */
  poolId?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * testadb
   */
  poolName?: string;
  /**
   * @remarks
   * The type of the resource group.
   * 
   * @example
   * interactive
   */
  poolType?: string;
  /**
   * @remarks
   * The user of the resource group.
   * 
   * @example
   * user1
   */
  poolUsers?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * 0
   */
  runningClusterCount?: number;
  /**
   * @remarks
   * The status of the resource group. Valid values:
   * 
   * *   **running**
   * *   **deleting**
   * *   **scaling**
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterMode: 'ClusterMode',
      clusterSizeResource: 'ClusterSizeResource',
      enableSpot: 'EnableSpot',
      maxClusterCount: 'MaxClusterCount',
      maxComputeResource: 'MaxComputeResource',
      minClusterCount: 'MinClusterCount',
      minComputeResource: 'MinComputeResource',
      poolId: 'PoolId',
      poolName: 'PoolName',
      poolType: 'PoolType',
      poolUsers: 'PoolUsers',
      runningClusterCount: 'RunningClusterCount',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterMode: 'string',
      clusterSizeResource: 'string',
      enableSpot: 'boolean',
      maxClusterCount: 'number',
      maxComputeResource: 'string',
      minClusterCount: 'number',
      minComputeResource: 'string',
      poolId: 'number',
      poolName: 'string',
      poolType: 'string',
      poolUsers: 'string',
      runningClusterCount: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

