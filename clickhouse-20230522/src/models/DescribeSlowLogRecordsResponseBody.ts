// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogRecordsResponseBodyData } from "./DescribeSlowLogRecordsResponseBodyData";


export class DescribeSlowLogRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeSlowLogRecordsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DF203CC8-5F68-5E3F-8050-3C77DD65731A
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
      data: DescribeSlowLogRecordsResponseBodyData,
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

