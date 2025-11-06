// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyContactFieldRequest extends $dara.Model {
  /**
   * @example
   * Rd. xitucheng
   */
  address?: string;
  /**
   * @example
   * Bei jing
   */
  city?: string;
  /**
   * @example
   * CN
   */
  country?: string;
  /**
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
   * en
   */
  lang?: string;
  postalCode?: string;
  /**
   * @example
   * Bei jing
   */
  province?: string;
  /**
   * @example
   * wang xian sheng
   */
  registrantName?: string;
  /**
   * @example
   * wang xian sheng
   */
  registrantOrganization?: string;
  /**
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @example
   * 01
   */
  telExt?: string;
  /**
   * @example
   * 1390000****
   */
  telephone?: string;
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

