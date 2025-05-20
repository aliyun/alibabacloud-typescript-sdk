// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogStatisticResponseBodyDataData } from "./DescribeSlowLogStatisticResponseBodyDataData";


export class DescribeSlowLogStatisticResponseBodyData extends $dara.Model {
  data?: DescribeSlowLogStatisticResponseBodyDataData;
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
  /**
   * @example
   * 123456789
   */
  requestKey?: string;
  /**
   * @example
   * async__665ee69612f1627c7fd9f3c85075****
   */
  resultId?: string;
  /**
   * @example
   * SUCCESS
   */
  state?: string;
  /**
   * @example
   * 1735104224250
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
      data: DescribeSlowLogStatisticResponseBodyDataData,
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

