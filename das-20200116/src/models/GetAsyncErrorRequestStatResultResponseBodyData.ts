// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataResultValue } from "./DataResultValue";


export class GetAsyncErrorRequestStatResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the asynchronous request was complete.
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
   * Indicates whether the request failed. Valid values:
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
   * Indicates whether the asynchronous request was successful. Valid values:
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
   * The returned data of the asynchronous request.
   */
  result?: { [key: string]: DataResultValue };
  /**
   * @remarks
   * The ID of the asynchronous request.
   * 
   * @example
   * async__61f45ee381b2fa4e8a6545e3bee9****
   */
  resultId?: string;
  /**
   * @remarks
   * The state of the asynchronous request. Valid values:
   * 
   * *   **RUNNING**: The asynchronous request is running.
   * *   **SUCCESS**: The asynchronous request is successful.
   * *   **FAIL**: The asynchronous request fails.
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
   * 1644558576717
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      complete: 'complete',
      fail: 'fail',
      isFinish: 'isFinish',
      result: 'result',
      resultId: 'resultId',
      state: 'state',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complete: 'boolean',
      fail: 'boolean',
      isFinish: 'boolean',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': DataResultValue },
      resultId: 'string',
      state: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

