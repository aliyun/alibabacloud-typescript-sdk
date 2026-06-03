// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryContactInfoResponseBody extends $dara.Model {
  address?: string;
  city?: string;
  country?: string;
  createDate?: string;
  email?: string;
  postalCode?: string;
  province?: string;
  registrantName?: string;
  registrantOrganization?: string;
  requestId?: string;
  telArea?: string;
  telExt?: string;
  telephone?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      country: 'Country',
      createDate: 'CreateDate',
      email: 'Email',
      postalCode: 'PostalCode',
      province: 'Province',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      requestId: 'RequestId',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telephone: 'Telephone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      city: 'string',
      country: 'string',
      createDate: 'string',
      email: 'string',
      postalCode: 'string',
      province: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      requestId: 'string',
      telArea: 'string',
      telExt: 'string',
      telephone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

