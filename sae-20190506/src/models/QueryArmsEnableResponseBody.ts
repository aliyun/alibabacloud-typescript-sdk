// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryArmsEnableResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates if enabled. Valid values: true and false.
   * 
   * @example
   * true
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryArmsEnableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code or error code. Valid values: 2xx: The request was successful. 3xx: The request was redirected. 4xx: The request was invalid. 5xx: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: QueryArmsEnableResponseBodyData;
  /**
   * @remarks
   * The error code. Value description:
   * 
   * *   If the request was successful, this field is not returned.
   * *   For more information, see the **Error codes** section of this topic.
   * 
   * @example
   * InvalidApplication.NotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. Value description:
   * 
   * *   If the request was successful, **success** is returned.
   * *   If the request failed, an error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 01CF26C7-00A3-4AA6-BA76-7E95F2A3****
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
  /**
   * @remarks
   * The ID of the trace, which is used to query the details of a request.
   * 
   * @example
   * 0a98a02315955564772843261e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryArmsEnableResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
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

