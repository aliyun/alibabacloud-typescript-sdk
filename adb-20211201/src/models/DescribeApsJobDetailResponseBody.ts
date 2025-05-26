// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApsJobDetailResponseBodyAPSJobDetail } from "./DescribeApsJobDetailResponseBodyApsjobDetail";


export class DescribeApsJobDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried job.
   * 
   * @example
   * -
   */
  APSJobDetail?: DescribeApsJobDetailResponseBodyAPSJobDetail;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******-E606-4A42-BF6D-******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      APSJobDetail: 'APSJobDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APSJobDetail: DescribeApsJobDetailResponseBodyAPSJobDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.APSJobDetail && typeof (this.APSJobDetail as any).validate === 'function') {
      (this.APSJobDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

