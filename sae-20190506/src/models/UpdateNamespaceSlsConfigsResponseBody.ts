// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNamespaceSlsConfigsResponseBody extends $dara.Model {
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
   * The error code. Value description:
   * 
   * *   If the request was successful, this field is not returned.
   * *   For more information, see the **Error codes** section of this topic.
   * 
   * @example
   * InvalidNamespaceId.NotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the Simple Log Service configuration for the namespace was updated. Valid values: true and false.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the trace, which is used to query the exact call information.
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

