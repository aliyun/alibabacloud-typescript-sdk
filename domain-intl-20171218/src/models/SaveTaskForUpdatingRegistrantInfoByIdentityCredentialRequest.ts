// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest extends $dara.Model {
  address?: string;
  city?: string;
  country?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string[];
  email?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  identityCredential?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  identityCredentialNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  identityCredentialType?: string;
  lang?: string;
  postalCode?: string;
  province?: string;
  registrantName?: string;
  registrantOrganization?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  registrantType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  telArea?: string;
  telExt?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  telephone?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  transferOutProhibited?: boolean;
  userClientIp?: string;
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

