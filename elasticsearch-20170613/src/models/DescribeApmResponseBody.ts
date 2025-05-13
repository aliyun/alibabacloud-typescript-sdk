// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApmResponseBodyResult } from "./DescribeApmResponseBodyResult";


export class DescribeApmResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 97597D87-8066-5493-B692-5C50DA236D68
   */
  requestId?: string;
  /**
   * @remarks
   * Request result.
   */
  result?: DescribeApmResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeApmResponseBodyResult,
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

