// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForCreatingOrderTransferRequestOrderTransferParam extends $dara.Model {
  /**
   * @remarks
   * Domain name transfer-in password. If multiple domain names are involved, pass the passwords as a list.
   * 
   * @example
   * testCode
   */
  authorizationCode?: string;
  /**
   * @remarks
   * Domain name. If multiple domain names are involved, pass them as a list.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Is transfer-in of premium domain names allowed? Valid values:
   * 
   * - **false**: Allowed.
   * - **true**: Not allowed.
   * 
   * Default value: **false**.
   * 
   * @example
   * false
   */
  permitPremiumTransfer?: boolean;
  /**
   * @remarks
   * ID of an identity-verified domain name registrant profile. You can obtain this ID by invoking the [QueryRegistrantProfileRealNameVerificationInfo](https://help.aliyun.com/document_detail/69359.htm?spm=a2c4g.11186623.0.0.5096253c12PfdB) API.
   * 
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
   * @remarks
   * Coupon number.
   * 
   * @example
   * 123123
   */
  couponNo?: string;
  /**
   * @remarks
   * Language of the error message returned by the API. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * Default value is **en**.
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
  orderTransferParam?: SaveBatchTaskForCreatingOrderTransferRequestOrderTransferParam[];
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
   * Is a coupon used? Valid values:
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
   * Whether to use a coupon. Valid values:
   * - **false**: Do not use.
   * - **true**: Use.
   * 
   * @example
   * false
   */
  usePromotion?: boolean;
  /**
   * @remarks
   * User IP address, which can be set to **127.0.0.1**.
   * 
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

