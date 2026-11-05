// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMultiPriceRequestOrderItemsComponents extends $dara.Model {
  /**
   * @remarks
   * The key of the module.
   * 
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the module.
   * 
   * The following section describes the sample values and valid values of each key for the Enterprise Edition monthly package:
   * 
   * - RegionId: cn-shanghai
   * - InstanceType: eds.enterprise_office.4c8g
   * - DurationType (hours): Valid values: 
   *    - 120
   *    - 250
   * - OsType: Valid values: 
   *    - Windows
   *    - Linux
   * - RootDiskSize (GiB): 80
   * - RootDiskCategory: Valid values: 
   *    - cloud_efficiency (ultra cloud disk)
   *    - cloud_auto (ESSD AutoPL cloud disk)
   *    - cloud_essd (enhanced standard SSD, supported only by specific instance types)
   * - RootPerformanceLevel: Valid values: 
   *    - PL0
   *    - PL1
   *    - PL2
   *    - PL3
   * - DataDiskSize (GiB): Same as RootDiskSize.
   * - DataDiskCategory: Same as RootDiskCategory.
   * - DataPerformanceLevel: Same as RootPerformanceLevel.
   * 
   * @example
   * cn-shanghai
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

export class DescribeMultiPriceRequestOrderItems extends $dara.Model {
  /**
   * @remarks
   * The purchase quantity.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The list of product modules.
   */
  components?: DescribeMultiPriceRequestOrderItemsComponents[];
  /**
   * @remarks
   * The extended data of the order item, which is passed as a JSON string. The structure varies based on the order scenario. For the billing method change scenario, you can pass the instance and the list of target billing methods. If no extended data is required, you can leave this parameter empty.
   * 
   * @example
   * [{"regionId":"cn-hangzhou","resourceType":"Desktop","chargeType":"POSTPAY","instanceId":"ecd-6wye9optu0kag****"}]
   */
  data?: string;
  /**
   * @remarks
   * The list of instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The subscription period. Valid values:
   * 
   * - When `PeriodUnit` is set to `Year`: 1, 2, and 3.
   * 
   * - When `PeriodUnit` is set to `Month`: 1, 2, 3, and 6.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period.
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the promotion.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionId?: string;
  /**
   * @remarks
   * The list of resource IDs.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The resource type.
   * > This parameter is case-sensitive. Make sure that the spelling is correct.
   * 
   * @example
   * DurationPackage
   */
  resourceType?: string;
  /**
   * @remarks
   * The subscription period of the savings plan. For example, 1Year indicates one year.
   * 
   * @example
   * 1Year
   */
  savingPlanPeriod?: string;
  /**
   * @remarks
   * The unified expiration date, which can be a day from the 1st to the 28th of a month. If you do not specify this parameter, the instance is renewed in the standard way.
   * 
   * @example
   * 15
   */
  unifiedExpireDay?: number;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      components: 'Components',
      data: 'Data',
      instanceIds: 'InstanceIds',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      savingPlanPeriod: 'SavingPlanPeriod',
      unifiedExpireDay: 'UnifiedExpireDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      components: { 'type': 'array', 'itemType': DescribeMultiPriceRequestOrderItemsComponents },
      data: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      savingPlanPeriod: 'string',
      unifiedExpireDay: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The product information.
   */
  orderItems?: DescribeMultiPriceRequestOrderItems[];
  /**
   * @remarks
   * The order type.
   * 
   * @example
   * create
   */
  orderType?: string;
  /**
   * @remarks
   * The package code. You do not need to specify this parameter for non-package types.
   * 
   * @example
   * pacakge
   */
  packageCode?: string;
  /**
   * @remarks
   * The user ID for resource ownership in the reseller pattern. You do not need to specify this parameter for non-reseller patterns.
   * 
   * @example
   * 182864463481****
   */
  resellerOwnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      orderItems: 'OrderItems',
      orderType: 'OrderType',
      packageCode: 'PackageCode',
      resellerOwnerUid: 'ResellerOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderItems: { 'type': 'array', 'itemType': DescribeMultiPriceRequestOrderItems },
      orderType: 'string',
      packageCode: 'string',
      resellerOwnerUid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.orderItems)) {
      $dara.Model.validateArray(this.orderItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

