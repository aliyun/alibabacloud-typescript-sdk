// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutLogStoreConfigRequest extends $dara.Model {
  clientIpHeaders?: string[];
  static names(): { [key: string]: string } {
    return {
      clientIpHeaders: 'clientIpHeaders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIpHeaders: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.clientIpHeaders)) {
      $dara.Model.validateArray(this.clientIpHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

