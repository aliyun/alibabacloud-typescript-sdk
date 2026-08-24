// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataResultValue } from "./DataResultValue";


export class GetAsyncErrorRequestStatResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the asynchronous request is complete.
   * 
   * - **true**: The request is complete.
   * 
   * - **false**: The request is in progress.
   * 
   * @example
   * true
   */
  complete?: boolean;
  /**
   * @remarks
   * Indicates whether the request failed.
   * 
   * - **true**: The request failed.
   * 
   * - **false**: The request succeeded.
   * 
   * @example
   * false
   */
  fail?: boolean;
  /**
   * @remarks
   * Indicates whether the asynchronous request is complete.
   * 
   * - **true**: The request is complete.
   * 
   * - **false**: The request is in progress.
   * 
   * @example
   * true
   */
  isFinish?: boolean;
  /**
   * @remarks
   * The data returned by the asynchronous request.
   */
  result?: { [key: string]: DataResultValue };
  /**
   * @remarks
   * The asynchronous request ID.
   * 
   * @example
   * async__61f45ee381b2fa4e8a6545e3bee9****
   */
  resultId?: string;
  /**
   * @remarks
   * The state of the asynchronous request. Valid values:
   * 
   * - **RUNNING**: The request is running.
   * 
   * - **SUCCESS**: The request succeeded.
   * 
   * - **FAIL**: The request failed.
   * 
   * @example
   * SUCCESS
   */
  state?: string;
  /**
   * @remarks
   * The time when the asynchronous request was complete. The time is a Unix timestamp in milliseconds.
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

export class GetAsyncErrorRequestStatResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {         "fail": false,         "data": {             "ad78a4e7d3ce81590c9dc2d5f4bc****": {                 "sqlId": "ad78a4e7d3ce81590c9dc2d5f4bc****",                 "instanceId": "rm-2ze8g2am97624****",                 "count": 1             },             "0f92feacd92c048b06a16617a633****": {                 "sqlId": "0f92feacd92c048b06a16617a633****",                 "instanceId": "rm-2ze8g2am97624****",                 "count": 2             }         },         "resultId": "async__61f45ee381b2fa4e8a6545e3bee9****",         "isFinish": true,         "state": "SUCCESS",         "complete": true,         "timestamp": 1644558576717     }
   */
  data?: GetAsyncErrorRequestStatResultResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * > If the request succeeds, this parameter returns **Successful**. If the request fails, this parameter returns an error message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3FC3F8EB-3564-5D1A-B187-3B03E5B0****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetAsyncErrorRequestStatResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

