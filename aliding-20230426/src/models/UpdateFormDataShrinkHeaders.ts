// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFormDataShrinkHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  accountContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContextShrink: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContextShrink: 'string',
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

