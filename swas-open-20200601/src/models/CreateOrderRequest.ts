// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrderRequestBusinessInfoPromotionOptionsPromotionFilter extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use a voucher. Valid values:
   * - **true**: A voucher is used.
   * - **false**: No voucher is used.
   * Default value: **false**.
   * 
   * @example
   * False
   */
  useCoupon?: boolean;
  static names(): { [key: string]: string } {
    return {
      useCoupon: 'UseCoupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      useCoupon: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderRequestBusinessInfoPromotionOptions extends $dara.Model {
  /**
   * @remarks
   * The activity ID.
   */
  activityId?: string;
  /**
   * @remarks
   * The promotion filter.
   */
  promotionFilter?: CreateOrderRequestBusinessInfoPromotionOptionsPromotionFilter;
  /**
   * @remarks
   * The promotion option code.
   * 
   * @example
   * youhui_quan
   */
  promotionOptionCode?: string;
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * 802681580959
   */
  promotionOptionNo?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      promotionFilter: 'PromotionFilter',
      promotionOptionCode: 'PromotionOptionCode',
      promotionOptionNo: 'PromotionOptionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      promotionFilter: CreateOrderRequestBusinessInfoPromotionOptionsPromotionFilter,
      promotionOptionCode: 'string',
      promotionOptionNo: 'string',
    };
  }

  validate() {
    if(this.promotionFilter && typeof (this.promotionFilter as any).validate === 'function') {
      (this.promotionFilter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderRequestBusinessInfo extends $dara.Model {
  /**
   * @remarks
   * The language environment. Default value: Chinese.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * The order source.
   * 
   * @example
   * -
   */
  orderSource?: string;
  /**
   * @remarks
   * The promotion option information.
   */
  promotionOptions?: CreateOrderRequestBusinessInfoPromotionOptions;
  /**
   * @remarks
   * Specifies whether to use a voucher. Valid values:
   * - **true**: A voucher is used.
   * - **false**: No voucher is used.
   * Default value: **false**.
   * 
   * @example
   * false
   */
  useCoupon?: boolean;
  /**
   * @remarks
   * The WeChat product type.
   */
  weChatProType?: string;
  /**
   * @remarks
   * The channel cookie value.
   * 
   * @example
   * IaEvKFpwjO1lMRzGWyJdT9KWob7ruIK%2F2zTcdPRkQ%2BIDp5GIJSQT%2FL3qUUcjJ3KQfud3NrMUlEqLaJWWIVwJgw%3D%3D
   */
  lxChannelCookieValue?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunLang: 'AliyunLang',
      orderSource: 'OrderSource',
      promotionOptions: 'PromotionOptions',
      useCoupon: 'UseCoupon',
      weChatProType: 'WeChatProType',
      lxChannelCookieValue: 'lx_channel_cookie_value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      orderSource: 'string',
      promotionOptions: CreateOrderRequestBusinessInfoPromotionOptions,
      useCoupon: 'boolean',
      weChatProType: 'string',
      lxChannelCookieValue: 'string',
    };
  }

  validate() {
    if(this.promotionOptions && typeof (this.promotionOptions as any).validate === 'function') {
      (this.promotionOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderRequestCommodity extends $dara.Model {
  /**
   * @remarks
   * The number of Simple Application Server instances to create. Valid values: 1 to 20. Default value: 1.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether automatic payment is enabled for the order. Valid values:
   * - **true**: Automatic payment.
   * - **false**: No automatic payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal upon expiration. Valid values:
   * - true: Auto-renewal is enabled.
   * - false: Auto-renewal is disabled.
   * Default value: false.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period. Valid values:
   * - If PeriodUnit is set to Year: 1, 2, and 3.
   * - If PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * Server
   */
  commodityType?: string;
  /**
   * @remarks
   * The size of the mounted data cloud disk. Unit: GB. Valid values: 0 to 16380. The value must be a multiple of 20. Default value: 0.
   * 
   * @example
   * 0
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * The image ID. You can call the [ListImages](https://help.aliyun.com/document_detail/189313.html) operation to query available image IDs in a specified region.
   * 
   * @example
   * 3e8eea0c00a04ff0b34a3ad8f1df455a
   */
  imageId?: string;
  /**
   * @remarks
   * The IDs of the Simple Application Server instances.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The billing method. Valid values:
   * - Prepaid: subscription.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription period. Valid values: 1 to 20. Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period. Valid values:
   * - Month: monthly billing.
   * - Year: yearly billing.
   * Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The plan ID. You can call the [ListPlans](https://help.aliyun.com/document_detail/189314.html) operation to query all plans in a specified region.
   * 
   * @example
   * swas.s.c2m1s30b1.linux
   */
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      commodityType: 'CommodityType',
      dataDiskSize: 'DataDiskSize',
      imageId: 'ImageId',
      instanceIds: 'InstanceIds',
      payType: 'PayType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      commodityType: 'string',
      dataDiskSize: 'number',
      imageId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      payType: 'string',
      period: 'number',
      periodUnit: 'string',
      planId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The additional parameter for business information.
   */
  businessInfo?: CreateOrderRequestBusinessInfo;
  /**
   * @remarks
   * The order configuration information.
   * 
   * This parameter is required.
   */
  commodity?: CreateOrderRequestCommodity;
  /**
   * @remarks
   * The coupon code. Default value: `youhuiquan_promotion_option_id_for_blank`.
   * 
   * @example
   * 772339720881
   */
  couponNo?: string;
  /**
   * @remarks
   * The request source. Valid values:
   * - **OpenApi**: The request is sent from OpenAPI.
   * - **mongo_buy**: The request is sent from the console.
   * 
   * @example
   * Buy
   */
  fromApp?: string;
  /**
   * @remarks
   * The order type. Valid values:
   * - Buy
   * Default value: Buy.
   * 
   * @example
   * Buy
   */
  orderType?: string;
  /**
   * @remarks
   * The region ID. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      businessInfo: 'BusinessInfo',
      commodity: 'Commodity',
      couponNo: 'CouponNo',
      fromApp: 'FromApp',
      orderType: 'OrderType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessInfo: CreateOrderRequestBusinessInfo,
      commodity: CreateOrderRequestCommodity,
      couponNo: 'string',
      fromApp: 'string',
      orderType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(this.businessInfo && typeof (this.businessInfo as any).validate === 'function') {
      (this.businessInfo as any).validate();
    }
    if(this.commodity && typeof (this.commodity as any).validate === 'function') {
      (this.commodity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

