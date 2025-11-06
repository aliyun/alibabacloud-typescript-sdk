// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveRegistrantProfileRequest extends $dara.Model {
  /**
   * @example
   * zhe jiang sheng hang zhou shi shi li qu shi li zhen shi li da sha 1001 hao
   */
  address?: string;
  /**
   * @example
   * hang zhou shi
   */
  city?: string;
  /**
   * @example
   * CN
   */
  country?: string;
  /**
   * @example
   * false
   */
  defaultRegistrantProfile?: boolean;
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
  /**
   * @example
   * 310024
   */
  postalCode?: string;
  /**
   * @example
   * zhe jiang
   */
  province?: string;
  /**
   * @example
   * li si
   */
  registrantName?: string;
  /**
   * @example
   * li si
   */
  registrantOrganization?: string;
  /**
   * @example
   * 3600000
   */
  registrantProfileId?: number;
  /**
   * @example
   * common
   */
  registrantProfileType?: string;
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
   * 1234
   */
  telExt?: string;
  /**
   * @example
   * 1829756****
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
      defaultRegistrantProfile: 'DefaultRegistrantProfile',
      email: 'Email',
      lang: 'Lang',
      postalCode: 'PostalCode',
      province: 'Province',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      registrantProfileId: 'RegistrantProfileId',
      registrantProfileType: 'RegistrantProfileType',
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
      defaultRegistrantProfile: 'boolean',
      email: 'string',
      lang: 'string',
      postalCode: 'string',
      province: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      registrantProfileId: 'number',
      registrantProfileType: 'string',
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

