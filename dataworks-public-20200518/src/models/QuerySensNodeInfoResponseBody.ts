// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySensNodeInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned business data in the JSON format.
   * 
   * @example
   * {"success": true, "httpStatusCode": 200, "data": { "result": [ { "sensitiveName": "certificate expiration date", "sensitiveId": "fd4ff5a2-9537-43d1-8e4f-1d0b5ffaac12", "status": 0, "templateName": "built-in classification and grading template", "keyRuleId": "228248921215042 certificate expiration date"} ], "totalCount": 1, "currentPage": 1, "pageSize": 10 }, "requestId": 10000001}
   */
  data?: any;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 9990030003
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Missing parameter
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 10000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

