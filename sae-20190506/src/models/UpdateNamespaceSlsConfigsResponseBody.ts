// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNamespaceSlsConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code. Valid values: 2xx (success), 3xx (redirect), 4xx (client error), 5xx (server error).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - If the request is successful, the response does not include the `ErrorCode` parameter.
   * 
   * - If the request fails, the response includes the `ErrorCode` parameter. For more information, see the **Error codes** section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * Additional information.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the namespace\\"s SLS configuration was successfully updated. A value of `true` indicates success, while `false` indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID for the request. You can use this ID to query the details of the request.
   * 
   * @example
   * 0a98a02315955564772843261e****
   */
  traceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AD0286B2-F4A4-5D43-9329-97DEF1019F06
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
      success: 'Success',
      traceId: 'TraceId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      message: 'string',
      success: 'boolean',
      traceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

