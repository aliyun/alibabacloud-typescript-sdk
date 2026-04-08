// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeActionResponseBodyResult extends $dara.Model {
  /**
   * @example
   * The provided parameter xxx is invalid.
   */
  errorMessage?: string;
  /**
   * @example
   * {
   *   "output": {
   *     "finishReason": "stop",
   *     "text": "hello"
   *   },
   *   "requestId": "433944e3-2163-9c7a-9664-2a27c0dda0ec",
   *   "usage": {
   *     "inputTokens": 13,
   *     "outputTokens": 16,
   *     "totalTokens": 29
   *   }
   * }
   */
  output?: any;
  /**
   * @example
   * RUNNING、COMPLETED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      output: 'Output',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      output: 'any',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeActionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 346E5EE9-D5FE-56A0-B3E2-A43E0F67302A
   */
  requestId?: string;
  result?: InvokeActionResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: InvokeActionResponseBodyResult,
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

