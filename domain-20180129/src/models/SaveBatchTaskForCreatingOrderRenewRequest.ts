// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForCreatingOrderRenewRequestOrderRenewParam extends $dara.Model {
  /**
   * @remarks
   * The current expiration date of the domain name, expressed in milliseconds since 00:00:00 UTC on January 1, 1970.
   * 
   * @example
   * 1522080000000
   */
  currentExpirationDate?: number;
  /**
   * @remarks
   * The domain name that you want to renew. You can obtain a list of your domain names by calling the [QueryDomainList](https://help.aliyun.com/document_detail/67712.html) operation.
   * 
   * @example
   * Aliyun.com
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether to allow the renewal of premium domain names. Default value: false.
   */
  permitPremiumRenew?: boolean;
  /**
   * @remarks
   * The renewal duration, in years. Default value: **1**. Valid values: **1** to **10**.
   * 
   * @example
   * 1
   */
  subscriptionDuration?: number;
  static names(): { [key: string]: string } {
    return {
      currentExpirationDate: 'CurrentExpirationDate',
      domainName: 'DomainName',
      permitPremiumRenew: 'PermitPremiumRenew',
      subscriptionDuration: 'SubscriptionDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentExpirationDate: 'number',
      domainName: 'string',
      permitPremiumRenew: 'boolean',
      subscriptionDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderRenewRequest extends $dara.Model {
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * 12312412
   */
  couponNo?: string;
  /**
   * @remarks
   * The language of the error messages. Valid values:
   * 
   * - **zh**: Chinese.
   * 
   * - **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The parameters for each domain name to be renewed.
   * 
   * This parameter is required.
   */
  orderRenewParam?: SaveBatchTaskForCreatingOrderRenewRequestOrderRenewParam[];
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 123123123
   */
  promotionNo?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * 
   * - **false**: Do not use a coupon.
   * 
   * - **true**: Use a coupon.
   * 
   * @example
   * false
   */
  useCoupon?: boolean;
  /**
   * @remarks
   * Specifies whether to use a promotion. Valid values:
   * 
   * - **false**: Do not use a promotion.
   * 
   * - **true**: Use a promotion.
   * 
   * @example
   * false
   */
  usePromotion?: boolean;
  /**
   * @remarks
   * The user\\"s IP address. You can set this parameter to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      couponNo: 'CouponNo',
      lang: 'Lang',
      orderRenewParam: 'OrderRenewParam',
      promotionNo: 'PromotionNo',
      useCoupon: 'UseCoupon',
      usePromotion: 'UsePromotion',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponNo: 'string',
      lang: 'string',
      orderRenewParam: { 'type': 'array', 'itemType': SaveBatchTaskForCreatingOrderRenewRequestOrderRenewParam },
      promotionNo: 'string',
      useCoupon: 'boolean',
      usePromotion: 'boolean',
      userClientIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orderRenewParam)) {
      $dara.Model.validateArray(this.orderRenewParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

