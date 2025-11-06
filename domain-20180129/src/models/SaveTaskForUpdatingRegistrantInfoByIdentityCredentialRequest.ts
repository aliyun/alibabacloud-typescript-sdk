// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alibabacloud.com
   */
  domainName?: string[];
  /**
   * @example
   * test@aliyun.com
   */
  email?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * h6UPhXz/ADP/2Q==
   */
  identityCredential?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5****************9
   */
  identityCredentialNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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
   * 123456
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @example
   * 12345
   */
  telExt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345678
   */
  telephone?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  transferOutProhibited?: boolean;
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
      identityCredential: 'IdentityCredential',
      identityCredentialNo: 'IdentityCredentialNo',
      identityCredentialType: 'IdentityCredentialType',
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
      country: 'string',
      domainName: { 'type': 'array', 'itemType': 'string' },
      email: 'string',
      identityCredential: 'string',
      identityCredentialNo: 'string',
      identityCredentialType: 'string',
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

