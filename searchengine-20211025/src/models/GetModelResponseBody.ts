// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetModelResponseBodyResult } from "./GetModelResponseBodyResult";


export class GetModelResponseBody extends $dara.Model {
  /**
   * @example
   * 38b079f1-7846-4226-8c90-3e2644b5c52b
   */
  requestId?: string;
  result?: GetModelResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetModelResponseBodyResult,
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

