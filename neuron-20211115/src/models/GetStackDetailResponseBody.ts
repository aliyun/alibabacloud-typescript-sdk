// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StackDetailResult } from "./StackDetailResult";


export class GetStackDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * sdadawqewe
   */
  requestId?: string;
  result?: StackDetailResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: StackDetailResult,
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

