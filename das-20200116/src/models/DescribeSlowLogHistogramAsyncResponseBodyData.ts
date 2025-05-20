// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogHistogramAsyncResponseBodyDataData } from "./DescribeSlowLogHistogramAsyncResponseBodyDataData";


export class DescribeSlowLogHistogramAsyncResponseBodyData extends $dara.Model {
  data?: DescribeSlowLogHistogramAsyncResponseBodyDataData;
  /**
   * @example
   * 10910
   */
  errorCode?: number;
  /**
   * @example
   * true
   */
  isFinish?: boolean;
  /**
   * @example
   * Successful
   */
  message?: string;
  requestKey?: string;
  /**
   * @example
   * async__20ee808e72257f16a4fe024057ca****
   */
  resultId?: string;
  /**
   * @example
   * SUCCESS
   */
  state?: string;
  /**
   * @example
   * 1645668213000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      isFinish: 'IsFinish',
      message: 'Message',
      requestKey: 'RequestKey',
      resultId: 'ResultId',
      state: 'State',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeSlowLogHistogramAsyncResponseBodyDataData,
      errorCode: 'number',
      isFinish: 'boolean',
      message: 'string',
      requestKey: 'string',
      resultId: 'string',
      state: 'string',
      timestamp: 'number',
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

