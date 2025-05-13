// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeILMPolicyResponseBodyResult } from "./DescribeIlmpolicyResponseBodyResult";


export class DescribeILMPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * FF44681E-FD41-4FDE-B8DF-295DCDD6****
   */
  requestId?: string;
  result?: DescribeILMPolicyResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeILMPolicyResponseBodyResult,
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

