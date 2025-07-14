// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConfigMapResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The returned result.
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

export class CreateConfigMapResponseBody extends $dara.Model {
  /**
   * @remarks
   * Empty
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The trace ID that is used to query the details of the request.
   */
  data?: CreateConfigMapResponseBodyData;
  /**
   * @remarks
   * The ID of the ConfigMap that was created.
   * 
   * @example
   * The error code. Valid values:
   * 
   * *   If the call is successful, the **ErrorCode** parameter is not returned.
   * *   If the call fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The returned message.
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
      data: CreateConfigMapResponseBodyData,
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

