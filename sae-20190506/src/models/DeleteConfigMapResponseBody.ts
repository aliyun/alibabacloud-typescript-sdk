// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConfigMapResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the deleted ConfigMap instance.
   * 
   * @example
   * 1
   */
  configMapId?: number;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigMapResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned for the request.
   * 
   * - **2xx**: success
   * 
   * - **3xx**: redirection
   * 
   * - **4xx**: client error
   * 
   * - **5xx**: server error
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The operation result.
   */
  data?: DeleteConfigMapResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - Not returned if the request is successful.
   * 
   * - Returned if the request fails. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The response message.
   * 
   * - If the request is successful, **success** is returned.
   * 
   * - If the request fails, an error message is returned.
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
   * Indicates whether the deletion succeeded. Valid values:
   * 
   * - **true**: The deletion was successful.
   * 
   * - **false**: The deletion failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID for querying request details.
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
      data: DeleteConfigMapResponseBodyData,
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

