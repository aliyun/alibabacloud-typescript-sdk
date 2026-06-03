// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForUpdatingContactInfoByNewContactRequest extends $dara.Model {
  address?: string;
  city?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contactType?: string;
  country?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string[];
  email?: string;
  lang?: string;
  postalCode?: string;
  province?: string;
  registrantName?: string;
  registrantOrganization?: string;
  telArea?: string;
  telExt?: string;
  telephone?: string;
  transferOutProhibited?: boolean;
  userClientIp?: string;
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
      contactType: 'string',
      country: 'string',
      domainName: { 'type': 'array', 'itemType': 'string' },
      email: 'string',
      lang: 'string',
      postalCode: 'string',
      province: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
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

