// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDataServiceListResponseBodyResult } from "./QueryDataServiceListResponseBodyResult";


export class QueryDataServiceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 78C1AA2D-9201-599E-A0BA-6FC462E57A95
   */
  requestId?: string;
  /**
   * @remarks
   * Return result.
   */
  result?: QueryDataServiceListResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Value range:
   * - true: The request was successful 
   * - false: The request failed
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
      result: QueryDataServiceListResponseBodyResult,
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

