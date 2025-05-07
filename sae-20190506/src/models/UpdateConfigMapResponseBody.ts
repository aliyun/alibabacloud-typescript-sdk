// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateConfigMapResponseBodyData } from "./UpdateConfigMapResponseBodyData";


export class UpdateConfigMapResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the ConfigMap instance was updated. Valid values:
   * 
   * *   **true**: The instance was updated.
   * *   **false**: The instance failed to be updated.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the ConfigMap instance.
   */
  data?: UpdateConfigMapResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **2xx:**: indicates that the call was successful.
   * *   **3xx**: indicates that the call was redirected.
   * *   **4xx**: indicates that the call failed.
   * *   **5xx**: indicates that a server error occurred.
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the trace. The ID is used to query the details of a request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The returned information.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The returned result.
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
      data: UpdateConfigMapResponseBodyData,
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

