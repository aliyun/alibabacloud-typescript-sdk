// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMySQLAllSessionAsyncResponseBodyDataSessionData } from "./GetMySqlallSessionAsyncResponseBodyDataSessionData";


export class GetMySQLAllSessionAsyncResponseBodyData extends $dara.Model {
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
  complete?: boolean;
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
   * The ID of the asynchronous request.
   * 
   * @example
   * async__507044db6c4eadfa2dab9b084e80****
   */
  resultId?: string;
  /**
   * @remarks
   * The session data.
   */
  sessionData?: GetMySQLAllSessionAsyncResponseBodyDataSessionData;
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
   * The time when the asynchronous request was made. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1660100753556
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      complete: 'Complete',
      fail: 'Fail',
      isFinish: 'IsFinish',
      resultId: 'ResultId',
      sessionData: 'SessionData',
      state: 'State',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complete: 'boolean',
      fail: 'boolean',
      isFinish: 'boolean',
      resultId: 'string',
      sessionData: GetMySQLAllSessionAsyncResponseBodyDataSessionData,
      state: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(this.sessionData && typeof (this.sessionData as any).validate === 'function') {
      (this.sessionData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

