// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VerifySentenceResponseBodyDataDeltaTargetLine } from "./VerifySentenceResponseBodyDataDeltaTargetLine";


export class VerifySentenceResponseBodyDataDeltaTarget extends $dara.Model {
  line?: VerifySentenceResponseBodyDataDeltaTargetLine;
  /**
   * @example
   * 1
   */
  position?: number;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: VerifySentenceResponseBodyDataDeltaTargetLine,
      position: 'number',
    };
  }

  validate() {
    if(this.line && typeof (this.line as any).validate === 'function') {
      (this.line as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

