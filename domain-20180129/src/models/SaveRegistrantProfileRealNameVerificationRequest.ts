// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveRegistrantProfileRealNameVerificationRequest extends $dara.Model {
  /**
   * @example
   * chao yang qu
   */
  address?: string;
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
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * dGVzdA==
   */
  identityCredential?: string;
  /**
   * @example
   * 4111111111111110**
   */
  identityCredentialNo?: string;
  /**
   * @example
   * SFZ
   */
  identityCredentialType?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 1234567
   */
  postalCode?: string;
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
   * 1234567
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
   * 12345678
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
      email: 'Email',
      identityCredential: 'IdentityCredential',
      identityCredentialNo: 'IdentityCredentialNo',
      identityCredentialType: 'IdentityCredentialType',
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
      email: 'string',
      identityCredential: 'string',
      identityCredentialNo: 'string',
      identityCredentialType: 'string',
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

