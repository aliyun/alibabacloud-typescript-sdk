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
   * The following example values and valid values are for the Enterprise Edition monthly duration package:
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
   *    - cloud_efficiency: ultra cloud disk
   *    - cloud_auto: ESSD AutoPL cloud disk
   *    - cloud_essd: enhanced standard SSD. Only specific instance types support this value.
   * - RootPerformanceLevel: Valid values: 
   *    - PL0
   *    - PL1
   *    - PL2
   *    - PL3
   * - DataDiskSize (GiB): same as RootDiskSize
   * - DataDiskCategory: same as RootDiskCategory
   * - DataPerformanceLevel: same as RootPerformanceLevel
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
  data?: string;
  /**
   * @remarks
   * The list of instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The subscription duration. Valid values:
   * 
   * - If PeriodUnit is set to Year: 1, 2, or 3.
   * 
   * - If PeriodUnit is set to Month: 1, 2, 3, or 6.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration.
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The promotion ID.
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
   * > This parameter is case-sensitive. Make sure that the value is spelled correctly.
   * 
   * @example
   * DurationPackage
   */
  resourceType?: string;
  savingPlanPeriod?: string;
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
   * The user ID of the resource ownership in reseller pattern. You do not need to specify this parameter in non-reseller pattern.
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

