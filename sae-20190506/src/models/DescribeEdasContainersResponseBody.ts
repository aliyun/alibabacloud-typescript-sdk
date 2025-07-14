// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEdasContainersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the component is disabled. Valid values:
   * 
   * *   **true**: The component is disabled.
   * *   **false**: The component is not disabled.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The version of the container, such as Ali-Tomcat, in which an application that is developed based on High-speed Service Framework (HSF) is deployed.
   * 
   * @example
   * 3.5.3
   */
  edasContainerVersion?: string;
  static names(): { [key: string]: string } {
    return {
      disabled: 'Disabled',
      edasContainerVersion: 'EdasContainerVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabled: 'boolean',
      edasContainerVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdasContainersResponseBody extends $dara.Model {
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
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The components.
   */
  data?: DescribeEdasContainersResponseBodyData[];
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * *   If the call is successful, the **ErrorCode** parameter is not returned.
   * *   If the call fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
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
   * Indicates whether the list of container components of a microservices application was obtained. Valid values:
   * 
   * *   **true**: The list was obtained.
   * *   **false**: The list failed to be obtained.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID that is used to query the details of the request.
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
      data: { 'type': 'array', 'itemType': DescribeEdasContainersResponseBodyData },
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

