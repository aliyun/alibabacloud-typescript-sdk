// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBandwidthLimitationRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the instance. For more information, see [Billing overview](https://help.aliyun.com/document_detail/25398.html). Valid values:
   * 
   * - PrePaid: subscription.
   * - PostPaid: pay-as-you-go.
   * 
   * Default value: PostPaid.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The operation type for querying public bandwidth limits. Valid values:
   * 
   * - Upgrade: upgrades the public bandwidth.
   * - Downgrade: downgrades the public bandwidth.
   * - Create: creates an ECS instance.
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
   * The ID of the target region. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * > When you set the OperationType parameter to Upgrade or Downgrade, the ResourceId parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4ph***
   */
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The bidding strategy for pay-as-you-go instances. Valid values:
   * 
   * - NoSpot: a regular pay-as-you-go instance.
   * - SpotWithPriceLimit: a preemptible instance with a user-defined maximum hourly price.
   * - SpotAsPriceGo: a preemptible instance priced at the market price at the time of purchase.
   * 
   * Default value: NoSpot.
   * 
   * > The SpotStrategy parameter takes effect only when the InstanceChargeType parameter is set to PostPaid.
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

