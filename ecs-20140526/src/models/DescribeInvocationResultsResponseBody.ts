// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInvocationResultsResponseBodyInvocation } from "./DescribeInvocationResultsResponseBodyInvocation";


export class DescribeInvocationResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the execution results.
   */
  invocation?: DescribeInvocationResultsResponseBodyInvocation;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invocation: 'Invocation',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocation: DescribeInvocationResultsResponseBodyInvocation,
      requestId: 'string',
    };
  }

  validate() {
    if(this.invocation && typeof (this.invocation as any).validate === 'function') {
      (this.invocation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

