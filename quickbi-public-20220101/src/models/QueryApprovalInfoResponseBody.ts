// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryApprovalInfoResponseBodyResult } from "./QueryApprovalInfoResponseBodyResult";


export class QueryApprovalInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Return the result of the interface execution.
   */
  result?: QueryApprovalInfoResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the API call was successful. Possible values are:
   * - true: success
   * - false: failure
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
      result: QueryApprovalInfoResponseBodyResult,
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

