// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAsyncErrorRequestStatResultResponseBodyData } from "./GetAsyncErrorRequestStatResultResponseBodyData";


export class GetAsyncErrorRequestStatResultResponseBody extends $dara.Model {
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
   * {         "fail": false,         "data": {             "ad78a4e7d3ce81590c9dc2d5f4bc****": {                 "sqlId": "ad78a4e7d3ce81590c9dc2d5f4bc****",                 "instanceId": "rm-2ze8g2am97624****",                 "count": 1             },             "0f92feacd92c048b06a16617a633****": {                 "sqlId": "0f92feacd92c048b06a16617a633****",                 "instanceId": "rm-2ze8g2am97624****",                 "count": 2             }         },         "resultId": "async__61f45ee381b2fa4e8a6545e3bee9****",         "isFinish": true,         "state": "SUCCESS",         "complete": true,         "timestamp": 1644558576717     }
   */
  data?: GetAsyncErrorRequestStatResultResponseBodyData;
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
   * 3FC3F8EB-3564-5D1A-B187-3B03E5B0****
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

