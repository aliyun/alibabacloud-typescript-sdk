// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLogstashResponseBodyResult } from "./DescribeLogstashResponseBodyResult";


export class DescribeLogstashResponseBody extends $dara.Model {
  /**
   * @remarks
   * Detailed information about the instance.
   * 
   * @example
   * C9334241-4837-46C2-B24B-9BDC517318DE
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations of the instance.
   */
  result?: DescribeLogstashResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeLogstashResponseBodyResult,
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

