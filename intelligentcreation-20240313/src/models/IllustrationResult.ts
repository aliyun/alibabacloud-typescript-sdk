// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Illustration } from "./Illustration";


export class IllustrationResult extends $dara.Model {
  illustration?: Illustration;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      illustration: 'illustration',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      illustration: Illustration,
      requestId: 'string',
    };
  }

  validate() {
    if(this.illustration && typeof (this.illustration as any).validate === 'function') {
      (this.illustration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

