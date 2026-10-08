// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForCreatingOrderActivateRequestOrderActivateParam extends $dara.Model {
  /**
   * @remarks
   * The mailing address in English.
   * 
   * > This parameter is available and required only when the **OrderActivateParam.N.RegistrantProfileId** parameter is not specified. If this parameter is not specified, the domain name registration fails.
   * 
   * @example
   * chao yan qu *** dasha *** hao
   */
  address?: string;
  /**
   * @remarks
   * Specifies whether to use Alibaba Cloud DNS. Valid values: **true** and **false**. Default value: **true**.
   * 
   * > - If this parameter is set to **true**, you do not need to specify the **OrderActivateParam.N.Dns1** and **OrderActivateParam.N.Dns2** parameters. Otherwise, the specified **OrderActivateParam.N.Dns1** and **OrderActivateParam.N.Dns2** parameters do not take effect. 
   * - If this parameter is set to **false**, you must also specify the **OrderActivateParam.N.Dns1** and **OrderActivateParam.N.Dns2** parameters.
   * 
   * @example
   * true
   */
  aliyunDns?: boolean;
  /**
   * @remarks
   * The city name in English.
   * 
   * > This parameter is available and required only when the **OrderActivateParam.N.RegistrantProfileId** parameter is not specified. If this parameter is not specified, the domain name registration fails.
   * 
   * @example
   * bei jing shi
   */
  city?: string;
  /**
   * @remarks
   * The country code. For example, **CN** represents China, and **US** represents the United States.
   * 
   * > This parameter is available and required only when the **OrderActivateParam.N.RegistrantProfileId** parameter is not specified. If this parameter is not specified, the domain name registration fails.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The custom DNS server 1.
   * 
   * > - This parameter is available and required only when the **OrderActivateParam.N.AliyunDns** parameter is set to **false**.
   * - Make sure that the custom DNS server is correct. Otherwise, the registration may fail.
   * 
   * @example
   * ns2.aliyun.com
   */
  dns1?: string;
  /**
   * @remarks
   * The custom DNS server 2.
   * 
   * > - This parameter is available and required only when the **OrderActivateParam.N.AliyunDns** parameter is set to **false**.
   * - Make sure that the custom DNS server is correct. Otherwise, the registration may fail.
   * 
   * @example
   * ns1.aliyun.com
   */
  dns2?: string;
  /**
   * @remarks
   * The domain name to be registered.
   * 
   * > When you register a domain name, you must specify the domain name registrant information. Otherwise, the domain name registration fails. You can specify the domain name registrant information by using the OrderActivateParam.N.RegistrantProfileId parameter to associate a domain name registrant profile.
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
   * > This parameter is available and required only when the **OrderActivateParam.N.RegistrantProfileId** parameter is not specified. If this parameter is not specified, the domain name registration fails.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * Specifies whether to enable the domain name privacy protection service. Default value: **true**.
   * 
   * @example
   * true
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
   * Specifies whether to allow the registration of premium domain names. Default value: **false**.
   * 
   * @example
   * true
   */
  permitPremiumActivation?: boolean;
  /**
   * @remarks
   * The postal code.
   * 
   * > This parameter is available and required only when the **OrderActivateParam.N.RegistrantProfileId** parameter is not specified. If this parameter is not specified, the domain name registration fails.
   * 
   * @example
   * 102629
   */
  postalCode?: string;
  /**
   * @remarks
   * The province name in English.
   * 
   * > This parameter is available and required only when the **OrderActivateParam.N.RegistrantProfileId** parameter is not specified. If this parameter is not specified, the domain name registration fails.
   * 
   * @example
   * bei jing
   */
  province?: string;
  /**
   * @remarks
   * The domain name contact in English.
   * 
   * > This parameter is available and required only when the **OrderActivateParam.N.RegistrantProfileId** parameter is not specified. If this parameter is not specified, the domain name registration fails.
   * 
   * @example
   * zhang san
   */
  registrantName?: string;
  /**
   * @remarks
   * The name of the domain name registrant in English.
   * 
   * > This parameter is available and required only when the **OrderActivateParam.N.RegistrantProfileId** parameter is not specified. If this parameter is not specified, the domain name registration fails.
   * 
   * @example
   * zhang san
   */
  registrantOrganization?: string;
  /**
   * @remarks
   * The ID of the domain name registrant profile. The profile contains information such as the name of the domain name registrant, the domain name contact, the phone number, and the email address. You can only use the ID of a real-name verified domain name registrant profile to register a domain name. If you have created a domain name registrant profile, you can call the [QueryRegistrantProfiles](https://help.aliyun.com/document_detail/67701.html) operation to query the profile ID.
   * 
   * > After you specify this parameter, you do not need to specify the **OrderActivateParam.N.RegistrantType**, **OrderActivateParam.N.ZhRegistrantOrganization**, **OrderActivateParam.N.ZhRegistrantName**, **OrderActivateParam.N.ZhProvince**, **OrderActivateParam.N.ZhCity**, **OrderActivateParam.N.ZhAddress**, **OrderActivateParam.N.RegistrantOrganization**, **OrderActivateParam.N.RegistrantName**, **OrderActivateParam.N.Province**, **OrderActivateParam.N.City**, **OrderActivateParam.N.Address**, **OrderActivateParam.N.PostalCode**, **OrderActivateParam.N.Country**, **OrderActivateParam.N.TelArea**, **OrderActivateParam.N.Telephone**, **OrderActivateParam.N.TelExt**, and **OrderActivateParam.N.Email** parameters.
   * 
   * @example
   * 000000
   */
  registrantProfileId?: number;
  /**
   * @remarks
   * The type of the domain name registrant. Valid values:
   * - **1**: Individual.
   * - **2**: Enterprise or organization.
   * 
   * > This parameter is available and required only when the **OrderActivateParam.N.RegistrantProfileId** parameter is not specified. If this parameter is not specified, the domain name registration fails.
   * 
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @remarks
   * The resource group ID.
   * > If this parameter is not specified or the specified resource group ID does not exist, the default resource group ID is used.
   * 
   * @example
   * rg-XX
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The subscription duration. Unit: **year**. Default value: **1**.
   * 
   * @example
   * 1
   */
  subscriptionDuration?: number;
  /**
   * @remarks
   * The country code for the phone number. For example, the country code for China is **86**.
   * 
   * > This parameter is available and required only when the **OrderActivateParam.N.RegistrantProfileId** parameter is not specified. If this parameter is not specified, the domain name registration fails.
   * 
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @remarks
   * The extension number.
   * 
   * > This parameter is available and required only when the **OrderActivateParam.N.RegistrantProfileId** parameter is not specified. If this parameter is not specified, the domain name registration fails.
   * 
   * @example
   * 1234
   */
  telExt?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * > This parameter is available and required only when the **OrderActivateParam.N.RegistrantProfileId** parameter is not specified. If this parameter is not specified, the domain name registration fails.
   * 
   * @example
   * 1820000****
   */
  telephone?: string;
  /**
   * @remarks
   * Specifies whether to allow the registration of trademark terms.
   * 
   * @example
   * false
   */
  trademarkDomainActivation?: boolean;
  /**
   * @remarks
   * The mailing address in Chinese.
   * 
   * > This parameter is applicable only to the China site. This parameter is available and required only when the **OrderActivateParam.N.RegistrantProfileId** parameter is not specified. If this parameter is not specified, the domain name registration fails.
   * 
   * @example
   * 朝阳区***大厦***号
   */
  zhAddress?: string;
  /**
   * @remarks
   * The city name in Chinese.
   * 
   * > This parameter is applicable only to the China site. This parameter is available and required only when the **OrderActivateParam.N.RegistrantProfileId** parameter is not specified. If this parameter is not specified, the domain name registration fails.
   * 
   * @example
   * 北京市
   */
  zhCity?: string;
  /**
   * @remarks
   * The province name in Chinese.
   * 
   * > This parameter is applicable only to the China site. This parameter is available and required only when the **OrderActivateParam.N.RegistrantProfileId** parameter is not specified. If this parameter is not specified, the domain name registration fails.
   * 
   * @example
   * 北京
   */
  zhProvince?: string;
  /**
   * @remarks
   * The domain name contact in Chinese.
   * 
   * > This parameter is applicable only to the China site. This parameter is available and required only when the **OrderActivateParam.N.RegistrantProfileId** parameter is not specified. If this parameter is not specified, the domain name registration fails.
   * 
   * @example
   * 张三
   */
  zhRegistrantName?: string;
  /**
   * @remarks
   * The name of the domain name registrant in Chinese.
   * 
   * > This parameter is applicable only to the China site. This parameter is available and required only when the **OrderActivateParam.N.RegistrantProfileId** parameter is not specified. If this parameter is not specified, the domain name registration fails.
   * 
   * @example
   * 张三
   */
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
      expectedPunycode: 'ExpectedPunycode',
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
      expectedPunycode: 'string',
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
   * @remarks
   * The voucher ID.
   * 
   * @example
   * 123456
   */
  couponNo?: string;
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
   * The list of task details.
   * 
   * This parameter is required.
   */
  orderActivateParam?: SaveBatchTaskForCreatingOrderActivateRequestOrderActivateParam[];
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * 123124
   */
  promotionNo?: string;
  /**
   * @remarks
   * Specifies whether to use a voucher.
   * 
   * @example
   * false
   */
  useCoupon?: boolean;
  /**
   * @remarks
   * Specifies whether to use a coupon.
   * 
   * @example
   * false
   */
  usePromotion?: boolean;
  /**
   * @remarks
   * The IP address of the user.
   * 
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

