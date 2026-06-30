// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMultiPriceRequestOrderItemsComponents extends $dara.Model {
  /**
   * @remarks
   * The key of the component.
   * 
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the component.
   * 
   * The following are the keys and their sample or enumerated values for a monthly duration package of the enterprise edition:
   * 
   * - `RegionId`: cn-shanghai
   * 
   * - `InstanceType`: eds.enterprise_office.4c8g
   * 
   * - `DurationType` (in hours): [enum]
   * 
   *   - 120
   * 
   *   - 250
   * 
   * - `OsType`: [enum]
   * 
   *   - Windows
   * 
   *   - Linux
   * 
   * - `RootDiskSize` (in GiB): 80
   * 
   * - `RootDiskCategory`: [enum]
   * 
   *   - `cloud_efficiency` (Ultra Cloud Disk)
   * 
   *   - `cloud_auto` (AutoPL Cloud Disk)
   * 
   *   - `cloud_essd` (Enhanced SSD (ESSD), available only for specific instance types)
   * 
   * - `RootPerformanceLevel`: [enum]
   * 
   *   - PL0
   * 
   *   - PL1
   * 
   *   - PL2
   * 
   *   - PL3
   * 
   * - `DataDiskSize` (in GiB): Same as `RootDiskSize`.
   * 
   * - `DataDiskCategory`: Same as `RootDiskCategory`.
   * 
   * - `DataPerformanceLevel`: Same as `RootPerformanceLevel`.
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
   * The quantity to purchase.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * A list of components.
   */
  components?: DescribeMultiPriceRequestOrderItemsComponents[];
  data?: string;
  /**
   * @remarks
   * A list of instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The subscription period. Valid values:
   * 
   * - If `PeriodUnit` is `Year`, the valid values are 1, 2, and 3.
   * 
   * - If `PeriodUnit` is `Month`, the valid values are 1, 2, 3, and 6.
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
   * The promotion ID.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionId?: string;
  /**
   * @remarks
   * A list of resource IDs.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * > The value is case-sensitive.
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
   * The order items.
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
   * The package code. This parameter is not required for non-package types.
   * 
   * @example
   * pacakge
   */
  packageCode?: string;
  /**
   * @remarks
   * The ID of the user who owns the resource in the reseller model. This parameter is not required in non-reseller mode.
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

