// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageDetectionTaskHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xLoadTest?: boolean;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xLoadTest: 'X-Load-Test',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xLoadTest: 'boolean',
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

