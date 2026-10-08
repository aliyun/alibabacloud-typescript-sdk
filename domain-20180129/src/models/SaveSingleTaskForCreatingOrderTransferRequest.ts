// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForCreatingOrderTransferRequest extends $dara.Model {
  /**
   * @remarks
   * Domain name transfer-in password.
   * 
   * This parameter is required.
   * 
   * @example
   * testCode
   */
  authorizationCode?: string;
  /**
   * @remarks
   * Coupon number.
   * 
   * @example
   * 123456
   */
  couponNo?: string;
  /**
   * @remarks
   * Domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Language for error messages returned by the API. Valid values:
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
   * Is transfer-in of premium domain names allowed. Default value: **false**.
   * 
   * @example
   * false
   */
  permitPremiumTransfer?: boolean;
  /**
   * @remarks
   * Coupon number.
   * 
   * @example
   * 123456
   */
  promotionNo?: string;
  /**
   * @remarks
   * ID of the domain name registrant profile that has passed identity verification.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  registrantProfileId?: number;
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
      authorizationCode: 'AuthorizationCode',
      couponNo: 'CouponNo',
      domainName: 'DomainName',
      lang: 'Lang',
      permitPremiumTransfer: 'PermitPremiumTransfer',
      promotionNo: 'PromotionNo',
      registrantProfileId: 'RegistrantProfileId',
      useCoupon: 'UseCoupon',
      usePromotion: 'UsePromotion',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationCode: 'string',
      couponNo: 'string',
      domainName: 'string',
      lang: 'string',
      permitPremiumTransfer: 'boolean',
      promotionNo: 'string',
      registrantProfileId: 'number',
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

