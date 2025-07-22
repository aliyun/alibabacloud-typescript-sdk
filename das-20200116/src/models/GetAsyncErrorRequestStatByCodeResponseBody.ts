// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsyncErrorRequestStatByCodeResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The number of SQL queries corresponding to the error code.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * 1062
   */
  errorCode?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      errorCode: 'errorCode',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      errorCode: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncErrorRequestStatByCodeResponseBodyData extends $dara.Model {
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
   * The number of SQL queries corresponding to the error code.
   */
  result?: GetAsyncErrorRequestStatByCodeResponseBodyDataResult[];
  /**
   * @remarks
   * The ID of the asynchronous request.
   * 
   * @example
   * async__fcd7c35788e62324622c3b4a03de****
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
   * The time when the asynchronous request was made. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1644560866961
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
      result: { 'type': 'array', 'itemType': GetAsyncErrorRequestStatByCodeResponseBodyDataResult },
      resultId: 'string',
      state: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncErrorRequestStatByCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * {     "fail": false,     "data": [       {         "instanceId": "rm-2ze8g2am97624****",         "count": 1,         "errorCode": "1062"       },       {         "instanceId": "rm-2ze8g2am97624****",         "count": 2,         "errorCode": "1064"      }     ],     "resultId": "async__fcd7c35788e62324622c3b4a03de****",     "isFinish": true,     "state": "SUCCESS",     "complete": true,     "timestamp": 1644560866961   }
   */
  data?: GetAsyncErrorRequestStatByCodeResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
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
   * 840F51F7-9C01-538D-94F6-AE712905****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
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
      data: GetAsyncErrorRequestStatByCodeResponseBodyData,
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

