// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForeignInstanceCredInfo extends $dara.Model {
  credInfo?: { [key: string]: string };
  credType?: string;
  static names(): { [key: string]: string } {
    return {
      credInfo: 'CredInfo',
      credType: 'CredType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      credType: 'string',
    };
  }

  validate() {
    if(this.credInfo) {
      $dara.Model.validateMap(this.credInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

