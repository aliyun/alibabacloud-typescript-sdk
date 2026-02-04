// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesOverviewRequest extends $dara.Model {
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
   * The engine version of the instance. Valid values: **2.8**, **4.0**, **5.0**, **6.0**, and **7.0**.
   * 
   * Valid values:
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
   * The instance type of the instance. For more information, see [Instance types](https://help.aliyun.com/document_detail/107984.html).
   * 
   * @example
   * redis.master.small.default
   */
  instanceClass?: string;
  /**
   * @remarks
   * The IDs of instances.
   * 
   * > By default, all instances that belong to this account are queried. If you specify multiple instance IDs, separate the instance IDs with commas (,).
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
   * *   **Unavailable**: The instance is unavailable.
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
   * The category of the instance. Valid values:
   * 
   * *   **Tair**
   * *   **Redis**
   * *   **Memcache**
   * 
   * @example
   * Redis
   */
  instanceType?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **CLASSIC**: classic network
   * *   **VPC**: Virtual Private Cloud (VPC)
   * 
   * @example
   * CLASSIC
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
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
   * The ID of the region in which the instances you want to query reside. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instances you want to query belong.
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
   * The keyword used for fuzzy search. The keyword can be based on an instance ID or an instance description.
   * 
   * @example
   * apitest
   */
  searchKey?: string;
  securityToken?: string;
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
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      architectureType: 'ArchitectureType',
      chargeType: 'ChargeType',
      editionType: 'EditionType',
      engineVersion: 'EngineVersion',
      instanceClass: 'InstanceClass',
      instanceIds: 'InstanceIds',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      privateIp: 'PrivateIp',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      searchKey: 'SearchKey',
      securityToken: 'SecurityToken',
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
      instanceClass: 'string',
      instanceIds: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      privateIp: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      searchKey: 'string',
      securityToken: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
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

