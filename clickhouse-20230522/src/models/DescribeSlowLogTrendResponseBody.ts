// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogTrendResponseBodyData } from "./DescribeSlowLogTrendResponseBodyData";


export class DescribeSlowLogTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: DescribeSlowLogTrendResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7D3ECB0E-98CA-5E08-A9CA-F70C5A1E9BDF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeSlowLogTrendResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

