// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForCreatingOrderActivateRequestOrderActivateParam extends $dara.Model {
  /**
   * @example
   * chao yan qu *** dasha *** hao
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
   * ns2.aliyun.com
   */
  dns1?: string;
  /**
   * @example
   * ns1.aliyun.com
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
   * true
   */
  enableDomainProxy?: boolean;
  /**
   * @example
   * true
   */
  permitPremiumActivation?: boolean;
  /**
   * @example
   * 102629
   */
  postalCode?: string;
  /**
   * @example
   * bei jing
   */
  province?: string;
  /**
   * @example
   * zhang san
   */
  registrantName?: string;
  /**
   * @example
   * zhang san
   */
  registrantOrganization?: string;
  /**
   * @example
   * 000000
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
   * 1820000****
   */
  telephone?: string;
  /**
   * @example
   * false
   */
  trademarkDomainActivation?: boolean;
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
      dns1: 'Dns1',
      dns2: 'Dns2',
      domainName: 'DomainName',
      email: 'Email',
      enableDomainProxy: 'EnableDomainProxy',
      permitPremiumActivation: 'PermitPremiumActivation',
      postalCode: 'PostalCode',
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
      dns1: 'string',
      dns2: 'string',
      domainName: 'string',
      email: 'string',
      enableDomainProxy: 'boolean',
      permitPremiumActivation: 'boolean',
      postalCode: 'string',
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

export class SaveBatchTaskForCreatingOrderActivateRequest extends $dara.Model {
  /**
   * @example
   * 123456
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
  orderActivateParam?: SaveBatchTaskForCreatingOrderActivateRequestOrderActivateParam[];
  /**
   * @example
   * 123124
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
      orderActivateParam: 'OrderActivateParam',
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
      orderActivateParam: { 'type': 'array', 'itemType': SaveBatchTaskForCreatingOrderActivateRequestOrderActivateParam },
      promotionNo: 'string',
      useCoupon: 'boolean',
      usePromotion: 'boolean',
      userClientIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orderActivateParam)) {
      $dara.Model.validateArray(this.orderActivateParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

