// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyContactFieldRequest extends $dara.Model {
  /**
   * @remarks
   * Street address (in English).
   * 
   * @example
   * Rd. xitucheng
   */
  address?: string;
  /**
   * @remarks
   * City (in English).
   * 
   * @example
   * Bei jing
   */
  city?: string;
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
   * Domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Email address.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * Language of the error message returned by the API. Valid values:  
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
   * 100000
   */
  postalCode?: string;
  /**
   * @remarks
   * Province (in English).
   * 
   * @example
   * Bei jing
   */
  province?: string;
  /**
   * @remarks
   * Contact name (in English).
   * 
   * @example
   * wang xian sheng
   */
  registrantName?: string;
  /**
   * @remarks
   * Registrant name (in English).
   * 
   * @example
   * wang xian sheng
   */
  registrantOrganization?: string;
  /**
   * @remarks
   * Registrant type. Valid values:  
   * - **1**: Individual.  
   * - **2**: Enterprise.
   * 
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @remarks
   * Telephone country code, for example, **86** for China.
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
   * 01
   */
  telExt?: string;
  /**
   * @remarks
   * Telephone number.
   * 
   * @example
   * 1390000****
   */
  telephone?: string;
  /**
   * @remarks
   * User IP address, which can be set to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  /**
   * @remarks
   * Detailed address (in Chinese).
   * 
   * > This parameter applies only to the China site (aliyun.com).
   * 
   * @example
   * 西土城路
   */
  zhAddress?: string;
  /**
   * @remarks
   * City (in Chinese).  
   * 
   * > This parameter applies only to the China site (aliyun.com).
   * 
   * @example
   * 北京市
   */
  zhCity?: string;
  /**
   * @remarks
   * Province (in Chinese).  
   * 
   * > This parameter applies only to the China site (aliyun.com).
   * 
   * @example
   * 北京
   */
  zhProvince?: string;
  /**
   * @remarks
   * Contact name (in Chinese).  
   * 
   * > This parameter applies only to the China site (aliyun.com).
   * 
   * @example
   * 王先生
   */
  zhRegistrantName?: string;
  /**
   * @remarks
   * Registrant name (in Chinese).
   * 
   * > This parameter applies only to the China site (aliyun.com).
   * 
   * @example
   * 王先生
   */
  zhRegistrantOrganization?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
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
      country: 'string',
      domainName: 'string',
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

