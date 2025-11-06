// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForCreatingOrderTransferRequestOrderTransferParam extends $dara.Model {
  /**
   * @example
   * testCode
   */
  authorizationCode?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * false
   */
  permitPremiumTransfer?: boolean;
  /**
   * @example
   * 123456
   */
  registrantProfileId?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationCode: 'AuthorizationCode',
      domainName: 'DomainName',
      permitPremiumTransfer: 'PermitPremiumTransfer',
      registrantProfileId: 'RegistrantProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationCode: 'string',
      domainName: 'string',
      permitPremiumTransfer: 'boolean',
      registrantProfileId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderTransferRequest extends $dara.Model {
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
  orderTransferParam?: SaveBatchTaskForCreatingOrderTransferRequestOrderTransferParam[];
  /**
   * @example
   * 123123
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
      orderTransferParam: 'OrderTransferParam',
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
      orderTransferParam: { 'type': 'array', 'itemType': SaveBatchTaskForCreatingOrderTransferRequestOrderTransferParam },
      promotionNo: 'string',
      useCoupon: 'boolean',
      usePromotion: 'boolean',
      userClientIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orderTransferParam)) {
      $dara.Model.validateArray(this.orderTransferParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

