// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForCreatingOrderRedeemRequestOrderRedeemParam extends $dara.Model {
  /**
   * @example
   * 000000
   */
  currentExpirationDate?: number;
  /**
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
   * @example
   * 123123
   */
  couponNo?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderRedeemParam?: SaveBatchTaskForCreatingOrderRedeemRequestOrderRedeemParam[];
  /**
   * @example
   * 123213123
   */
  promotionNo?: string;
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

