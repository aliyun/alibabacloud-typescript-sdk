// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceAttributeResponseBodyDBClusterList extends $dara.Model {
  /**
   * @remarks
   * The cache storage size. Unit: GB.
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
   * @example
   * Prepaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The bound target cluster.
   * 
   * @example
   * selectdb-cn-7213cjv****-be
   */
  clusterBinding?: string;
  /**
   * @remarks
   * The number of cluster nodes. This parameter takes effect only in serverless mode.
   * 
   * @example
   * 1
   */
  clusterNodeCount?: number;
  /**
   * @remarks
   * The cluster node type. This parameter takes effect only in serverless mode.
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
   * The cluster specifications. Valid values:
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
   * The memory size.
   * 
   * @example
   * 64
   */
  memory?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2024-07-02T16:35:44+08:00
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The performance level (PL).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The maximum value of the automatic scaling range for the instance RCU (RDS Capacity Unit).
   * 
   * @example
   * 4
   */
  scaleMax?: number;
  /**
   * @remarks
   * The minimum value of the automatic scaling range for the instance RCU (RDS Capacity Unit).
   * 
   * @example
   * 0.5
   */
  scaleMin?: number;
  /**
   * @remarks
   * Indicates whether the time-based elastic policy is enabled.
   * 
   * @example
   * false
   */
  scalingRulesEnable?: boolean;
  /**
   * @remarks
   * The start time of the cluster.
   * 
   * @example
   * 2023-08-14T09:24:13Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
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
   * Reserved parameter. Not returned
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

export class DescribeDBInstanceAttributeResponseBodyFEClusterList extends $dara.Model {
  dbClusterId?: string;
  nodeCount?: number;
  singleNodeCpuCores?: number;
  singleNodeMemoryInGB?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      nodeCount: 'NodeCount',
      singleNodeCpuCores: 'SingleNodeCpuCores',
      singleNodeMemoryInGB: 'SingleNodeMemoryInGB',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      nodeCount: 'number',
      singleNodeCpuCores: 'number',
      singleNodeMemoryInGB: 'number',
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
   * The Classless Inter-Domain Routing block of the prefix list entry.
   * 
   * @example
   * 113.88.14.211/32
   */
  cidr?: string;
  /**
   * @remarks
   * The list of vSwitch IDs.
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
   * The key of the tag.
   * 
   * @example
   * testKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
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
   * The creation time of the instance.
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
   * The status of the instance. Valid values:
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
   * The list of versions to which the instance can be upgraded.
   */
  canUpgradeVersions?: string[];
  /**
   * @remarks
   * The billing type of the instance. Valid values:
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
   * The creation time of the instance.
   * 
   * @example
   * 2023-08-14T03:00:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The list of clusters that belong to the instance.
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
   * The deployment mode of the instance.
   * 
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
   * The database engine type.
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
   * The time when the instance expires.
   * 
   * @example
   * 2023-09-17T00:00Z
   */
  expireTime?: string;
  FEClusterList?: DescribeDBInstanceAttributeResponseBodyFEClusterList[];
  /**
   * @remarks
   * The time when the instance was last modified (for example, restarted or had public network access enabled). The time is in the yyyy-MM-ddTHH:mmZ format (UTC).
   * 
   * @example
   * 2023-08-17T09:58Z
   */
  gmtModified?: string;
  langfuseInstanceIds?: string[];
  /**
   * @remarks
   * The lock mode of the instance. The value is **lock**, which indicates that the instance is automatically expired or has an overdue payment.
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
   * @example
   * not_enabled
   */
  MCPServerServiceStatus?: string;
  /**
   * @remarks
   * The end time of the maintenance window of the instance.
   * 
   * @example
   * Reserved parameter.
   */
  maintainEndtime?: string;
  /**
   * @remarks
   * The start time of the maintenance window of the instance.
   * 
   * @example
   * Reserved parameter.
   */
  maintainStarttime?: string;
  /**
   * @remarks
   * The multi-zone configuration.
   * 
   * **if can be null:**
   * true
   */
  multiZone?: DescribeDBInstanceAttributeResponseBodyMultiZone[];
  OTelBearerToken?: string;
  OTelGrafanaServiceStatus?: string;
  /**
   * @remarks
   * The storage space.
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
   * The number of CPU resources.
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
   * @remarks
   * Indicates whether the direct port connection feature is enabled for the VPC in which the instance resides.
   * 
   * @example
   * false
   */
  secGroupConnValid?: string;
  /**
   * @remarks
   * Indicates whether the serverless feature is enabled for the instance.
   * 
   * @example
   * false
   */
  serverless?: boolean;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The storage size.
   * 
   * @example
   * 400
   */
  storageSize?: number;
  /**
   * @remarks
   * The zone.
   * 
   * @example
   * Reserved parameter.
   */
  subDomain?: string;
  /**
   * @remarks
   * The list of instance labels.
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
   * The list of virtual clusters.
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
      FEClusterList: 'FEClusterList',
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
      FEClusterList: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyFEClusterList },
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
    if(Array.isArray(this.FEClusterList)) {
      $dara.Model.validateArray(this.FEClusterList);
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

