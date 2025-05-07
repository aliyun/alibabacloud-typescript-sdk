// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VerifySentenceResponseBodyDataDeltaSource } from "./VerifySentenceResponseBodyDataDeltaSource";
import { VerifySentenceResponseBodyDataDeltaTarget } from "./VerifySentenceResponseBodyDataDeltaTarget";


export class VerifySentenceResponseBodyDataDelta extends $dara.Model {
  source?: VerifySentenceResponseBodyDataDeltaSource;
  target?: VerifySentenceResponseBodyDataDeltaTarget;
  /**
   * @example
   * CHANGE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: VerifySentenceResponseBodyDataDeltaSource,
      target: VerifySentenceResponseBodyDataDeltaTarget,
      type: 'string',
    };
  }

  validate() {
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

