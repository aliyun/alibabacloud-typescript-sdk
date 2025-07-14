// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSpecificationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The CPU specification of the instance type. Unit: millicore.
   * 
   * @example
   * 2000
   */
  cpu?: number;
  /**
   * @remarks
   * Indicates whether the instance type is available. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The ID of the instance type.
   * 
   * @example
   * 4
   */
  id?: number;
  /**
   * @remarks
   * The memory size of the instance type. Unit: MB.
   * 
   * @example
   * 4096
   */
  memory?: number;
  /**
   * @remarks
   * The name of the instance type.
   */
  specInfo?: string;
  /**
   * @remarks
   * The version number of the instance type.
   * 
   * @example
   * 0
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      enable: 'Enable',
      id: 'Id',
      memory: 'Memory',
      specInfo: 'SpecInfo',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      enable: 'boolean',
      id: 'number',
      memory: 'number',
      specInfo: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecificationsResponseBody extends $dara.Model {
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
   * The information about the instance types.
   */
  data?: DescribeInstanceSpecificationsResponseBodyData[];
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
   * The returned message. Valid values:
   * 
   * *   success: If the call is successful, **success** is returned.
   * *   If the request failed, an error code is returned.
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
   * Indicates whether the instance types were queried. Valid values:
   * 
   * *   **true**: The instance types were queried.
   * *   **false**: The instance types failed to be queried.
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
      data: { 'type': 'array', 'itemType': DescribeInstanceSpecificationsResponseBodyData },
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

