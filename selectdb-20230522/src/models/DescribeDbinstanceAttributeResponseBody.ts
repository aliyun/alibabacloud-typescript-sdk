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
  /**
   * @example
   * selectdb-cn-7213cjv****-be
   */
  clusterBinding?: string;
  clusterNodeCount?: number;
  clusterNodeType?: string;
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
  /**
   * @example
   * 4
   */
  scaleMax?: number;
  /**
   * @example
   * 0.5
   */
  scaleMin?: number;
  /**
   * @example
   * false
   */
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
  /**
   * @example
   * 预留参数，暂不返回。
   */
  subDomain?: string;
  /**
   * @example
   * vsw-t4n8x7jcc8rknon85tqoa
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cacheStorageSizeGB: 'CacheStorageSizeGB',
      cacheStorageType: 'CacheStorageType',
      chargeType: 'ChargeType',
      clusterBinding: 'ClusterBinding',
      clusterNodeCount: 'ClusterNodeCount',
      clusterNodeType: 'ClusterNodeType',
      cpuCores: 'CpuCores',
      createdTime: 'CreatedTime',
      dbClusterClass: 'DbClusterClass',
      dbClusterId: 'DbClusterId',
      dbClusterName: 'DbClusterName',
      dbInstanceName: 'DbInstanceName',
      memory: 'Memory',
      modifiedTime: 'ModifiedTime',
      performanceLevel: 'PerformanceLevel',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
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
      clusterNodeCount: 'number',
      clusterNodeType: 'string',
      cpuCores: 'number',
      createdTime: 'string',
      dbClusterClass: 'string',
      dbClusterId: 'string',
      dbClusterName: 'string',
      dbInstanceName: 'string',
      memory: 'number',
      modifiedTime: 'string',
      performanceLevel: 'string',
      scaleMax: 'number',
      scaleMin: 'number',
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

export class DescribeDBInstanceAttributeResponseBodyMultiZone extends $dara.Model {
  /**
   * @example
   * 4096
   */
  availableIpCount?: number;
  /**
   * @example
   * 113.88.14.211/32
   */
  cidr?: string;
  vSwitchIds?: string[];
  /**
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableIpCount: 'AvailableIpCount',
      cidr: 'Cidr',
      vSwitchIds: 'VSwitchIds',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIpCount: 'number',
      cidr: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * testKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * testValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyVirtualClusterList extends $dara.Model {
  activeClusterId?: string;
  activeClusterName?: string;
  createdTime?: string;
  dbClusterId?: string;
  dbClusterName?: string;
  standbyClusterId?: string;
  standbyClusterName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      activeClusterId: 'ActiveClusterId',
      activeClusterName: 'ActiveClusterName',
      createdTime: 'CreatedTime',
      dbClusterId: 'DbClusterId',
      dbClusterName: 'DbClusterName',
      standbyClusterId: 'StandbyClusterId',
      standbyClusterName: 'StandbyClusterName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeClusterId: 'string',
      activeClusterName: 'string',
      createdTime: 'string',
      dbClusterId: 'string',
      dbClusterName: 'string',
      standbyClusterId: 'string',
      standbyClusterName: 'string',
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

export class DescribeDBInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information returned.
   */
  canUpgradeVersions?: string[];
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  configPatternType?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2023-08-14T03:00:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The information about each cluster returned.
   */
  DBClusterList?: DescribeDBInstanceAttributeResponseBodyDBClusterList[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @example
   * multi_az
   */
  deployScheme?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * selectdb
   */
  engine?: string;
  /**
   * @remarks
   * The minor kernel version number of the instance.
   * 
   * @example
   * 3.0.1
   */
  engineMinorVersion?: string;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * @example
   * 2.4
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 2023-09-17T00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the instance was last modified, such as when you restarted the instance or applied for a public endpoint for the instance. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * @example
   * 2023-08-17T09:58Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The lock mode of the instance. Set the value to **lock**, which specifies that the instance is locked when it automatically expires or has an overdue payment.
   * 
   * @example
   * lock
   */
  lockMode?: number;
  /**
   * @remarks
   * The reason why the instance is locked.
   * 
   * @example
   * nolock
   */
  lockReason?: string;
  /**
   * @remarks
   * The end time of the instance maintenance window.
   * 
   * @example
   * 1970-01-01T05:00Z
   */
  maintainEndtime?: string;
  /**
   * @remarks
   * The start time of the instance maintenance window.
   * 
   * @example
   * 1970-01-01T02:00Z
   */
  maintainStarttime?: string;
  /**
   * **if can be null:**
   * true
   */
  multiZone?: DescribeDBInstanceAttributeResponseBodyMultiZone[];
  /**
   * @remarks
   * The storage capacity of the instance.
   * 
   * @example
   * 0
   */
  objectStoreSize?: number;
  /**
   * @remarks
   * The Region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06758CAB-1204-5852-A471-29C87D5C1D0F
   */
  requestId?: string;
  /**
   * @remarks
   * The number of CPU cores of the instance.
   * 
   * @example
   * 8
   */
  resourceCpu?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aekzbck4asz3dsa
   */
  resourceGroupId?: string;
  /**
   * @example
   * false
   */
  secGroupConnValid?: string;
  /**
   * @example
   * false
   */
  serverless?: boolean;
  /**
   * @remarks
   * The state of the instance. Valid values:
   * 
   * *   **CREATING**: The instance is being created.
   * *   **ACTIVATION**: The instance is running.
   * *   **RESOURCE_CHANGING**: The resource configuration of the instance is being changed.
   * *   **ORDER_PREPARING**: The order is being confirmed.
   * *   **READONLY_RESOURCE_CHANGING**: The resource configuration of the instance is being changed and the instance is write-locked.
   * *   **DELETING**: The instance is being deleted.
   * 
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
   * @remarks
   * The cache size.
   * 
   * @example
   * 400
   */
  storageSize?: number;
  /**
   * @remarks
   * The subdomain zone ID.
   * 
   * @example
   * cn-beijing-h-aliyun
   */
  subDomain?: string;
  /**
   * @remarks
   * The tags that are added to the instances. Each tag is a key-value pair that consists of two parts: TagKey and TagValue. Format: `{"key1":"value1"}`.
   */
  tags?: DescribeDBInstanceAttributeResponseBodyTags[];
  /**
   * @example
   * vsw-bp18iztwqrs8qj2nc6nyu
   */
  vSwitchId?: string;
  virtualClusterList?: DescribeDBInstanceAttributeResponseBodyVirtualClusterList[];
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
   */
  vpcId?: string;
  /**
   * @remarks
   * The Zone ID.
   * 
   * @example
   * cn-beijing-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      canUpgradeVersions: 'CanUpgradeVersions',
      chargeType: 'ChargeType',
      configPatternType: 'ConfigPatternType',
      createTime: 'CreateTime',
      DBClusterList: 'DBClusterList',
      DBInstanceId: 'DBInstanceId',
      deployScheme: 'DeployScheme',
      description: 'Description',
      engine: 'Engine',
      engineMinorVersion: 'EngineMinorVersion',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      gmtModified: 'GmtModified',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainEndtime: 'MaintainEndtime',
      maintainStarttime: 'MaintainStarttime',
      multiZone: 'MultiZone',
      objectStoreSize: 'ObjectStoreSize',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceCpu: 'ResourceCpu',
      resourceGroupId: 'ResourceGroupId',
      secGroupConnValid: 'SecGroupConnValid',
      serverless: 'Serverless',
      status: 'Status',
      storageSize: 'StorageSize',
      subDomain: 'SubDomain',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      virtualClusterList: 'VirtualClusterList',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canUpgradeVersions: { 'type': 'array', 'itemType': 'string' },
      chargeType: 'string',
      configPatternType: 'string',
      createTime: 'string',
      DBClusterList: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBClusterList },
      DBInstanceId: 'string',
      deployScheme: 'string',
      description: 'string',
      engine: 'string',
      engineMinorVersion: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      gmtModified: 'string',
      lockMode: 'number',
      lockReason: 'string',
      maintainEndtime: 'string',
      maintainStarttime: 'string',
      multiZone: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyMultiZone },
      objectStoreSize: 'number',
      regionId: 'string',
      requestId: 'string',
      resourceCpu: 'number',
      resourceGroupId: 'string',
      secGroupConnValid: 'string',
      serverless: 'boolean',
      status: 'string',
      storageSize: 'number',
      subDomain: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyTags },
      vSwitchId: 'string',
      virtualClusterList: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyVirtualClusterList },
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.canUpgradeVersions)) {
      $dara.Model.validateArray(this.canUpgradeVersions);
    }
    if(Array.isArray(this.DBClusterList)) {
      $dara.Model.validateArray(this.DBClusterList);
    }
    if(Array.isArray(this.multiZone)) {
      $dara.Model.validateArray(this.multiZone);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.virtualClusterList)) {
      $dara.Model.validateArray(this.virtualClusterList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

