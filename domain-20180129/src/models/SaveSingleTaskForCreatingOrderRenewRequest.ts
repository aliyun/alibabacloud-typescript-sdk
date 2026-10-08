// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForCreatingOrderRenewRequest extends $dara.Model {
  /**
   * @remarks
   * The coupon number.
   * 
   * @example
   * 123123
   */
  couponNo?: string;
  /**
   * @remarks
   * The current expiration date of the domain name. This value is a Unix timestamp in milliseconds, representing the time elapsed since 00:00:00 UTC on January 1, 1970.
   * 
   * This parameter is required.
   * 
   * @example
   * 1522080000000
   */
  currentExpirationDate?: number;
  /**
   * @remarks
   * The domain name to renew.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The language of error messages returned by the API. Valid values:
   * 
   * - **zh**: Chinese.
   * 
   * - **en**: English.
   * 
   * The default value is **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  permitPremiumRenew?: boolean;
  /**
   * @remarks
   * The promotion number.
   * 
   * @example
   * 123132
   */
  promotionNo?: string;
  /**
   * @remarks
   * The renewal period, in years. The value must be an integer from **1** to **10**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  subscriptionDuration?: number;
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
      currentExpirationDate: 'CurrentExpirationDate',
      domainName: 'DomainName',
      lang: 'Lang',
      permitPremiumRenew: 'PermitPremiumRenew',
      promotionNo: 'PromotionNo',
      subscriptionDuration: 'SubscriptionDuration',
      useCoupon: 'UseCoupon',
      usePromotion: 'UsePromotion',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponNo: 'string',
      currentExpirationDate: 'number',
      domainName: 'string',
      lang: 'string',
      permitPremiumRenew: 'boolean',
      promotionNo: 'string',
      subscriptionDuration: 'number',
      useCoupon: 'boolean',
      usePromotion: 'boolean',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

