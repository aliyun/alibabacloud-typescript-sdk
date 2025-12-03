// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Aps } from "./Aps";


export class IosPayload extends $dara.Model {
  aps?: Aps;
  extra?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      aps: 'aps',
      extra: 'extra',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aps: Aps,
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.aps && typeof (this.aps as any).validate === 'function') {
      (this.aps as any).validate();
    }
    if(this.extra) {
      $dara.Model.validateMap(this.extra);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

