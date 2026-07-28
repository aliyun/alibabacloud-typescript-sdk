// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceAttributeResponseBodyDBClusterList extends $dara.Model {
  /**
   * @remarks
   * The cache storage size, in GB.
   * 
   * @example
   * 200
   */
  cacheStorageSizeGB?: string;
  /**
   * @remarks
   * The cache storage type.
   * 
   * @example
   * cloud_essd
   */
  cacheStorageType?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go
   * 
   * - **Prepaid**: subscription
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The ID of the target cluster to which this cluster is bound.
   * 
   * @example
   * selectdb-cn-7213cjv****-be
   */
  clusterBinding?: string;
  /**
   * @remarks
   * The number of nodes in the cluster. This parameter applies only to serverless instances.
   * 
   * @example
   * 1
   */
  clusterNodeCount?: number;
  /**
   * @remarks
   * The cluster node type. This parameter applies only to serverless instances.
   * 
   * @example
   * base
   */
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
   * The cluster class. Valid values:
   * 
   * - **selectdb.xlarge**: 4 CPU cores, 16 GB of memory.
   * 
   * - **selectdb.2xlarge**: 8 CPU cores, 32 GB of memory.
   * 
   * - **selectdb.4xlarge**: 16 CPU cores, 64 GB of memory.
   * 
   * - **selectdb.8xlarge**: 32 CPU cores, 128 GB of memory.
   * 
   * - **selectdb.16xlarge**: 64 CPU cores, 256 GB of memory.
   * 
   * - **selectdb.24xlarge**: 96 CPU cores, 384 GB of memory.
   * 
   * - **selectdb.32xlarge**: 128 CPU cores, 512 GB of memory.
   * 
   * @example
   * selectdb.2xlarge
   */
  dbClusterClass?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * selectdb-cn-h033cjs****-be
   */
  dbClusterId?: string;
  /**
   * @remarks
   * The cluster name.
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
   * Instance test
   */
  dbInstanceName?: string;
  /**
   * @remarks
   * The memory size, in GB.
   * 
   * @example
   * 64
   */
  memory?: number;
  /**
   * @remarks
   * The time when the cluster was last modified.
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
   * @remarks
   * The maximum value of the auto-scaling range for the cluster\\"s RDS Capacity Units (RCUs).
   * 
   * @example
   * 4
   */
  scaleMax?: number;
  /**
   * @remarks
   * The minimum value of the auto-scaling range for the cluster\\"s RDS Capacity Units (RCUs).
   * 
   * @example
   * 0.5
   */
  scaleMin?: number;
  /**
   * @remarks
   * Indicates whether a scheduled scaling policy is enabled.
   * 
   * @example
   * false
   */
  scalingRulesEnable?: boolean;
  /**
   * @remarks
   * The time when the cluster was started.
   * 
   * @example
   * 2023-08-14T09:24:13Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the cluster. Valid values:
   * 
   * - **CREATING**: The cluster is being created.
   * 
   * - **ACTIVATION**: The cluster is running.
   * 
   * - **RESOURCE_CHANGING**: The cluster configuration is being changed.
   * 
   * - **ORDER_PREPARING**: The order is being confirmed.
   * 
   * - **READONLY_RESOURCE_CHANGING**: The cluster configuration is being changed, and the cluster is write-locked.
   * 
   * - **DELETING**: The cluster is being deleted.
   * 
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
   * @remarks
   * The subdomain.
   * 
   * @example
   * 预留参数，暂不返回。
   */
  subDomain?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-t4n8x7jcc8rknon85tqoa
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
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
   * @remarks
   * The number of available IP addresses in the zone.
   * 
   * @example
   * 4096
   */
  availableIpCount?: number;
  /**
   * @remarks
   * The CIDR block.
   * 
   * @example
   * 113.88.14.211/32
   */
  cidr?: string;
  /**
   * @remarks
   * A list of vSwitch IDs.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The zone ID.
   * 
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
  /**
   * @remarks
   * The ID of the primary cluster.
   * 
   * @example
   * selectdb-xx78***-be
   */
  activeClusterId?: string;
  /**
   * @remarks
   * The name of the primary cluster.
   * 
   * @example
   * test1
   */
  activeClusterName?: string;
  /**
   * @remarks
   * The time when the virtual cluster was created.
   * 
   * @example
   * 2025-05-31T21:01:09Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * selectdb-vcg-33cjs****-be
   */
  dbClusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * vgcdemo
   */
  dbClusterName?: string;
  /**
   * @remarks
   * The ID of the standby cluster.
   * 
   * @example
   * selectdb-x6u7***-be
   */
  standbyClusterId?: string;
  /**
   * @remarks
   * The name of the standby cluster.
   * 
   * @example
   * test2
   */
  standbyClusterName?: string;
  /**
   * @remarks
   * The state of the virtual cluster. Valid values:
   * 
   * - **CREATING**: The virtual cluster is being created.
   * 
   * - **RUNNING**: The virtual cluster is running.
   * 
   * - **DELETING**: The virtual cluster is being deleted.
   * 
   * - **UPDATING**: The virtual cluster is being updated.
   * 
   * @example
   * UPDATING
   */
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
  canUpgradeVersionCommunityMap?: { [key: string]: string };
  /**
   * @remarks
   * The engine versions to which the instance can be upgraded.
   */
  canUpgradeVersions?: string[];
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go
   * 
   * - **Prepaid**: subscription
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  communityVersion?: string;
  /**
   * @remarks
   * The configuration template applied to the instance.
   * 
   * @example
   * log
   */
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
   * A list of clusters in the instance.
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
   * @remarks
   * The instance deployment mode.
   * 
   * @example
   * multi_az
   */
  deployScheme?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The database engine.
   * 
   * @example
   * selectdb
   */
  engine?: string;
  /**
   * @remarks
   * The minor engine version of the instance.
   * 
   * @example
   * 3.0.1
   */
  engineMinorVersion?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 2.4
   */
  engineVersion?: string;
  /**
   * @remarks
   * The expiration time of the subscription instance.
   * 
   * @example
   * 2023-09-17T00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the instance was last modified. The time is in `yyyy-MM-ddTHH:mmZ` format and is displayed in UTC.
   * 
   * @example
   * 2023-08-17T09:58Z
   */
  gmtModified?: string;
  langfuseInstanceIds?: string[];
  /**
   * @remarks
   * The lock mode of the instance. A value of **lock** indicates that the instance was automatically locked due to an expired subscription or an overdue payment.
   * 
   * @example
   * lock
   */
  lockMode?: number;
  /**
   * @remarks
   * The reason the instance is locked.
   * 
   * @example
   * nolock
   */
  lockReason?: string;
  /**
   * @example
   * not_enabled
   */
  MCPServerServiceStatus?: string;
  /**
   * @remarks
   * The end time of the maintenance window.
   * 
   * @example
   * Reserved parameter.
   */
  maintainEndtime?: string;
  /**
   * @remarks
   * The start time of the maintenance window.
   * 
   * @example
   * Reserved parameter.
   */
  maintainStarttime?: string;
  /**
   * @remarks
   * The multi-zone configuration.
   * 
   * > - This parameter is returned only if the `DeployScheme` parameter is set to `multi_az`.
   * 
   * **if can be null:**
   * true
   */
  multiZone?: DescribeDBInstanceAttributeResponseBodyMultiZone[];
  OTelBearerToken?: string;
  OTelGrafanaServiceStatus?: string;
  /**
   * @remarks
   * The object storage space, in GB.
   * 
   * @example
   * 0
   */
  objectStoreSize?: number;
  /**
   * @remarks
   * The region ID.
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
   * The number of CPU cores.
   * 
   * @example
   * 8
   */
  resourceCpu?: number;
  /**
   * @remarks
   * The ID of the instance\\"s resource group.
   * 
   * @example
   * rg-aekzbck4asz3dsa
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the direct port connection feature is enabled for the instance\\"s VPC.
   * 
   * - `true`: Enabled.
   * 
   * - `false`: Disabled.
   * 
   * @example
   * false
   */
  secGroupConnValid?: string;
  /**
   * @remarks
   * Indicates whether the serverless feature is enabled for the instance.
   * 
   * - `true`: Enabled.
   * 
   * - `false`: Disabled.
   * 
   * @example
   * false
   */
  serverless?: boolean;
  /**
   * @remarks
   * The state of the instance. Valid values:
   * 
   * - **CREATING**: The instance is being created.
   * 
   * - **ACTIVE**: The instance is running.
   * 
   * - **RESOURCE_CHANGING**: The instance configuration is being changed.
   * 
   * - **ORDER_PREPARING**: The order is being confirmed.
   * 
   * - **READONLY_RESOURCE_CHANGING**: The instance configuration is being changed, and the instance is write-locked.
   * 
   * - **DELETING**: The instance is being deleted.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The storage space, in GB.
   * 
   * @example
   * 400
   */
  storageSize?: number;
  /**
   * @remarks
   * The subdomain.
   * 
   * @example
   * Reserved parameter.
   */
  subDomain?: string;
  /**
   * @remarks
   * A list of tags attached to the instance.
   */
  tags?: DescribeDBInstanceAttributeResponseBodyTags[];
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp18iztwqrs8qj2nc6nyu
   */
  vSwitchId?: string;
  /**
   * @remarks
   * A list of virtual clusters.
   */
  virtualClusterList?: DescribeDBInstanceAttributeResponseBodyVirtualClusterList[];
  /**
   * @remarks
   * The VPC ID of the instance.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * @example
   * cn-beijing-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      canUpgradeVersionCommunityMap: 'CanUpgradeVersionCommunityMap',
      canUpgradeVersions: 'CanUpgradeVersions',
      chargeType: 'ChargeType',
      communityVersion: 'CommunityVersion',
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
      langfuseInstanceIds: 'LangfuseInstanceIds',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      MCPServerServiceStatus: 'MCPServerServiceStatus',
      maintainEndtime: 'MaintainEndtime',
      maintainStarttime: 'MaintainStarttime',
      multiZone: 'MultiZone',
      OTelBearerToken: 'OTelBearerToken',
      OTelGrafanaServiceStatus: 'OTelGrafanaServiceStatus',
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
      canUpgradeVersionCommunityMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      canUpgradeVersions: { 'type': 'array', 'itemType': 'string' },
      chargeType: 'string',
      communityVersion: 'string',
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
      langfuseInstanceIds: { 'type': 'array', 'itemType': 'string' },
      lockMode: 'number',
      lockReason: 'string',
      MCPServerServiceStatus: 'string',
      maintainEndtime: 'string',
      maintainStarttime: 'string',
      multiZone: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyMultiZone },
      OTelBearerToken: 'string',
      OTelGrafanaServiceStatus: 'string',
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
    if(this.canUpgradeVersionCommunityMap) {
      $dara.Model.validateMap(this.canUpgradeVersionCommunityMap);
    }
    if(Array.isArray(this.canUpgradeVersions)) {
      $dara.Model.validateArray(this.canUpgradeVersions);
    }
    if(Array.isArray(this.DBClusterList)) {
      $dara.Model.validateArray(this.DBClusterList);
    }
    if(Array.isArray(this.langfuseInstanceIds)) {
      $dara.Model.validateArray(this.langfuseInstanceIds);
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

