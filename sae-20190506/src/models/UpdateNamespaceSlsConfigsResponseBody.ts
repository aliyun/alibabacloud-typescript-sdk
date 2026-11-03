// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNamespaceSlsConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code. Valid values: 2xx: success. 3xx: redirection. 4xx: request error. 5xx: server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - Successful request: The **ErrorCode** field is not returned.
   * - Failed request: The **ErrorCode** field is returned. For more information, see the **Error codes** section in this topic.
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
   * Indicates whether the SLS configuration for the namespace was updated successfully. Valid values:
   * - true: The configuration was updated successfully.
   * - false: The configuration failed to be updated.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to precisely query call information.
   * 
   * @example
   * 0a98a02315955564772843261e****
   */
  traceId?: string;
  /**
   * @remarks
   * Id of the request
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

