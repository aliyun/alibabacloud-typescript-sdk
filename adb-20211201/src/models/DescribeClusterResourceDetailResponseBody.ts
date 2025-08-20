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

export class DescribeClusterResourceDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The amount of reserved computing resources. Unit: AnalyticDB compute units (ACUs). Valid values: 0 to 4096. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
   * 
   * @example
   * 16ACU
   */
  computeResource?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-adbxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The amount of idle reserved computing resources. Unit: ACUs. Valid values: 0 to 4096. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
   * 
   * @example
   * 0ACU
   */
  freeComputeResource?: string;
  /**
   * @remarks
   * The resource groups.
   */
  resourceGroupList?: DescribeClusterResourceDetailResponseBodyDataResourceGroupList[];
  /**
   * @remarks
   * The amount of reserved storage resources. Unit: ACUs. Valid values: 0 to 2064. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
   * 
   * @example
   * 24ACU
   */
  storageResource?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'ComputeResource',
      DBClusterId: 'DBClusterId',
      freeComputeResource: 'FreeComputeResource',
      resourceGroupList: 'ResourceGroupList',
      storageResource: 'StorageResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'string',
      DBClusterId: 'string',
      freeComputeResource: 'string',
      resourceGroupList: { 'type': 'array', 'itemType': DescribeClusterResourceDetailResponseBodyDataResourceGroupList },
      storageResource: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroupList)) {
      $dara.Model.validateArray(this.resourceGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourceDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The queried resource usage.
   */
  data?: DescribeClusterResourceDetailResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeClusterResourceDetailResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

