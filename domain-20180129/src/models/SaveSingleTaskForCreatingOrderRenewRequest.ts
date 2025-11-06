// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForCreatingOrderRenewRequest extends $dara.Model {
  /**
   * @example
   * 123123
   */
  couponNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0000
   */
  currentExpirationDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 123132
   */
  promotionNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  subscriptionDuration?: number;
  /**
   * @example
   * false
   */
  useCoupon?: boolean;
  /**
   * @example
   * false
   */
  usePromotion?: boolean;
  /**
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

