// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForUpdatingContactInfoByNewContactRequest extends $dara.Model {
  /**
   * @remarks
   * Specific address.
   * 
   * @example
   * chao yang qu
   */
  address?: string;
  /**
   * @remarks
   * City.
   * 
   * @example
   * bei jing shi
   */
  city?: string;
  /**
   * @remarks
   * Contact type. Valid values:  
   * - **registrant**: Registrant.  
   * - **admin**: Administrator.  
   * - **billing**: Billing contact.  
   * - **tech**: Technical contact.
   * 
   * This parameter is required.
   * 
   * @example
   * registrant
   */
  contactType?: string;
  /**
   * @remarks
   * Country code, such as **CN** or **US**.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * Domain name list.
   * 
   * This parameter is required.
   * 
   * @example
   * alibabacloud.com
   */
  domainName?: string[];
  /**
   * @remarks
   * Mailbox.
   * 
   * @example
   * test@aliyun.com
   */
  email?: string;
  /**
   * @remarks
   * Language of error messages returned by the API. Valid values:  
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
   * Postal code.
   * 
   * @example
   * 123456
   */
  postalCode?: string;
  /**
   * @remarks
   * Province.
   * 
   * @example
   * bei jing
   */
  province?: string;
  /**
   * @remarks
   * Contact name.
   * 
   * @example
   * ce shi
   */
  registrantName?: string;
  /**
   * @remarks
   * Registrant organization name.
   * 
   * @example
   * ce shi
   */
  registrantOrganization?: string;
  /**
   * @remarks
   * Domain registrant type. Valid values:  
   * - **1**: Individual.  
   * - **2**: Enterprise.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @remarks
   * Telephone country code.
   * 
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @remarks
   * Extension number.
   * 
   * @example
   * 1235
   */
  telExt?: string;
  /**
   * @remarks
   * Telephone number.
   * 
   * @example
   * 1234567890
   */
  telephone?: string;
  /**
   * @remarks
   * Whether to add a transfer-out prohibition restriction. This parameter only takes effect when **ContactType** is **registrant**, indicating whether the domain name is restricted from transfer-out for 60 days after the registrant is modified. The default value is **false**, which means transfer-out is not restricted.
   * 
   * @example
   * false
   */
  transferOutProhibited?: boolean;
  /**
   * @remarks
   * User IP.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  /**
   * @remarks
   * Chinese address.
   * 
   * @example
   * 朝阳区
   */
  zhAddress?: string;
  /**
   * @remarks
   * Chinese city.
   * 
   * @example
   * 北京市
   */
  zhCity?: string;
  /**
   * @remarks
   * Chinese province.
   * 
   * @example
   * 北京
   */
  zhProvince?: string;
  /**
   * @remarks
   * Chinese contact name.
   * 
   * @example
   * 测试
   */
  zhRegistrantName?: string;
  /**
   * @remarks
   * Chinese registrant organization name.
   * 
   * @example
   * 测试
   */
  zhRegistrantOrganization?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      contactType: 'ContactType',
      country: 'Country',
      domainName: 'DomainName',
      email: 'Email',
      lang: 'Lang',
      postalCode: 'PostalCode',
      province: 'Province',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      registrantType: 'RegistrantType',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telephone: 'Telephone',
      transferOutProhibited: 'TransferOutProhibited',
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
      city: 'string',
      contactType: 'string',
      country: 'string',
      domainName: { 'type': 'array', 'itemType': 'string' },
      email: 'string',
      lang: 'string',
      postalCode: 'string',
      province: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      registrantType: 'string',
      telArea: 'string',
      telExt: 'string',
      telephone: 'string',
      transferOutProhibited: 'boolean',
      userClientIp: 'string',
      zhAddress: 'string',
      zhCity: 'string',
      zhProvince: 'string',
      zhRegistrantName: 'string',
      zhRegistrantOrganization: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainName)) {
      $dara.Model.validateArray(this.domainName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

