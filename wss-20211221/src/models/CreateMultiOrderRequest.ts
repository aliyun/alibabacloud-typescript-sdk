// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateMultiOrderRequestOrderItemsComponents extends $dara.Model {
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
   * The following section describes the sample values and valid values for each key of the Enterprise Edition monthly duration package:
   * 
   * - RegionId: ap-southeast-1
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
   *    - cloud_auto (ultra-fast cloud disk)
   *    - cloud_essd (enhanced standard SSD. Only specific instance types support this value.)
   * - RootPerformanceLevel: Valid values: 
   *    - PL0
   *    - PL1
   *    - PL2
   *    - PL3
   * - DataDiskSize (GiB): Valid values are the same as those of RootDiskSize.
   * - DataDiskCategory: Valid values are the same as those of RootDiskCategory.
   * - DataPerformanceLevel: Valid values are the same as those of RootPerformanceLevel.
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

export class CreateMultiOrderRequestOrderItems extends $dara.Model {
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
   * Specifies whether to enable automatic payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Specifies whether this is a change purchase.
   */
  buyChange?: boolean;
  /**
   * @remarks
   * The product modules.
   */
  components?: CreateMultiOrderRequestOrderItemsComponents[];
  /**
   * @remarks
   * The list of instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The callback URL after the payment is completed.
   */
  paidCallBackUrl?: string;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * 
   * - If PeriodUnit is set to Year: 1, 2, 3, and 5.
   * 
   * - If PeriodUnit is set to Month: 1, 2, 3, and 6.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration for a subscription instance.
   * 
   * > This parameter is required only when the billing method of the instance is subscription. This parameter is case-sensitive. Make sure that the value is spelled correctly.
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
   * > For monthly duration packages, this parameter corresponds to the cloud desktop ID. This parameter is required when OrderType is not set to `create`.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The resource type.
   * > This parameter is case-sensitive. Make sure that the value is spelled correctly.
   * 
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
      instanceIds: 'InstanceIds',
      paidCallBackUrl: 'PaidCallBackUrl',
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
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      paidCallBackUrl: 'string',
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

export class CreateMultiOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The channel cookie information.
   */
  channelCookie?: string;
  /**
   * @remarks
   * The product information.
   */
  orderItems?: CreateMultiOrderRequestOrderItems[];
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
   * The extended properties.
   */
  properties?: { [key: string]: string };
  /**
   * @remarks
   * The UID of the reseller owner.
   */
  resellerOwnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      channelCookie: 'ChannelCookie',
      orderItems: 'OrderItems',
      orderType: 'OrderType',
      properties: 'Properties',
      resellerOwnerUid: 'ResellerOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelCookie: 'string',
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

