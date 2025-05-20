// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAsyncErrorRequestStatByCodeResponseBodyData } from "./GetAsyncErrorRequestStatByCodeResponseBodyData";


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

