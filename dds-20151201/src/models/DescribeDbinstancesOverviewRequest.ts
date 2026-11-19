// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesOverviewRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * - **PrePaid**: subscription.
   * - **PostPaid**: pay-as-you-go.
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
   * The instance type. For more information about the instance types of different architectures, see the following topics:
   * 
   * - [Standalone instance types](https://help.aliyun.com/document_detail/311407.html)
   * - [Replica set instance types](https://help.aliyun.com/document_detail/311410.html)
   * - [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html)
   * 
   * <props="china">
   * > You do not need to specify this parameter for serverless instances.
   * 
   * @example
   * dds.mongo.2xlarge
   */
  instanceClass?: string;
  /**
   * @remarks
   * The IDs of the instances whose overview information you want to query.
   * 
   * > - If you do not specify this parameter, the overview information of all instances within the current Alibaba Cloud account is queried by default.
   * > - You can specify multiple instance IDs. Separate multiple instance IDs with commas (,).
   * 
   * @example
   * dds-bp12c5b040dc****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The status of the instance. For more information, see [Instance statuses](https://help.aliyun.com/document_detail/63870.html).
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The architecture of the instance. Valid values: 
   * - **sharding**: sharded cluster instance.
   * - **replicate**: replica set or standalone instance.
   * <props="china">
   * - **serverless**: serverless instance.
   * 
   * 
   * > - Specify this parameter based on your business requirements. For example, if you want to query the overview information of sharded cluster instances, set this parameter to **sharding**.
   * > - If you do not specify this parameter, the overview information of all instances is queried by default.
   * 
   * @example
   * replicate
   */
  instanceType?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * - **Classic**: classic network.
   * - **VPC**: VPC.
   * 
   * @example
   * Classic
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. For more information, see [View the basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether the instance tag label is displayed. Default value: false.
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
   * The ID of the virtual private cloud (VPC).
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

