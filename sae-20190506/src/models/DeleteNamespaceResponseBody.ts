// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: Success.
   * - **3xx**: Redirection.
   * - **4xx**: Client error.
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - If the request is successful, the **ErrorCode** parameter is not returned.
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * InvalidOperation.NamespaceClusterNotDeleted
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information about the call result.
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
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the namespace is deleted. Valid values:
   * 
   * - **true**: The namespace is deleted.
   * - **false**: The namespace is not deleted.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to accurately query call information.
   * 
   * @example
   * 0a981dd515966966104121683d****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
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
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

