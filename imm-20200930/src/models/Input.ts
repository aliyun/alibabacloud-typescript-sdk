// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InputOSS } from "./InputOss";


export class Input extends $dara.Model {
  OSS?: InputOSS;
  static names(): { [key: string]: string } {
    return {
      OSS: 'OSS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OSS: InputOSS,
    };
  }

  validate() {
    if(this.OSS && typeof (this.OSS as any).validate === 'function') {
      (this.OSS as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

