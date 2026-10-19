// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. It forms a key-value pair with the tag value.
   * > You can specify up to 5 tag key-value pairs in a single request.
   * 
   * @example
   * Storage type
   */
  key?: string;
  /**
   * @remarks
   * The tag value. It forms a key-value pair with the tag key.
   * 
   * @example
   * Development
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The architecture type. Valid values:
   * * **cluster**: cluster edition
   * * **standard**: standard edition
   * * **rwsplit**: read/write splitting edition
   * 
   * @example
   * standard
   */
  architectureType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * * **PrePaid**: subscription
   * * **PostPaid**: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The edition type of the instance. Valid values:
   * * **Community**: open-source Redis
   * * **Enterprise**: Tair Enterprise Edition
   * 
   * @example
   * Enterprise
   */
  editionType?: string;
  /**
   * @remarks
   * The Redis-compatible engine version of the instance. Valid values: **2.8**, **4.0**, **5.0**, **6.0**, and **7.0**.
   * 
   * @example
   * 4.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The expiration status of the instance. Valid values:
   * 
   * * **true**: The instance has expired.
   * * **false**: The instance has not expired.
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * Specifies whether to filter child instances of distributed instances in the returned instance list. Valid values:
   * * **true**: Only child instance information is returned.
   * * **false**: Child instance information is not returned.
   * 
   * @example
   * true
   */
  globalInstance?: boolean;
  /**
   * @remarks
   * The instance specifications. For more information, see [Instance specifications](https://help.aliyun.com/document_detail/107984.html).
   * 
   * @example
   * redis.master.small.default
   */
  instanceClass?: string;
  /**
   * @remarks
   * The IDs of the instances to be queried.
   * > To specify multiple instance IDs, separate the IDs with commas (,). You can specify up to 30 instance IDs in a single request.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * * **Normal**: normal
   * * **Creating**: creating
   * * **Changing**: changing
   * * **Inactive**: disabled
   * * **Flushing**: purge in progress
   * * **Released**: released
   * * **Transforming**: transforming
   * * **Migrating**: migrating
   * * **BackupRecovering**: recovering from backup
   * * **MinorVersionUpgrading**: minor version upgrade in progress
   * * **NetworkModifying**: changing the network type
   * * **SSLModifying**: changing SSL configurations
   * * **MajorVersionUpgrading**: major engine version upgrade in progress, during which the instance remains accessible
   * 
   * > For more information about instance statuses, see [Instance statuses and impacts](https://help.aliyun.com/document_detail/200740.html).
   * 
   * @example
   * Normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * * **Tair**: Tair (Enterprise Edition)
   * * **Redis**: open-source Redis
   * * **Memcache**: Memcache
   * 
   * @example
   * Redis
   */
  instanceType?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * * **CLASSIC**: classic network
   * * **VPC**: VPC
   * 
   * @example
   * CLASSIC
   */
  networkType?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * * **MASTER_SLAVE**: high-availability (dual-replica)
   * * **STAND_ALONE**: single-replica
   * * **double**: dual-replica
   * * **single**: single-replica
   * > For cloud-native instances, select **MASTER_SLAVE** or **STAND_ALONE**. For classic instances, select **double** or **single**.
   * 
   * @example
   * MASTER_SLAVE
   */
  nodeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the instance list. Pages start from **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **50**. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The private IP address in the VPC.
   * 
   * @example
   * 172.16.49.***
   */
  privateIp?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * > When you call this operation, if the **Tag** parameter is specified, this parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * > You can invoke the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation or use the console to obtain the list of resource group IDs. For related operations, see [View the basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The search keyword. Fuzzy match is supported for instance names and instance IDs.
   * 
   * @example
   * apitest
   */
  searchKey?: string;
  securityToken?: string;
  /**
   * @remarks
   * The tag information of the instance.
   */
  tag?: DescribeInstancesRequestTag[];
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1nme44gek34slfc****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hongkong-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      architectureType: 'ArchitectureType',
      chargeType: 'ChargeType',
      editionType: 'EditionType',
      engineVersion: 'EngineVersion',
      expired: 'Expired',
      globalInstance: 'GlobalInstance',
      instanceClass: 'InstanceClass',
      instanceIds: 'InstanceIds',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      networkType: 'NetworkType',
      nodeType: 'NodeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privateIp: 'PrivateIp',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      searchKey: 'SearchKey',
      securityToken: 'SecurityToken',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureType: 'string',
      chargeType: 'string',
      editionType: 'string',
      engineVersion: 'string',
      expired: 'string',
      globalInstance: 'boolean',
      instanceClass: 'string',
      instanceIds: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      networkType: 'string',
      nodeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      privateIp: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      searchKey: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': DescribeInstancesRequestTag },
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

