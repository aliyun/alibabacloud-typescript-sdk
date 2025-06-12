// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogRecordsResponseBodySlowLogRecords } from "./DescribeSlowLogRecordsResponseBodySlowLogRecords";


export class DescribeSlowLogRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DF203CC8-5F68-5E3F-8050-3C77DD65731A
   */
  requestId?: string;
  /**
   * @remarks
   * The details about the slow query logs.
   */
  slowLogRecords?: DescribeSlowLogRecordsResponseBodySlowLogRecords;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slowLogRecords: 'SlowLogRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slowLogRecords: DescribeSlowLogRecordsResponseBodySlowLogRecords,
    };
  }

  validate() {
    if(this.slowLogRecords && typeof (this.slowLogRecords as any).validate === 'function') {
      (this.slowLogRecords as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

