// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDataResponseBodyResult } from "./QueryDataResponseBodyResult";


export class QueryDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * a4d1a221d-41za1-****
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the result of the interface execution. Possible values:
   * 
   * - true: Execution succeeded
   * - false: Execution failed
   */
  result?: QueryDataResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: Request succeeded
   * - false: Request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryDataResponseBodyResult,
      success: 'boolean',
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

