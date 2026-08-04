// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgAccountAddressInfoRequest extends $dara.Model {
  address?: string;
  address2?: string;
  appName?: string;
  city?: string;
  mpk?: string;
  PK?: string;
  postCode?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      address2: 'Address2',
      appName: 'AppName',
      city: 'City',
      mpk: 'Mpk',
      PK: 'PK',
      postCode: 'PostCode',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      address2: 'string',
      appName: 'string',
      city: 'string',
      mpk: 'string',
      PK: 'string',
      postCode: 'string',
      province: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

