// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateMultiOrderRequestOrderItemsComponents extends $dara.Model {
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

export class CreateMultiOrderRequestOrderItems extends $dara.Model {
  /**
   * @example
   * 1
   */
  amount?: number;
  /**
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @example
   * false
   */
  autoRenew?: boolean;
  buyChange?: boolean;
  components?: CreateMultiOrderRequestOrderItemsComponents[];
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DurationPackage
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      buyChange: 'BuyChange',
      components: 'Components',
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
      autoPay: 'boolean',
      autoRenew: 'boolean',
      buyChange: 'boolean',
      components: { 'type': 'array', 'itemType': CreateMultiOrderRequestOrderItemsComponents },
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
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMultiOrderRequest extends $dara.Model {
  orderItems?: CreateMultiOrderRequestOrderItems[];
  /**
   * @example
   * create
   */
  orderType?: string;
  properties?: { [key: string]: string };
  resellerOwnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      orderItems: 'OrderItems',
      orderType: 'OrderType',
      properties: 'Properties',
      resellerOwnerUid: 'ResellerOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderItems: { 'type': 'array', 'itemType': CreateMultiOrderRequestOrderItems },
      orderType: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      resellerOwnerUid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.orderItems)) {
      $dara.Model.validateArray(this.orderItems);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

