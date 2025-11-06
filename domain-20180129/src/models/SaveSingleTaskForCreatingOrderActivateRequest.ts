// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForCreatingOrderActivateRequest extends $dara.Model {
  /**
   * @example
   * chao yang qu
   */
  address?: string;
  /**
   * @example
   * true
   */
  aliyunDns?: boolean;
  /**
   * @example
   * bei jing shi
   */
  city?: string;
  /**
   * @example
   * CN
   */
  country?: string;
  /**
   * @example
   * 123456
   */
  couponNo?: string;
  /**
   * @example
   * ns1.aliyun.com
   */
  dns1?: string;
  /**
   * @example
   * ns2.aliyun.com
   */
  dns2?: string;
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
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * false
   */
  enableDomainProxy?: boolean;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * false
   */
  permitPremiumActivation?: boolean;
  /**
   * @example
   * 1234567
   */
  postalCode?: string;
  /**
   * @example
   * 123123
   */
  promotionNo?: string;
  /**
   * @example
   * bei jing
   */
  province?: string;
  /**
   * @example
   * ce shi
   */
  registrantName?: string;
  /**
   * @example
   * ce shi
   */
  registrantOrganization?: string;
  /**
   * @example
   * 123
   */
  registrantProfileId?: number;
  /**
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @example
   * rg-XX
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1
   */
  subscriptionDuration?: number;
  /**
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @example
   * 1234
   */
  telExt?: string;
  /**
   * @example
   * 12345678
   */
  telephone?: string;
  /**
   * @example
   * false
   */
  trademarkDomainActivation?: boolean;
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
  zhAddress?: string;
  zhCity?: string;
  zhProvince?: string;
  zhRegistrantName?: string;
  zhRegistrantOrganization?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      aliyunDns: 'AliyunDns',
      city: 'City',
      country: 'Country',
      couponNo: 'CouponNo',
      dns1: 'Dns1',
      dns2: 'Dns2',
      domainName: 'DomainName',
      email: 'Email',
      enableDomainProxy: 'EnableDomainProxy',
      lang: 'Lang',
      permitPremiumActivation: 'PermitPremiumActivation',
      postalCode: 'PostalCode',
      promotionNo: 'PromotionNo',
      province: 'Province',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      registrantProfileId: 'RegistrantProfileId',
      registrantType: 'RegistrantType',
      resourceGroupId: 'ResourceGroupId',
      subscriptionDuration: 'SubscriptionDuration',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telephone: 'Telephone',
      trademarkDomainActivation: 'TrademarkDomainActivation',
      useCoupon: 'UseCoupon',
      usePromotion: 'UsePromotion',
      userClientIp: 'UserClientIp',
      zhAddress: 'ZhAddress',
      zhCity: 'ZhCity',
      zhProvince: 'ZhProvince',
      zhRegistrantName: 'ZhRegistrantName',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      aliyunDns: 'boolean',
      city: 'string',
      country: 'string',
      couponNo: 'string',
      dns1: 'string',
      dns2: 'string',
      domainName: 'string',
      email: 'string',
      enableDomainProxy: 'boolean',
      lang: 'string',
      permitPremiumActivation: 'boolean',
      postalCode: 'string',
      promotionNo: 'string',
      province: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      registrantProfileId: 'number',
      registrantType: 'string',
      resourceGroupId: 'string',
      subscriptionDuration: 'number',
      telArea: 'string',
      telExt: 'string',
      telephone: 'string',
      trademarkDomainActivation: 'boolean',
      useCoupon: 'boolean',
      usePromotion: 'boolean',
      userClientIp: 'string',
      zhAddress: 'string',
      zhCity: 'string',
      zhProvince: 'string',
      zhRegistrantName: 'string',
      zhRegistrantOrganization: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

