// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEdasContainersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the component is disabled. Valid values:
   * 
   * - **true**: The component is disabled.
   * 
   * - **false**: The component is not disabled.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The version of the application container provided by the HSF framework, such as the Ali-Tomcat container.
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
   * - **2xx**: success
   * 
   * - **3xx**: redirection
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
   * A list of components.
   */
  data?: DescribeEdasContainersResponseBodyData[];
  /**
   * @remarks
   * The error code. This parameter is returned only if the request fails. For more information, see the **Error codes** section of this topic.
   * 
   * - If the request is successful, the **ErrorCode** field is not returned.
   * 
   * - If the request fails, the **ErrorCode** field is returned. For more information, see the **Error codes** section.
   */
  errorCode?: string;
  /**
   * @remarks
   * The response message.
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
   * Indicates whether the request was successful.
   * 
   * - **true**: The operation succeeded.
   * 
   * - **false**: The operation failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The request trace ID.
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

