// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesOverviewRequest extends $dara.Model {
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
   * The database engine version of the instance. Valid values: **5.0**, **4.4**, **4.2**, **4.0**, and **3.4**.
   * 
   * @example
   * 4.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The instance type. The instance type varies based on the instance architecture. For more information about instance types supported by different instance architectures, see the following references:
   * 
   * *   [Standalone instance types](https://help.aliyun.com/document_detail/311407.html)
   * *   [Replica set instance types](https://help.aliyun.com/document_detail/311410.html)
   * *   [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html)
   * 
   * @example
   * dds.mongo.2xlarge
   */
  instanceClass?: string;
  /**
   * @remarks
   * The ID of the instance for which you want to query the overview information.
   * 
   * > 
   * 
   * *   If you do not specify this parameter, the overview information of all instances within this account is queried.
   * 
   * *   Separate the instance IDs with commas (,).
   * 
   * @example
   * dds-bp12c5b040dc****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The state of the instance. For more information about valid values, see [Instance states](https://help.aliyun.com/document_detail/63870.html).
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The architecture of the instance. Valid values:
   * 
   * *   **sharding**: sharded cluster instance
   * *   **replicate**: replica set or standalone instance
   * 
   * > 
   * 
   * *   To query the overview information of a sharded cluster instance, you must set the parameter to **sharding**.
   * 
   * *   If you do not specify this parameter, the overview information of all instances within this account is queried.
   * 
   * @example
   * replicate
   */
  instanceType?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **Classic**: classic network
   * *   **VPC**: Virtual Private Cloud (VPC)
   * 
   * @example
   * Classic
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. For more information, see [View the basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to display instance tags. Default value: False.
   * 
   * @example
   * false
   */
  showTags?: boolean;
  /**
   * @remarks
   * The ID of the vSwitch to which the instance is connected.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC in which the instance is deployed.
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

