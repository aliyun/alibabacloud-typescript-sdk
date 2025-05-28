// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDataServiceResponseBodyResult } from "./QueryDataServiceResponseBodyResult";


export class QueryDataServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 78C1AA2D-9201-599E-A0BA-6FC462E57A95
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the result of the interface query.
   */
  result?: QueryDataServiceResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: The request was successful
   * 
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
      result: QueryDataServiceResponseBodyResult,
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

