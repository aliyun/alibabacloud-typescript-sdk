// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIngressResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the routing rule.
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

export class CreateIngressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: successful.
   * - **3xx**: redirected.
   * - **4xx**: request error.
   * - **5xx**: server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: CreateIngressResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - If the request is successful, the **ErrorCode** field is not returned.
   * - If the request fails, the **ErrorCode** field is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * InvalidParameter.NotEmpty
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. Valid values:
   * 
   * - If the request is normal, **success** is returned.
   * - If the request is abnormal, a specific error code is returned.
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
   * Indicates whether the routing rule was created successfully. Valid values:
   * 
   * - **true**: created successfully.
   * - **false**: failed to create.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID, which is used to accurately query the call information.
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
      data: CreateIngressResponseBodyData,
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

