// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. A tag is a key-value pair.
   * 
   * >  A maximum of five key-value pairs can be specified at a time.
   * 
   * @example
   * Storage type
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * Local disk
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
   * The architecture of the instance. Valid values:
   * 
   * *   **cluster**: cluster architecture
   * *   **standard**: standard architecture
   * *   **rwsplit**: read/write splitting architecture
   * 
   * @example
   * standard
   */
  architectureType?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PrePaid**: subscription
   * *   **PostPaid**: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The edition of the instance. Valid values:
   * 
   * *   **Community**: Redis Open-Source Edition
   * *   **Enterprise**: Tair (Enterprise Edition)
   * 
   * @example
   * Enterprise
   */
  editionType?: string;
  /**
   * @remarks
   * The database engine version of the instance. Valid values: **2.8**, **4.0**, **5.0**, **6.0**, and **7.0**.
   * 
   * Enumerated values:
   * 
   * *   1.0
   * *   2.8
   * *   4.0
   * *   5.0
   * *   6.0
   * *   7.0
   * 
   * @example
   * 4.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * Specifies whether the instance has expired. Valid values:
   * 
   * *   **true**: The instance has expired.
   * *   **false**: The instance has not expired.
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * Specifies whether to return the child instances of distributed instances. Valid values:
   * 
   * *   **true**: Only child instances are returned.
   * *   **false**: Child instances are not returned.
   * 
   * @example
   * true
   */
  globalInstance?: boolean;
  /**
   * @remarks
   * The instance type of the instance. For more information, see [Instance types](https://help.aliyun.com/document_detail/107984.html).
   * 
   * @example
   * redis.master.small.default
   */
  instanceClass?: string;
  /**
   * @remarks
   * The IDs of the instances that you want to query.
   * 
   * >  If you want to specify multiple instance IDs, separate the instance IDs with commas (,). You can specify a maximum of 30 instance IDs in a single request.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The state of the instance. Valid values:
   * 
   * *   **Normal**: The instance is normal.
   * *   **Creating**: The instance is being created.
   * *   **Changing**: The configurations of the instance are being changed.
   * *   **Inactive**: The instance is disabled.
   * *   **Flushing**: The instance is being released.
   * *   **Released**: The instance is released.
   * *   **Transforming**: The billing method of the instance is being changed.
   * *   **Unavailable**: The instance is suspended.
   * *   **Error**: The instance failed to be created.
   * *   **Migrating**: The instance is being migrated.
   * *   **BackupRecovering**: The instance is being restored from a backup.
   * *   **MinorVersionUpgrading**: The minor version of the instance is being updated.
   * *   **NetworkModifying**: The network type of the instance is being changed.
   * *   **SSLModifying**: The SSL certificate of the instance is being changed.
   * *   **MajorVersionUpgrading**: The major version of the instance is being upgraded. The instance remains accessible during the upgrade.
   * 
   * > For more information about instance states, see [Instance states and impacts](https://help.aliyun.com/document_detail/200740.html).
   * 
   * @example
   * Normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * *   **Tair**: Tair (Enterprise Edition)
   * *   **Redis**: Redis Open-Source Edition
   * *   **Memcache**
   * 
   * @example
   * Redis
   */
  instanceType?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   **CLASSIC**
   * *   **VPC**
   * 
   * @example
   * CLASSIC
   */
  networkType?: string;
  nodeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The private IP address of the instance.
   * 
   * @example
   * 172.16.49.***
   */
  privateIp?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * > When you call this operation and specify the **Tag** parameter, you must also specify this parameter.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * > You can query resource group IDs by using the Tair (Redis OSS-compatible) console or by calling the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation. For more information, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The keyword used for fuzzy search. The keyword can be based on an instance name or an instance ID.
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
   * The zone ID of the instance.
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

