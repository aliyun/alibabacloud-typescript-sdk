// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForCreatingOrderTransferRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  authorizationCode?: string;
  couponNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string;
  lang?: string;
  permitPremiumTransfer?: boolean;
  promotionNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  registrantProfileId?: number;
  useCoupon?: boolean;
  usePromotion?: boolean;
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

