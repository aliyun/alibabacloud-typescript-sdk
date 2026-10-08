// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForCreatingOrderActivateRequest extends $dara.Model {
  /**
   * @remarks
   * The detailed address in English.
   * 
   * > This parameter is available and required only when the **RegistrantProfileId** parameter is not specified. If you do not specify this parameter, the domain name registration fails.
   * 
   * @example
   * chao yang qu
   */
  address?: string;
  /**
   * @remarks
   * Specifies whether to use Alibaba Cloud DNS servers. Valid values: **true** and **false**. Default value: **true**.
   * 
   * > - If you set this parameter to **true**, you do not need to specify the **Dns1** and **Dns2** parameters. Otherwise, the specified **Dns1** and **Dns2** parameters do not take effect.
   * - If you set this parameter to **false**, you must specify the **Dns1** and **Dns2** parameters.
   * 
   * @example
   * true
   */
  aliyunDns?: boolean;
  /**
   * @remarks
   * The city name in English.
   * 
   * > This parameter is available and required only when the **RegistrantProfileId** parameter is not specified. If you do not specify this parameter, the domain name registration fails.
   * 
   * @example
   * bei jing shi
   */
  city?: string;
  /**
   * @remarks
   * The country code, such as **CN**.
   * 
   * > This parameter is available and required only when the **RegistrantProfileId** parameter is not specified. If you do not specify this parameter, the domain name registration fails.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The ID of the voucher. Default value: a string.
   * 
   * @example
   * 123456
   */
  couponNo?: string;
  /**
   * @remarks
   * The first custom DNS server.
   * 
   * > - This parameter is available and required only when the **AliyunDns** parameter is set to **false**.
   * - Make sure that the custom DNS server is correct. Otherwise, the registration may fail.
   * 
   * @example
   * ns1.aliyun.com
   */
  dns1?: string;
  /**
   * @remarks
   * The second custom DNS server.
   * 
   * > - This parameter is available and required only when the **AliyunDns** parameter is set to **false**.
   * - Make sure that the custom DNS server is correct. Otherwise, the registration may fail.
   * 
   * @example
   * ns2.aliyun.com
   */
  dns2?: string;
  /**
   * @remarks
   * The domain name that you want to register.
   * > When you register a domain name, you must specify the registrant information. If you do not specify the registrant information, the domain name registration fails. You can specify the RegistrantProfileId parameter to use a registrant profile that defines the registrant information.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The email address.
   * 
   * > This parameter is available and required only when the **RegistrantProfileId** parameter is not specified. If you do not specify this parameter, the domain name registration fails.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * Specifies whether to enable the domain name privacy protection service. Valid values:
   * - **true**: Enable.
   * - **false**: Do not enable.
   * 
   * Default value: **true**.
   * 
   * @example
   * false
   */
  enableDomainProxy?: boolean;
  /**
   * @remarks
   * The domain name in Punycode format. This parameter can be left empty.
   * 
   * @example
   * xn--fiqs8s.com
   */
  expectedPunycode?: string;
  /**
   * @remarks
   * The language of the error message returned by the API operation. Valid values:
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
   * Specifies whether to allow the registration of premium domain names. Valid values:
   * - **false**: Not allowed.
   * - **true**: Allowed.              
   * 
   * Default value: **false**.
   * 
   * @example
   * false
   */
  permitPremiumActivation?: boolean;
  /**
   * @remarks
   * The postal code.
   * 
   * > This parameter is available and required only when the **RegistrantProfileId** parameter is not specified. If you do not specify this parameter, the domain name registration fails.
   * 
   * @example
   * 1234567
   */
  postalCode?: string;
  /**
   * @remarks
   * The ID of the coupon.
   * 
   * @example
   * 123123
   */
  promotionNo?: string;
  /**
   * @remarks
   * The province name in English.
   * 
   * > This parameter is available and required only when the **RegistrantProfileId** parameter is not specified. If you do not specify this parameter, the domain name registration fails.
   * 
   * @example
   * bei jing
   */
  province?: string;
  /**
   * @remarks
   * The name of the domain name contact in English.
   * 
   * > This parameter is available and required only when the **RegistrantProfileId** parameter is not specified. If you do not specify this parameter, the domain name registration fails.
   * 
   * @example
   * ce shi
   */
  registrantName?: string;
  /**
   * @remarks
   * The name of the domain name registrant in English.
   * 
   * > This parameter is available and required only when the **RegistrantProfileId** parameter is not specified. If you do not specify this parameter, the domain name registration fails.
   * 
   * @example
   * ce shi
   */
  registrantOrganization?: string;
  /**
   * @remarks
   * The ID of the domain name registrant profile. The profile contains information such as the registrant name, contact name, phone number, and email address. You can use only a real-name verified registrant profile to register a domain name. If you have created a registrant profile, you can call the [QueryRegistrantProfiles](~~QueryRegistrantProfiles~~) operation to query the profile ID.
   * 
   * > After you specify this parameter, you do not need to specify the **RegistrantType**, **ZhRegistrantOrganization**, **ZhRegistrantName**, **ZhProvince**, **ZhCity**, **ZhAddress**, **RegistrantOrganization**, **RegistrantName**, **Province**, **City**, **Address**, **PostalCode**, **Country**, **TelArea**, **Telephone**, **TelExt**, or **Email** parameter.
   * 
   * @example
   * 123
   */
  registrantProfileId?: number;
  /**
   * @remarks
   * The type of the domain name registrant. Valid values:
   * - **1**: Individual.
   * - **2**: Enterprise or organization.
   * 
   * > This parameter is available and required only when the **RegistrantProfileId** parameter is not specified. If you do not specify this parameter, the domain name registration fails.
   * 
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @remarks
   * None.
   * 
   * @example
   * rg-XX
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The subscription duration. Unit: **year**. Default value: **1 year**. Maximum value: **10 years**.
   * 
   * @example
   * 1
   */
  subscriptionDuration?: number;
  /**
   * @remarks
   * The country code for the phone number, such as **86** for China.
   * 
   * > This parameter is available and required only when the **RegistrantProfileId** parameter is not specified. If you do not specify this parameter, the domain name registration fails.
   * 
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @remarks
   * The extension number.
   * 
   * > This parameter is available and required only when the **RegistrantProfileId** parameter is not specified. If you do not specify this parameter, the domain name registration fails.
   * 
   * @example
   * 1234
   */
  telExt?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * > This parameter is available and required only when the **RegistrantProfileId** parameter is not specified. If you do not specify this parameter, the domain name registration fails.
   * 
   * @example
   * 12345678
   */
  telephone?: string;
  /**
   * @remarks
   * Specifies whether to allow the registration of trademark domain names. Valid values:
   * - **false**: Not allowed.
   * - **true**: Allowed.
   * 
   * @example
   * false
   */
  trademarkDomainActivation?: boolean;
  /**
   * @remarks
   * Specifies whether to use a voucher. Valid values:
   * 
   * - **true**: Use.
   * - **false**: Do not use.
   * 
   * Default value: **false**.
   * 
   * @example
   * false
   */
  useCoupon?: boolean;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * - **false**: Not allowed.
   * - **true**: Allowed.
   * 
   * Default value: **false**.
   * 
   * @example
   * false
   */
  usePromotion?: boolean;
  /**
   * @remarks
   * The IP address of the client. You can set this parameter to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  /**
   * @remarks
   * The detailed address in Chinese.
   * 
   * > This parameter is applicable only to the China site. This parameter is available and required only when the **RegistrantProfileId** parameter is not specified. If you do not specify this parameter, the domain name registration fails.
   * 
   * @example
   * 朝阳区
   */
  zhAddress?: string;
  /**
   * @remarks
   * The city name in Chinese.
   * 
   * > This parameter is applicable only to the China site. This parameter is available and required only when the **RegistrantProfileId** parameter is not specified. If you do not specify this parameter, the domain name registration fails.
   * 
   * @example
   * 北京市
   */
  zhCity?: string;
  /**
   * @remarks
   * The province name in Chinese.
   * 
   * > This parameter is applicable only to the China site. This parameter is available and required only when the **RegistrantProfileId** parameter is not specified. If you do not specify this parameter, the domain name registration fails.
   * 
   * @example
   * 北京
   */
  zhProvince?: string;
  /**
   * @remarks
   * The name of the domain name contact in Chinese.
   * 
   * > This parameter is applicable only to the China site. This parameter is available and required only when the **RegistrantProfileId** parameter is not specified. If you do not specify this parameter, the domain name registration fails.
   * 
   * @example
   * 测试
   */
  zhRegistrantName?: string;
  /**
   * @remarks
   * The name of the domain name registrant in Chinese.
   * 
   * > This parameter is applicable only to the China site. This parameter is available and required only when the **RegistrantProfileId** parameter is not specified. If you do not specify this parameter, the domain name registration fails.
   * 
   * @example
   * 测试
   */
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
      expectedPunycode: 'ExpectedPunycode',
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
      expectedPunycode: 'string',
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

