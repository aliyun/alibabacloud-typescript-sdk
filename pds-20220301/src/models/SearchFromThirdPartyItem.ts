// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchFromThirdPartyItem extends $dara.Model {
  authenticationType?: string;
  extra?: string;
  identity?: string;
  others?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'authentication_type',
      extra: 'extra',
      identity: 'identity',
      others: 'others',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'string',
      extra: 'string',
      identity: 'string',
      others: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.others) {
      $dara.Model.validateMap(this.others);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

