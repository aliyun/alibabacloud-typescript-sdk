// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PdpPbcUpdateCmd } from "./PdpPbcUpdateCmd";


export class UpdatePdpPbcRequest extends $dara.Model {
  body?: PdpPbcUpdateCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PdpPbcUpdateCmd,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

