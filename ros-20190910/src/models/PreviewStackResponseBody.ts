// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PreviewStackResponseBodyStack } from "./PreviewStackResponseBodyStack";


export class PreviewStackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the stack that is previewed.
   */
  stack?: PreviewStackResponseBodyStack;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stack: 'Stack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stack: PreviewStackResponseBodyStack,
    };
  }

  validate() {
    if(this.stack && typeof (this.stack as any).validate === 'function') {
      (this.stack as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

