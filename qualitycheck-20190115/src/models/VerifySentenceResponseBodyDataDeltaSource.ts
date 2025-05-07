// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VerifySentenceResponseBodyDataDeltaSourceLine } from "./VerifySentenceResponseBodyDataDeltaSourceLine";


export class VerifySentenceResponseBodyDataDeltaSource extends $dara.Model {
  line?: VerifySentenceResponseBodyDataDeltaSourceLine;
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
      line: VerifySentenceResponseBodyDataDeltaSourceLine,
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

