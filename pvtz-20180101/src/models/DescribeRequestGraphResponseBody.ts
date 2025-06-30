// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRequestGraphResponseBodyRequestDetails } from "./DescribeRequestGraphResponseBodyRequestDetails";


export class DescribeRequestGraphResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the DNS requests.
   */
  requestDetails?: DescribeRequestGraphResponseBodyRequestDetails;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EB71815-A421-4E51-8E8D-667F44ABE633
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestDetails: 'RequestDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestDetails: DescribeRequestGraphResponseBodyRequestDetails,
      requestId: 'string',
    };
  }

  validate() {
    if(this.requestDetails && typeof (this.requestDetails as any).validate === 'function') {
      (this.requestDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

