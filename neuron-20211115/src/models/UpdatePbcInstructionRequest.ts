// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PbcInstructionUpdateCmd } from "./PbcInstructionUpdateCmd";


export class UpdatePbcInstructionRequest extends $dara.Model {
  body?: PbcInstructionUpdateCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PbcInstructionUpdateCmd,
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

