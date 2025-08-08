// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMultiPriceRequestOrderItemsComponents extends $dara.Model {
  /**
   * @example
   * RegionId
   */
  key?: string;
  /**
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
   * @example
   * 1
   */
  amount?: number;
  components?: DescribeMultiPriceRequestOrderItemsComponents[];
  instanceIds?: string[];
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionId?: string;
  resourceIds?: string[];
  /**
   * @example
   * DurationPackage
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      components: 'Components',
      instanceIds: 'InstanceIds',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      components: { 'type': 'array', 'itemType': DescribeMultiPriceRequestOrderItemsComponents },
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
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
  orderItems?: DescribeMultiPriceRequestOrderItems[];
  /**
   * @example
   * create
   */
  orderType?: string;
  /**
   * @example
   * pacakge
   */
  packageCode?: string;
  /**
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

