// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesResponseBodyItemsFEClusterList extends $dara.Model {
  /**
   * @remarks
   * The name of the FE cluster.
   * 
   * @example
   * selectdb-cn-demo12345-fe
   */
  dbClusterId?: string;
  /**
   * @remarks
   * The number of nodes in the FE cluster.
   * 
   * @example
   * 0
   */
  nodeCount?: number;
  /**
   * @remarks
   * The number of CPU cores per node in the FE cluster.
   * 
   * @example
   * 0
   */
  singleNodeCpuCores?: number;
  /**
   * @remarks
   * The memory per node in the FE cluster. Unit: GB.
   * 
   * @example
   * 0
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

export class DescribeDBInstancesResponseBodyItemsMultiZone extends $dara.Model {
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
   * cn-beijing-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchIds: 'VSwitchIds',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeDBInstancesResponseBodyItemsTags extends $dara.Model {
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

export class DescribeDBInstancesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The edition of the instance. Default value: basic.
   * 
   * @example
   * basic
   */
  category?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go
   * 
   * - **Prepaid**: subscription
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The total number of clusters.
   * 
   * @example
   * 1
   */
  clusterCount?: number;
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
   * The deployment mode of the instance. Valid values:
   * 
   * - multi_az: zone-redundant
   * - single_az: locally redundant
   * 
   * @example
   * single_az
   */
  deployScheme?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * New instance test
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
   * 4.0.4
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
   * The expiration time of the cluster. The time is displayed in ISO 8601 format and includes the time zone.
   * > This parameter is returned only for clusters whose billing method is **Prepaid** (subscription). For clusters whose billing method is **Postpaid** (pay-as-you-go), an empty value is returned.
   * 
   * @example
   * 2024-03-29T03:47:05Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The FE cluster list.
   */
  FEClusterList?: DescribeDBInstancesResponseBodyItemsFEClusterList[];
  /**
   * @remarks
   * The time when the task was created (GMT).
   * 
   * @example
   * 2023-08-12T04:14Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the task was modified (GMT).
   * 
   * @example
   * 2023-08-12T19:05Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The usage type of the instance.
   * 
   * @example
   * Instance
   */
  instanceUsedType?: string;
  /**
   * @remarks
   * Indicates whether the instance is deleted. Valid values:
   * 
   * - **true**: deleted
   * 
   * - **fasle**: not deleted
   * 
   * @example
   * false
   */
  isDeleted?: boolean;
  /**
   * @remarks
   * The lock mode of the instance.
   * 
   * @example
   * 0
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
   * The end timestamp of the maintenance window.
   * 
   * @example
   * Reserved parameter. Not returned
   */
  maintainEndTimeStr?: string;
  /**
   * @remarks
   * Reserved parameter. Not returned. Therefore, the time format does not apply.
   * 
   * @example
   * Reserved parameter. Not returned
   */
  maintainEndtime?: string;
  /**
   * @remarks
   * The start timestamp of the maintenance window.
   * 
   * @example
   * Reserved parameter. Not returned
   */
  maintainStartTimeStr?: string;
  /**
   * @remarks
   * Reserved parameter. Not returned. Therefore, the time format does not apply.
   * 
   * @example
   * Reserved parameter. Not returned
   */
  maintainStarttime?: string;
  /**
   * @remarks
   * The multi-zone configuration.
   */
  multiZone?: DescribeDBInstancesResponseBodyItemsMultiZone[];
  /**
   * @remarks
   * The instance storage size. Unit: GB.
   * 
   * @example
   * 200
   */
  objectStoreSize?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * Reserved parameter. Not returned
   */
  parentInstance?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The CPU resources.
   * 
   * @example
   * 8
   */
  resourceCpu?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * Reserved parameter. Not returned
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The memory resources.
   * 
   * @example
   * 64
   */
  resourceMemory?: number;
  /**
   * @remarks
   * The maximum value of the automatic scaling range for the RDS Capacity Unit (RCU) of the instance.
   * 
   * @example
   * 0
   */
  scaleMax?: number;
  /**
   * @remarks
   * The minimum value of the automatic scaling range for the RDS Capacity Unit (RCU) of the instance.
   * 
   * @example
   * 0
   */
  scaleMin?: number;
  /**
   * @remarks
   * The redundant field.
   * 
   * @example
   * Empty
   */
  scaleReplica?: number;
  /**
   * @remarks
   * Indicates whether the instance is a serverless instance.
   * 
   * @example
   * false
   */
  serverless?: boolean;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * - **CREATING**: Creating.
   * - **ACTIVATION**: Running.
   * - **RESOURCE_CHANGING**: Changing specifications.
   * - **ORDER_PREPARING**: Confirming order.
   * - **READONLY_RESOURCE_CHANGING**: Changing resources (the instance is locked for write operations).
   * - **DELETING**: Deleting.
   * 
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
   * @remarks
   * The storage space size.
   * 
   * @example
   * 100
   */
  storageSize?: number;
  /**
   * @remarks
   * The instance storage type.
   * 
   * @example
   * cloud_essd
   */
  storageType?: string;
  /**
   * @remarks
   * The instance tags.
   */
  tags?: DescribeDBInstancesResponseBodyItemsTags[];
  /**
   * @remarks
   * Indicates whether TDE is enabled.
   */
  tdeEnabled?: boolean;
  /**
   * @remarks
   * The ID of the Prometheus monitoring cluster.
   * 
   * @example
   * Reserved parameter. Not returned
   */
  tenantClusterId?: string;
  /**
   * @remarks
   * The access token for Prometheus monitoring.
   * 
   * @example
   * Reserved parameter. Not returned
   */
  tenantToken?: string;
  /**
   * @remarks
   * The user account label for Prometheus monitoring.
   * 
   * @example
   * Reserved parameter. Not returned
   */
  tenantUserId?: string;
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
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vswitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  /**
   * @remarks
   * The connection endpoint.
   * 
   * @example
   * Not returned
   */
  connectionString?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      chargeType: 'ChargeType',
      clusterCount: 'ClusterCount',
      DBInstanceId: 'DBInstanceId',
      deployScheme: 'DeployScheme',
      description: 'Description',
      engine: 'Engine',
      engineMinorVersion: 'EngineMinorVersion',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      FEClusterList: 'FEClusterList',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      instanceUsedType: 'InstanceUsedType',
      isDeleted: 'IsDeleted',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainEndTimeStr: 'MaintainEndTimeStr',
      maintainEndtime: 'MaintainEndtime',
      maintainStartTimeStr: 'MaintainStartTimeStr',
      maintainStarttime: 'MaintainStarttime',
      multiZone: 'MultiZone',
      objectStoreSize: 'ObjectStoreSize',
      parentInstance: 'ParentInstance',
      regionId: 'RegionId',
      resourceCpu: 'ResourceCpu',
      resourceGroupId: 'ResourceGroupId',
      resourceMemory: 'ResourceMemory',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      scaleReplica: 'ScaleReplica',
      serverless: 'Serverless',
      status: 'Status',
      storageSize: 'StorageSize',
      storageType: 'StorageType',
      tags: 'Tags',
      tdeEnabled: 'TdeEnabled',
      tenantClusterId: 'TenantClusterId',
      tenantToken: 'TenantToken',
      tenantUserId: 'TenantUserId',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
      connectionString: 'connectionString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      chargeType: 'string',
      clusterCount: 'number',
      DBInstanceId: 'string',
      deployScheme: 'string',
      description: 'string',
      engine: 'string',
      engineMinorVersion: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      FEClusterList: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyItemsFEClusterList },
      gmtCreated: 'string',
      gmtModified: 'string',
      instanceUsedType: 'string',
      isDeleted: 'boolean',
      lockMode: 'number',
      lockReason: 'string',
      maintainEndTimeStr: 'string',
      maintainEndtime: 'string',
      maintainStartTimeStr: 'string',
      maintainStarttime: 'string',
      multiZone: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyItemsMultiZone },
      objectStoreSize: 'number',
      parentInstance: 'string',
      regionId: 'string',
      resourceCpu: 'number',
      resourceGroupId: 'string',
      resourceMemory: 'number',
      scaleMax: 'number',
      scaleMin: 'number',
      scaleReplica: 'number',
      serverless: 'boolean',
      status: 'string',
      storageSize: 'number',
      storageType: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyItemsTags },
      tdeEnabled: 'boolean',
      tenantClusterId: 'string',
      tenantToken: 'string',
      tenantUserId: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
      connectionString: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.FEClusterList)) {
      $dara.Model.validateArray(this.FEClusterList);
    }
    if(Array.isArray(this.multiZone)) {
      $dara.Model.validateArray(this.multiZone);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of instance details.
   */
  items?: DescribeDBInstancesResponseBodyItems[];
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * - **30**: Default value.
   * - **50**
   * - **100**
   * 
   * @example
   * 30
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC854513-E85E-54F3-9842-B9CCD3308CDD
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

