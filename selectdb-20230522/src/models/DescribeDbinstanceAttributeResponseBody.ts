// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceAttributeResponseBodyDBClusterList } from "./DescribeDbinstanceAttributeResponseBodyDbclusterList";
import { DescribeDBInstanceAttributeResponseBodyMultiZone } from "./DescribeDbinstanceAttributeResponseBodyMultiZone";
import { DescribeDBInstanceAttributeResponseBodyTags } from "./DescribeDbinstanceAttributeResponseBodyTags";


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
  vSwitchId?: string;
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
      status: 'Status',
      storageSize: 'StorageSize',
      subDomain: 'SubDomain',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canUpgradeVersions: { 'type': 'array', 'itemType': 'string' },
      chargeType: 'string',
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
      status: 'string',
      storageSize: 'number',
      subDomain: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyTags },
      vSwitchId: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

