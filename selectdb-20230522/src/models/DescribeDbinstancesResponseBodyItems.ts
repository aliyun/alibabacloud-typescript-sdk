// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancesResponseBodyItemsMultiZone } from "./DescribeDbinstancesResponseBodyItemsMultiZone";
import { DescribeDBInstancesResponseBodyItemsTags } from "./DescribeDbinstancesResponseBodyItemsTags";


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
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
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
  deployScheme?: string;
  /**
   * @remarks
   * The description of the instance.
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
   * The time when the cluster expires.
   * 
   * >  A specific value is returned only for subscription clusters whose billing method is **Prepaid**. For pay-as-you-go clusters whose billing method is **Postpaid**, no value is returned.
   * 
   * @example
   * 2024-03-29T03:47:05Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the task was created. The time is displayed in UTC.
   * 
   * @example
   * 2023-08-12T04:14Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the task was last modified. The time is displayed in UTC.
   * 
   * @example
   * 2023-08-12T19:05Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * Instance
   */
  instanceUsedType?: string;
  /**
   * @remarks
   * Indicates whether the instance is deleted. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   */
  maintainEndTimeStr?: string;
  /**
   * @remarks
   * The end time of the instance maintenance window.
   */
  maintainEndtime?: string;
  /**
   * @remarks
   * The start timestamp of the maintenance window.
   */
  maintainStartTimeStr?: string;
  /**
   * @remarks
   * The start time of the instance maintenance window.
   */
  maintainStarttime?: string;
  multiZone?: DescribeDBInstancesResponseBodyItemsMultiZone[];
  /**
   * @remarks
   * The storage capacity of the instance. Unit: GB.
   * 
   * @example
   * 200
   */
  objectStoreSize?: number;
  /**
   * @remarks
   * The time when the instance was created.
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
   * The number of CPU cores of the instance.
   * 
   * @example
   * 8
   */
  resourceCpu?: number;
  /**
   * @remarks
   * The ID of the resource group.
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The memory capacity of the instance.
   * 
   * @example
   * 64
   */
  resourceMemory?: number;
  /**
   * @remarks
   * The maximum number of RCUs.
   * 
   * @example
   * 0
   */
  scaleMax?: number;
  /**
   * @remarks
   * The minimum number of RDS capacity units (RCUs).
   * 
   * @example
   * 0
   */
  scaleMin?: number;
  /**
   * @remarks
   * This parameter is not returned.
   */
  scaleReplica?: number;
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
   * 100
   */
  storageSize?: number;
  /**
   * @remarks
   * The storage type of the instance.
   * 
   * @example
   * cloud_essd
   */
  storageType?: string;
  /**
   * @remarks
   * The details about each tag returned.
   */
  tags?: DescribeDBInstancesResponseBodyItemsTags[];
  /**
   * @remarks
   * The ID of the cluster that is monitored by Managed Service for Prometheus.
   */
  tenantClusterId?: string;
  /**
   * @remarks
   * The token that is used to access Managed Service for Prometheus.
   */
  tenantToken?: string;
  /**
   * @remarks
   * The ID of the account that uses Managed Service for Prometheus.
   */
  tenantUserId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
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
   * The connection string of the instance.
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
      status: 'Status',
      storageSize: 'StorageSize',
      storageType: 'StorageType',
      tags: 'Tags',
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
      status: 'string',
      storageSize: 'number',
      storageType: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyItemsTags },
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

