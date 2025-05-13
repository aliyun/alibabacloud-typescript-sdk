// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAckOperatorResponseBodyResult } from "./DescribeAckOperatorResponseBodyResult";


export class DescribeAckOperatorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6615EE8D-FD9D-4FD3-997E-6FEA5B8D82ED
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: DescribeAckOperatorResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAckOperatorResponseBodyResult,
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

