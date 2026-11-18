// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesOverviewRequest extends $dara.Model {
  /**
   * @remarks
   * The architecture type. Valid values:
   * * **cluster**: Cluster.
   * * **standard**: Standard.
   * * **rwsplit**: Read/write splitting.
   * 
   * @example
   * standard
   */
  architectureType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * * **PrePaid**: Subscription.
   * * **PostPaid**: Pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The edition. Valid values:
   * * **Community**: Community Edition.
   * * **Enterprise**: Enterprise Edition.
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
   * 6.0
   */
  engineVersion?: string;
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
   * The IDs of the instances that you want to query.
   * > By default, all instances under the account are queried. To specify multiple instance IDs, separate the IDs with commas (,).
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * * **Normal**: Running.
   * * **Creating**: Being created.
   * * **Changing**: Being modified.
   * * **Inactive**: Disabled.
   * * **Flushing**: Being purged.
   * * **Released**: Released.
   * * **Transforming**: Being transformed.
   * * **Migrating**: Being migrated.
   * * **BackupRecovering**: Recovering from a backup.
   * * **MinorVersionUpgrading**: Minor version upgrade in progress.
   * * **NetworkModifying**: Modifying the network.
   * * **SSLModifying**: Modifying SSL configurations.
   * * **MajorVersionUpgrading**: Major engine version upgrade in progress. The instance remains accessible.
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
   * * **Tair**
   * * **Redis**
   * * **Memcache**
   * 
   * @example
   * Redis
   */
  instanceType?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * * **CLASSIC**: Classic network.
   * * **VPC**: VPC.
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
   * The VPC IP address.
   * 
   * @example
   * 172.16.49.***
   */
  privateIp?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * > You can invoke the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation or go to the console to obtain the resource group ID. Related operations: [View the basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The keyword used for fuzzy search based on the instance ID or description.
   * 
   * @example
   * apitest
   */
  searchKey?: string;
  securityToken?: string;
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
      nodeType: 'NodeType',
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
      nodeType: 'string',
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

