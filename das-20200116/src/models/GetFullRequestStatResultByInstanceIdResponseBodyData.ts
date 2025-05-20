// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFullRequestStatResultByInstanceIdResponseBodyDataResult } from "./GetFullRequestStatResultByInstanceIdResponseBodyDataResult";


export class GetFullRequestStatResultByInstanceIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the asynchronous request failed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  fail?: boolean;
  /**
   * @remarks
   * Indicates whether the asynchronous request was complete. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isFinish?: boolean;
  /**
   * @remarks
   * The returned full request data.
   */
  result?: GetFullRequestStatResultByInstanceIdResponseBodyDataResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9CB97BC4-6479-55D0-B9D0-EA925AFE****
   */
  resultId?: string;
  /**
   * @remarks
   * The state of the asynchronous request. Valid values:
   * 
   * *   **RUNNING**
   * *   **SUCCESS**
   * *   **FAIL**
   * 
   * @example
   * SUCCESS
   */
  state?: string;
  /**
   * @remarks
   * The time when the asynchronous request was sent. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1645668213000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      fail: 'Fail',
      isFinish: 'IsFinish',
      result: 'Result',
      resultId: 'ResultId',
      state: 'State',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fail: 'boolean',
      isFinish: 'boolean',
      result: GetFullRequestStatResultByInstanceIdResponseBodyDataResult,
      resultId: 'string',
      state: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

