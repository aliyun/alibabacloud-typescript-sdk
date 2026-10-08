// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForCreatingOrderRedeemRequestOrderRedeemParam extends $dara.Model {
  /**
   * @remarks
   * Current expiration date of the domain name, represented as the number of milliseconds from 00:00 UTC on January 1, 1970, to the domain’s current expiration date.
   * 
   * @example
   * 000000
   */
  currentExpirationDate?: number;
  /**
   * @remarks
   * Domain name. If multiple domain names are involved, pass a domain name list. You can obtain the domain name list by using the [QueryDomainList](https://help.aliyun.com/document_detail/67712.html) API.
   * 
   * @example
   * Aliyun.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      currentExpirationDate: 'CurrentExpirationDate',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentExpirationDate: 'number',
      domainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderRedeemRequest extends $dara.Model {
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
   * Language of error messages returned by the API. Valid values:  
   * - **zh**: Chinese;  
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
   * List of job details.
   * 
   * This parameter is required.
   */
  orderRedeemParam?: SaveBatchTaskForCreatingOrderRedeemRequestOrderRedeemParam[];
  /**
   * @remarks
   * Coupon number.
   * 
   * @example
   * 123213123
   */
  promotionNo?: string;
  /**
   * @remarks
   * Is coupon used? Valid values:  
   * 
   * - **false**: No.  
   * - **true**: Yes.
   * 
   * @example
   * false
   */
  useCoupon?: boolean;
  /**
   * @remarks
   * Is coupon used? Valid values:  
   * 
   * - **false**: No.  
   * - **true**: Yes.
   * 
   * @example
   * false
   */
  usePromotion?: boolean;
  /**
   * @remarks
   * User IP address. You can set it to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      couponNo: 'CouponNo',
      lang: 'Lang',
      orderRedeemParam: 'OrderRedeemParam',
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
      orderRedeemParam: { 'type': 'array', 'itemType': SaveBatchTaskForCreatingOrderRedeemRequestOrderRedeemParam },
      promotionNo: 'string',
      useCoupon: 'boolean',
      usePromotion: 'boolean',
      userClientIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orderRedeemParam)) {
      $dara.Model.validateArray(this.orderRedeemParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

