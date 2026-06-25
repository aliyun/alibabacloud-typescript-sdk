// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIngressResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Routing rule ID.
   * 
   * @example
   * 87
   */
  ingressId?: number;
  static names(): { [key: string]: string } {
    return {
      ingressId: 'IngressId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIngressResponseBody extends $dara.Model {
  /**
   * @remarks
   * API status or POP error code. Details are as follows:
   * 
   * - **2xx**: Success.
   * 
   * - **3xx**: Redirection.
   * 
   * - **4xx**: Request error.
   * 
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Returned result.
   */
  data?: UpdateIngressResponseBodyData;
  /**
   * @remarks
   * Error code. Details are as follows:
   * 
   * - If the request is successful, the **ErrorCode** field is not returned.
   * 
   * - If the request failed, the **ErrorCode** field is returned. For more information, see the **Error Codes** list in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * Additional information. Details are as follows:
   * 
   * - If the request is normal, **success** is returned.
   * 
   * - If the request is abnormal, a specific abnormal error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the Ingress instance configuration was successfully updated. Details are as follows:
   * 
   * - **true**: The update was successful.
   * 
   * - **false**: The update failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Call chain ID.
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
      data: UpdateIngressResponseBodyData,
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

