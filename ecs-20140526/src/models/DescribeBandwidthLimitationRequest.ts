// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBandwidthLimitationRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the instance. For more information, see [Billing overview](https://help.aliyun.com/document_detail/25398.html). Valid values:
   * 
   * *   PrePaid: subscription
   * *   PostPaid: pay-as-you-go
   * 
   * Default value: PostPaid.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance type. For information about the values, see [Overview of ECS instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies the operation for which to query the maximum public bandwidth. Valid values:
   * 
   * *   Upgrade: upgrades the public bandwidth.
   * *   Downgrade: downgrades the public bandwidth.
   * *   Create: creates an ECS instance.
   * 
   * Default value: Create.
   * 
   * @example
   * Upgrade
   */
  operationType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * >  This parameter is required when the OperationType parameter is set to Upgrade or Downgrade.
   * 
   * @example
   * i-bp67acfmxazb4ph***
   */
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The bidding policy for the pay-as-you-go instance. Valid values:
   * 
   * *   NoSpot: The instance is a pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is a preemptible instance for which you can specify the maximum hourly price.
   * *   SpotAsPriceGo: The instance is a preemptible instance for which the market price at the time of purchase is automatically used as the bid price. The market price can be up to the pay-as-you-go price.
   * 
   * Default value: NoSpot.
   * 
   * >  The SpotStrategy parameter takes effect only when the InstanceChargeType parameter is set to PostPaid.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      instanceChargeType: 'InstanceChargeType',
      instanceType: 'InstanceType',
      operationType: 'OperationType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      spotStrategy: 'SpotStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceChargeType: 'string',
      instanceType: 'string',
      operationType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      spotStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

