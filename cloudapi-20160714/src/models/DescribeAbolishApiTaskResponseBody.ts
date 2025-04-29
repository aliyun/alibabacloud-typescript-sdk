// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAbolishApiTaskResponseBodyApiAbolishResults } from "./DescribeAbolishApiTaskResponseBodyApiAbolishResults";


export class DescribeAbolishApiTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result returned.
   */
  apiAbolishResults?: DescribeAbolishApiTaskResponseBodyApiAbolishResults;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E8515BA6-81CD-4191-A7CF-C4FCDD3C0D99
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiAbolishResults: 'ApiAbolishResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiAbolishResults: DescribeAbolishApiTaskResponseBodyApiAbolishResults,
      requestId: 'string',
    };
  }

  validate() {
    if(this.apiAbolishResults && typeof (this.apiAbolishResults as any).validate === 'function') {
      (this.apiAbolishResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

