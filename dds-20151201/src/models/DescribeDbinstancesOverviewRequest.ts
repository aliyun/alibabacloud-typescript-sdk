// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesOverviewRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **PrePaid**: subscription
   * 
   * - **PostPaid**: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The database engine version of the instance. Valid values: **5.0**, **4.4**, **4.2**, **4.0**, and **3.4**.
   * 
   * @example
   * 4.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The instance type. For more information about the instance types available for different instance architectures, see:
   * 
   * - [Standalone instance types](https://help.aliyun.com/document_detail/311407.html)
   * 
   * - [Replica set instance types](https://help.aliyun.com/document_detail/311410.html)
   * 
   * - [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html)
   * 
   * <props="china">
   * 
   * > This parameter is not required for Serverless instances.
   * 
   * @example
   * dds.mongo.2xlarge
   */
  instanceClass?: string;
  /**
   * @remarks
   * The ID of the instance whose overview you want to query.
   * 
   * > - If you do not specify this parameter, an overview of all instances in your Alibaba Cloud account is returned.
   * >
   * > - You can specify multiple instance IDs. Separate the IDs with commas (,).
   * 
   * @example
   * dds-bp12c5b040dc****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The status of the instance. For more information, see [Instance states](https://help.aliyun.com/document_detail/63870.html).
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The instance architecture. Valid values:
   * 
   * - **sharding**: sharded cluster instance
   * 
   * - **replicate**: replica set or standalone instance
   * 
   * <props="china">
   * 
   * - **serverless**: Serverless instance
   * 
   * 
   * 
   * 
   * > * Set this parameter as needed. For example, to query the overview of a sharded cluster instance, set this parameter to **sharding**.
   * >
   * > * If you do not specify this parameter, an overview of all instances is returned.
   * 
   * @example
   * replicate
   */
  instanceType?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * - **Classic**: classic network
   * 
   * - **VPC**: virtual private cloud (VPC)
   * 
   * @example
   * Classic
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) to query the latest region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. For more information about resource groups, see [View basic information about a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to return instance tags. The default value is false.
   * 
   * @example
   * false
   */
  showTags?: boolean;
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
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      engineVersion: 'EngineVersion',
      instanceClass: 'InstanceClass',
      instanceIds: 'InstanceIds',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      showTags: 'ShowTags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      engineVersion: 'string',
      instanceClass: 'string',
      instanceIds: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      showTags: 'boolean',
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

