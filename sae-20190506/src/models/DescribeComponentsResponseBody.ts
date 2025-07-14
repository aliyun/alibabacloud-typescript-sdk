// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComponentsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the component.
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
   * *   **true**: The component is expired.
   * *   **false**: The component is not expired.
   * 
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @remarks
   * The type of the component.
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
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: The request was successful.
   * *   **3xx**: The request was redirected.
   * *   **4xx**: The request failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the supported components.
   */
  data?: DescribeComponentsResponseBodyData[];
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   If the request was successful, **ErrorCode** is not returned.
   * *   If the request failed, **ErrorCode** is returned. For more information, see **Error codes** section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the component version was obtained. Valid values:
   * 
   * *   **true**: The applications were obtained.
   * *   **false**: The applications failed to be queried.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the trace. The ID is used to query the details of a request.
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

