// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDescriptionResponseBodyResult } from "./UpdateDescriptionResponseBodyResult";


export class UpdateDescriptionResponseBody extends $dara.Model {
  /**
   * @example
   * FDF34727-1664-44C1-A8DA-3EB72D60****
   */
  requestId?: string;
  result?: UpdateDescriptionResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateDescriptionResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

