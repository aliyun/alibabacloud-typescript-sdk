// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForCreatingOrderRenewRequestOrderRenewParam extends $dara.Model {
  /**
   * @example
   * 1522080000000
   */
  currentExpirationDate?: number;
  /**
   * @example
   * Aliyun.com
   */
  domainName?: string;
  /**
   * @example
   * 1
   */
  subscriptionDuration?: number;
  static names(): { [key: string]: string } {
    return {
      currentExpirationDate: 'CurrentExpirationDate',
      domainName: 'DomainName',
      subscriptionDuration: 'SubscriptionDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentExpirationDate: 'number',
      domainName: 'string',
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
   * @example
   * 12312412
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
  orderRenewParam?: SaveBatchTaskForCreatingOrderRenewRequestOrderRenewParam[];
  /**
   * @example
   * 123123123
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

