// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountAddressInfoWithoutHavanaRequest extends $dara.Model {
  addressVersion?: string;
  havanaId?: string;
  PK?: string;
  static names(): { [key: string]: string } {
    return {
      addressVersion: 'AddressVersion',
      havanaId: 'HavanaId',
      PK: 'PK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressVersion: 'string',
      havanaId: 'string',
      PK: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

