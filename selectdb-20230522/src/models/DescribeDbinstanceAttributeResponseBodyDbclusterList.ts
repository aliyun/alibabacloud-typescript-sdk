// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceAttributeResponseBodyDBClusterList extends $dara.Model {
  /**
   * @remarks
   * The cache size. Unit: GB.
   * 
   * @example
   * 200
   */
  cacheStorageSizeGB?: string;
  /**
   * @remarks
   * The cache type.
   * 
   * @example
   * cloud_essd
   */
  cacheStorageType?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  clusterBinding?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 8
   */
  cpuCores?: number;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2023-08-14T09:24:13Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The specifications of the cluster. Valid values:
   * 
   * *   **selectdb.xlarge**: 4 CPU cores and 32 GB of memory.
   * *   **selectdb.2xlarge**: 8 CPU cores and 64 GB of memory.
   * *   **selectdb.4xlarge**: 16 CPU cores and 128 GB of memory.
   * *   **selectdb.8xlarge**: 32 CPU cores and 256 GB of memory.
   * *   **selectdb.16xlarge**: 64 CPU cores and 512 GB of memory.
   * *   **selectdb.24xlarge**: 96 CPU cores and 768 GB of memory.
   * *   **selectdb.32xlarge**: 128 CPU cores and 1,024 GB of memory.
   * 
   * @example
   * selectdb.2xlarge
   */
  dbClusterClass?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * selectdb-cn-h033cjs****-be
   */
  dbClusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * test01
   */
  dbClusterName?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test instance
   */
  dbInstanceName?: string;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 64
   */
  memory?: number;
  /**
   * @remarks
   * The modified time.
   * 
   * @example
   * 2024-07-02T16:35:44+08:00
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The performance level.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  scalingRulesEnable?: boolean;
  /**
   * @remarks
   * The time when the cluster started.
   * 
   * @example
   * 2023-08-14T09:24:13Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the cluster. Valid values:
   * 
   * *   **CREATING**: The cluster is being created.
   * *   **ACTIVATION**: The cluster is running.
   * *   **RESOURCE_CHANGING**: The resource configuration of the cluster is being changed.
   * *   **ORDER_PREPARING**: The order is being confirmed.
   * *   **READONLY_RESOURCE_CHANGING**: The resource configuration of the cluster is being changed and the cluster is write-locked.
   * *   **DELETING**: The cluster is being deleted.
   * 
   * @example
   * ACTIVATION
   */
  status?: string;
  subDomain?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cacheStorageSizeGB: 'CacheStorageSizeGB',
      cacheStorageType: 'CacheStorageType',
      chargeType: 'ChargeType',
      clusterBinding: 'ClusterBinding',
      cpuCores: 'CpuCores',
      createdTime: 'CreatedTime',
      dbClusterClass: 'DbClusterClass',
      dbClusterId: 'DbClusterId',
      dbClusterName: 'DbClusterName',
      dbInstanceName: 'DbInstanceName',
      memory: 'Memory',
      modifiedTime: 'ModifiedTime',
      performanceLevel: 'PerformanceLevel',
      scalingRulesEnable: 'ScalingRulesEnable',
      startTime: 'StartTime',
      status: 'Status',
      subDomain: 'SubDomain',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheStorageSizeGB: 'string',
      cacheStorageType: 'string',
      chargeType: 'string',
      clusterBinding: 'string',
      cpuCores: 'number',
      createdTime: 'string',
      dbClusterClass: 'string',
      dbClusterId: 'string',
      dbClusterName: 'string',
      dbInstanceName: 'string',
      memory: 'number',
      modifiedTime: 'string',
      performanceLevel: 'string',
      scalingRulesEnable: 'boolean',
      startTime: 'string',
      status: 'string',
      subDomain: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

