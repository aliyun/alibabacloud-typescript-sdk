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
   * - **Postpaid**: pay-as-you-go.
   * 
   * - **Prepaid**: subscription.
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
   * The number of nodes in the cluster. This parameter takes effect only in serverless mode.
   * 
   * @example
   * 1
   */
  clusterNodeCount?: number;
  /**
   * @remarks
   * The node type of the cluster. This parameter takes effect only in serverless mode.
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
   * The creation time of the cluster in ISO 8601 format with time zone information.
   * 
   * @example
   * 2023-08-14T09:24:13Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The cluster specifications. Valid values:
   * 
   * - **selectdb.xlarge**: 4 cores and 16 GB memory
   * 
   * - **selectdb.2xlarge**: 8 cores and 32 GB memory
   * 
   * - **selectdb.4xlarge**: 16 cores and 64 GB memory
   * 
   * - **selectdb.8xlarge**: 32 cores and 128 GB memory
   * 
   * - **selectdb.16xlarge**: 64 cores and 256 GB memory
   * 
   * - **selectdb.24xlarge**: 96 cores and 384 GB memory
   * 
   * - **selectdb.32xlarge**: 128 cores and 512 GB memory
   * 
   * - **selectdb.g.xlarge**: 4 cores and 16 GB memory
   * 
   * - **selectdb.g.2xlarge**: 8 cores and 32 GB memory
   * 
   * - **selectdb.g.4xlarge**: 16 cores and 64 GB memory
   * 
   * - **selectdb.g.8xlarge**: 32 cores and 128 GB memory
   * 
   * - **selectdb.g.16xlarge**: 64 cores and 256 GB memory
   * 
   * - **selectdb.g.24xlarge**: 96 cores and 384 GB memory
   * 
   * - **selectdb.g.32xlarge**: 128 cores and 512 GB memory
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
   * Test instance
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
   * The modification time in ISO 8601 format with time zone information.
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
   * The maximum number of RDS Capacity Units (RCUs) for auto-scaling.
   * 
   * @example
   * 4
   */
  scaleMax?: number;
  /**
   * @remarks
   * The minimum number of RDS Capacity Units (RCUs) for auto-scaling.
   * 
   * @example
   * 0.5
   */
  scaleMin?: number;
  /**
   * @remarks
   * Specifies whether the time-based elastic policy is enabled.
   * 
   * @example
   * false
   */
  scalingRulesEnable?: boolean;
  /**
   * @remarks
   * The start time of the cluster in ISO 8601 format with time zone information.
   * 
   * @example
   * 2023-08-14T09:24:13Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * - **CREATING**: The cluster is being created.
   * 
   * - **ACTIVATION**: The cluster is running.
   * 
   * - **RESOURCE_CHANGING**: The cluster specifications are being changed.
   * 
   * - **ORDER_PREPARING**: The order is being confirmed.
   * 
   * - **READONLY_RESOURCE_CHANGING**: The cluster resources are being changed and the instance is locked for writes.
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
   * Reserved parameter, not returned
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
  /**
   * @remarks
   * The name of the FE cluster.
   * 
   * @example
   * selectdb-cn-7213cjv****-fe
   */
  dbClusterId?: string;
  /**
   * @remarks
   * The number of nodes in the FE cluster.
   * 
   * @example
   * 1
   */
  nodeCount?: number;
  /**
   * @remarks
   * The number of CPU cores per node in the FE cluster.
   * 
   * @example
   * 4
   */
  singleNodeCpuCores?: number;
  /**
   * @remarks
   * The memory size per node in the FE cluster. Unit: GB.
   * 
   * @example
   * 16
   */
  singleNodeMemoryInGB?: number;
  /**
   * @remarks
   * The status of the FE cluster.
   * 
   * @example
   * ACTIVATION
   */
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
   * The CIDR block information of the prefix list entry.
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
   * The creation time in ISO 8601 format with time zone information.
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
   * - **CREATING**: The instance is being created.
   * - **RUNNING**: The instance is running.
   * - **DELETING**: The instance is being deleted.
   * - **UPDATING**: The instance is being updated.
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
  /**
   * @remarks
   * The community versions corresponding to the upgradable versions.
   * 
   * @example
   * "4.1.10-20260922":"Apache Doris 3.1.4"
   */
  canUpgradeVersionCommunityMap?: { [key: string]: string };
  /**
   * @remarks
   * The list of upgradable versions.
   * 
   * @example
   * "4.1.10-20260922"
   */
  canUpgradeVersions?: string[];
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go.
   * 
   * - **Prepaid**: subscription.
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The community version corresponding to the current version.
   * 
   * @example
   * Apache Doris 4.0.8
   */
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
   * The creation time in ISO 8601 format with time zone information.
   * 
   * @example
   * 2023-08-14T03:00:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The list of clusters to which the instance belongs.
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
   * The database version.
   * 
   * @example
   * 2.4
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the instance expires, in ISO 8601 format with time zone information.
   * 
   * @example
   * 2023-09-17T00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The list of FE clusters.
   */
  FEClusterList?: DescribeDBInstanceAttributeResponseBodyFEClusterList[];
  /**
   * @remarks
   * The time when the instance was modified, such as restart or public network application. The time is in the yyyy-MM-ddTHH:mmZ format (UTC time).
   * 
   * @example
   * 2023-08-17T09:58Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The list of Langfuse instance IDs associated with the SelectDB instance.
   * 
   * @example
   * ["lfu-xxkshuf23sdj"]
   */
  langfuseInstanceIds?: string[];
  /**
   * @remarks
   * The lock mode of the instance. A value of **lock** indicates that the instance is locked due to expiration or overdue payment.
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
   * The service status of the MCP Server.
   * 
   * @example
   * not_enabled
   */
  MCPServerServiceStatus?: string;
  /**
   * @remarks
   * Reserved parameter. This parameter is not returned and does not apply to the time format.
   * 
   * @example
   * Reserved parameter, not currently returned
   */
  maintainEndtime?: string;
  /**
   * @remarks
   * Reserved parameter. This parameter is not returned and does not apply to the time format.
   * 
   * @example
   * Reserved parameter, not currently returned
   */
  maintainStarttime?: string;
  /**
   * @remarks
   * The multi-zone configuration.
   * 
   * > 
   * > - This parameter is valid when DeployScheme is set to multi_az.
   * 
   * **if can be null:**
   * true
   */
  multiZone?: DescribeDBInstanceAttributeResponseBodyMultiZone[];
  /**
   * @remarks
   * The OTel collector bearer token.
   * 
   * @example
   * nDVkJstxQEwyXIae8cRBzK33Hev68len
   */
  OTelBearerToken?: string;
  /**
   * @remarks
   * The service status of the OTel collector and Grafana.
   * 
   * @example
   * not_enabled
   */
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
   * The number of CPU cores.
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
   * Indicates whether the port direct connection feature is enabled for the VPC where the current instance resides.
   * 
   * - A value of true indicates that the feature is enabled.
   * - A value of false indicates that the feature is disabled.
   * 
   * @example
   * false
   */
  secGroupConnValid?: string;
  /**
   * @remarks
   * Indicates whether the serverless feature is enabled for the current instance.
   * 
   * - A value of true indicates that the feature is enabled.
   * - A value of false indicates that the feature is disabled.
   * 
   * @example
   * false
   */
  serverless?: boolean;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * - **CREATING**: The instance is being created.
   * 
   * - **ACTIVE**: The instance is running.
   * 
   * - **RESOURCE_CHANGING**: The instance specifications are being changed.
   * 
   * - **ORDER_PREPARING**: The order is being confirmed.
   * 
   * - **READONLY_RESOURCE_CHANGING**: The resources are being changed and the instance is locked for writes.
   * 
   * - **DELETING**: The instance is being deleted.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The size of the storage space.
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
   * cn-beijing-h-aliyun
   */
  subDomain?: string;
  /**
   * @remarks
   * The instance label list information.
   */
  tags?: DescribeDBInstanceAttributeResponseBodyTags[];
  /**
   * @remarks
   * The algorithm used for TDE on the instance.
   * 
   * @example
   * AES256
   */
  tdeAlgorithm?: string;
  /**
   * @remarks
   * Indicates whether TDE is enabled for the instance.
   * 
   * @example
   * true
   */
  tdeEnabled?: boolean;
  /**
   * @remarks
   * The TDE mode of the instance.
   * 
   * @example
   * MANAGED
   */
  tdeMode?: string;
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
      tdeAlgorithm: 'TdeAlgorithm',
      tdeEnabled: 'TdeEnabled',
      tdeMode: 'TdeMode',
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
      tdeAlgorithm: 'string',
      tdeEnabled: 'boolean',
      tdeMode: 'string',
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

