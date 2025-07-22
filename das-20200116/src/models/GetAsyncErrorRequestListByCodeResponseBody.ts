// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsyncErrorRequestListByCodeResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The instance ID
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * SQL ID.
   * 
   * @example
   * ad78a4e7d3ce81590c9dc2d5f4bc****
   */
  sqlId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      sqlId: 'sqlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      sqlId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncErrorRequestListByCodeResponseBodyData extends $dara.Model {
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
   * The instance ID.
   */
  result?: GetAsyncErrorRequestListByCodeResponseBodyDataResult[];
  /**
   * @remarks
   * The ID of the asynchronous request.
   * 
   * @example
   * async__c39d43ece52d35267cc4b92a0c26****
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
   * 1644559407740
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
      result: { 'type': 'array', 'itemType': GetAsyncErrorRequestListByCodeResponseBodyDataResult },
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

export class GetAsyncErrorRequestListByCodeResponseBody extends $dara.Model {
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
   * {         "fail": false,         "data": [             {                 "sqlId": "ad78a4e7d3ce81590c9dc2d5f4bc****",                 "instanceId": "rm-2ze8g2am97624****"             },             {                 "sqlId": "0f92feacd92c048b06a16617a633****",                 "instanceId": "rm-2ze8g2am97624****"             }         ],         "resultId": "async__c39d43ece52d35267cc4b92a0c26****",         "isFinish": true,         "state": "SUCCESS",         "complete": true,         "timestamp": 1644559407740     }
   */
  data?: GetAsyncErrorRequestListByCodeResponseBodyData;
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
   * 9CB97BC4-6479-55D0-B9D0-EA925AFE****
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
      data: GetAsyncErrorRequestListByCodeResponseBodyData,
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

