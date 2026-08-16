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
   * The list of product modules.
   */
  components?: DescribeMultiPriceRequestOrderItemsComponents[];
  /**
   * @remarks
   * The extended properties.
   */
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
   * 
   * @example
   * DurationPackage
   */
  resourceType?: string;
  /**
   * @remarks
   * The period of the savings plan.
   */
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
   * The package code. You do not need to specify this parameter if the product is not a package.
   * 
   * @example
   * pacakge
   */
  packageCode?: string;
  /**
   * @remarks
   * The user ID of resource ownership in the reselling pattern. You do not need to specify this parameter if the product is not in the reselling pattern.
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

