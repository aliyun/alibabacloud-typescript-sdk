// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserApiRequestResponseBodyRequests } from "./DescribeUserApiRequestResponseBodyRequests";


export class DescribeUserApiRequestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D13E4540-4432-5AD7-B216-6369512514F4
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics.
   */
  requests?: DescribeUserApiRequestResponseBodyRequests[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      requests: 'Requests',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      requests: { 'type': 'array', 'itemType': DescribeUserApiRequestResponseBodyRequests },
    };
  }

  validate() {
    if(Array.isArray(this.requests)) {
      $dara.Model.validateArray(this.requests);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

