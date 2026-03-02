// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TraceInfoDetailResult } from "./TraceInfoDetailResult";


export class GetTraceDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * sdadawqewe
   */
  requestId?: string;
  result?: TraceInfoDetailResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: TraceInfoDetailResult,
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

