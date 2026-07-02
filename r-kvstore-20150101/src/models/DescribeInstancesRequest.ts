// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. The tag key and value together form a key-value pair.
   * > A maximum of 5 tag key-value pairs can be specified at a time.
   * 
   * @example
   * 存储类型
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. The tag value and key together form a key-value pair.
   * 
   * @example
   * 开发
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
   * * **cluster**: cluster.
   * * **standard**: standard.
   * * **rwsplit**: read/write splitting.
   * 
   * @example
   * standard
   */
  architectureType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * * **PrePaid**: subscription.
   * * **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The edition of the instance. Valid values:
   * * **Community**: ApsaraDB for Redis Community Edition.
   * * **Enterprise**: Tair Enhanced Edition.
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
   * * **true**: expired.
   * * **false**: not expired.
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * Specifies whether to filter child instances of distributed instances from the returned instance list. Valid values:
   * * **true**: returns only child instance information.
   * * **false**: does not return child instance information.
   * 
   * @example
   * true
   */
  globalInstance?: boolean;
  /**
   * @remarks
   * The instance type. For more information, see [Instance types](https://help.aliyun.com/document_detail/107984.html).
   * 
   * @example
   * redis.master.small.default
   */
  instanceClass?: string;
  /**
   * @remarks
   * The IDs of the instances to query.
   * > To specify multiple instance IDs, separate them with commas (,). A maximum of 30 instance IDs can be specified in a single request.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * * **Normal**: normal.
   * * **Creating**: being created.
   * * **Changing**: being changed.
   * * **Inactive**: disabled.
   * * **Flushing**: being flushed.
   * * **Released**: released.
   * * **Transforming**: being transformed.
   * * **Migrating**: being migrated.
   * * **BackupRecovering**: being restored from a backup.
   * * **MinorVersionUpgrading**: minor version being upgraded.
   * * **NetworkModifying**: network type being changed.
   * * **SSLModifying**: SSL being changed.
   * * **MajorVersionUpgrading**: major version being upgraded. The instance can be accessed normally.
   * 
   * > For more information about instance statuses, see [Instance statuses and impacts](https://help.aliyun.com/document_detail/200740.html).
   * 
   * @example
   * Normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The category of the instance. Valid values:
   * * **Tair**: Tair (Enhanced Edition)
   * * **Redis**: ApsaraDB for Redis Community Edition
   * * **Memcache**
   * 
   * @example
   * Redis
   */
  instanceType?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * * **CLASSIC**: classic network.
   * * **VPC**: virtual private cloud (VPC).
   * 
   * @example
   * CLASSIC
   */
  networkType?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * * **MASTER_SLAVE**: high availability (dual-replica)
   * * **STAND_ALONE**: single replica
   * * **double**: dual-replica
   * * **single**: single replica
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
   * The maximum number of entries per page. Maximum value: **50**. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The private IP address of the VPC.
   * 
   * @example
   * 172.16.49.***
   */
  privateIp?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * > When calling this API, if the **Tag** parameter is specified, this parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * > You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) API or use the console to obtain the list of resource group IDs. For more information, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The keyword used for fuzzy search by instance name or instance ID.
   * 
   * @example
   * apitest
   */
  searchKey?: string;
  securityToken?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tag?: DescribeInstancesRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
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

