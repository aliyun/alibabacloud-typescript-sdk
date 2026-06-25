// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComponentsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The component description.
   * 
   * @example
   * Open JDK 8
   */
  componentDescription?: string;
  /**
   * @remarks
   * The component ID.
   * 
   * @example
   * Open JDK 8
   */
  componentKey?: string;
  /**
   * @remarks
   * Indicates whether the component is expired. Valid values:
   * 
   * - **true**: The component is expired.
   * 
   * - **false**: The component is not expired.
   * 
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @remarks
   * The component type.
   * 
   * @example
   * JDK
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      componentDescription: 'ComponentDescription',
      componentKey: 'ComponentKey',
      expired: 'Expired',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentDescription: 'string',
      componentKey: 'string',
      expired: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - **2xx**: success
   * 
   * - **3xx**: redirect
   * 
   * - **4xx**: request error
   * 
   * - **5xx**: server error
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * An array of supported application components.
   */
  data?: DescribeComponentsResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * - If the request is successful, the **ErrorCode** parameter is empty.
   * 
   * - If the request fails, the **ErrorCode** parameter indicates an error code. For more information, see the **Error codes** section in this topic.
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
   * The request ID.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to query call details.
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
      data: { 'type': 'array', 'itemType': DescribeComponentsResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

