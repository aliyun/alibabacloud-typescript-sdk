// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPredictionHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  token?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      token: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

