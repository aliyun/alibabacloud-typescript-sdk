// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Key } from "./Key";


export class Filter extends $dara.Model {
  key?: Key;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: Key,
    };
  }

  validate() {
    if(this.key && typeof (this.key as any).validate === 'function') {
      (this.key as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

