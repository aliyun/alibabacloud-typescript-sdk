// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForCreatingOrderRedeemRequest extends $dara.Model {
  /**
   * @remarks
   * Coupon number.
   * 
   * @example
   * 123123
   */
  couponNo?: string;
  /**
   * @remarks
   * Current expiration time of the domain name, represented as the number of milliseconds since 00:00:00 UTC on January 1, 1970.
   * 
   * This parameter is required.
   * 
   * @example
   * 0000
   */
  currentExpirationDate?: number;
  /**
   * @remarks
   * Domain name to be redeemed.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Language of error messages returned by the API. Valid values:
   * - **zh**: Chinese.
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
   * Coupon number.
   * 
   * @example
   * 123123
   */
  promotionNo?: string;
  /**
   * @remarks
   * Is a coupon used.
   * 
   * @example
   * false
   */
  useCoupon?: boolean;
  /**
   * @remarks
   * Is a coupon used.
   * 
   * @example
   * false
   */
  usePromotion?: boolean;
  /**
   * @remarks
   * User IP address.
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
      promotionNo: 'PromotionNo',
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

