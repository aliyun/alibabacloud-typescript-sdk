// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceRequestPromotionOptions extends $dara.Model {
  /**
   * @remarks
   * The activity ID.
   * 
   * @example
   * 12312399123
   */
  activityId?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      couponNo: 'CouponNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      couponNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh-CN** (default): Chinese.
   * 
   * - **en-US**: English.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The number of Simple Application Server instances to create. Valid values: 1 to 20.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The resource type. Valid values:
   * - Server.
   * 
   * This parameter is required.
   * 
   * @example
   * Server
   */
  commodityType?: string;
  /**
   * @remarks
   * The capacity of the mounted data cloud disk. Unit: GB. Valid values: 0 to 16380. The value must be a multiple of 20.
   * 
   * @example
   * 20
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * The ID of the Simple Application Server instance.
   * 
   * @example
   * 2ad1ae67295445f598017499dc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The order type. Valid values:
   * - Buy.
   * 
   * Default value: Buy.
   * 
   * @example
   * UPLOAD
   */
  orderType?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * - Prepaid: subscription.
   * 
   * Example: Prepaid.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The billing duration. Valid values:
   * - If the PriceUnit parameter is set to Month: 1 to 9.
   * - If the PriceUnit parameter is set to Year: 1 to 5.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The plan ID. You can call the [ListPlans](https://help.aliyun.com/document_detail/189314.html) operation to query all plan information in the specified region.
   * 
   * @example
   * swas.s1.cxxxxxx3t05
   */
  planId?: string;
  /**
   * @remarks
   * The pricing unit. Valid values:
   * - Month: the pricing unit for monthly billing.
   * - Year: the pricing unit for yearly billing.
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  priceUnit?: string;
  /**
   * @remarks
   * The promotion option information.
   */
  promotionOptions?: DescribePriceRequestPromotionOptions;
  /**
   * @remarks
   * The region ID of the specified Simple Application Server instance. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the list of supported Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      amount: 'Amount',
      commodityType: 'CommodityType',
      dataDiskSize: 'DataDiskSize',
      instanceId: 'InstanceId',
      orderType: 'OrderType',
      payType: 'PayType',
      period: 'Period',
      planId: 'PlanId',
      priceUnit: 'PriceUnit',
      promotionOptions: 'PromotionOptions',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      amount: 'number',
      commodityType: 'string',
      dataDiskSize: 'number',
      instanceId: 'string',
      orderType: 'string',
      payType: 'string',
      period: 'number',
      planId: 'string',
      priceUnit: 'string',
      promotionOptions: DescribePriceRequestPromotionOptions,
      regionId: 'string',
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

