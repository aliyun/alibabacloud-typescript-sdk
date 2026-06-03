// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyContactFieldRequest extends $dara.Model {
  address?: string;
  city?: string;
  country?: string;
  domainName?: string;
  email?: string;
  lang?: string;
  postalCode?: string;
  province?: string;
  registrantName?: string;
  registrantOrganization?: string;
  registrantType?: string;
  telArea?: string;
  telExt?: string;
  telephone?: string;
  userClientIp?: string;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

