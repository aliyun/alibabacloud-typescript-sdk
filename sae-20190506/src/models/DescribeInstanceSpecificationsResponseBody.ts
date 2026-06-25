// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSpecificationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The CPU specification. Unit: millicores.
   * 
   * @example
   * 2000
   */
  cpu?: number;
  /**
   * @remarks
   * Indicates whether the instance specification is available. Valid values:
   * 
   * - **true**: available
   * 
   * - **false**: unavailable
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The ID of the instance specification.
   * 
   * @example
   * 4
   */
  id?: number;
  /**
   * @remarks
   * The memory specification. Unit: MB.
   * 
   * @example
   * 4096
   */
  memory?: number;
  /**
   * @remarks
   * The name of the instance specification.
   * 
   * @example
   * General-purpose 4
   */
  specInfo?: string;
  /**
   * @remarks
   * The version of the instance specification.
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
   * - **2xx**: The request is successful.
   * 
   * - **3xx**: The request is redirected.
   * 
   * - **4xx**: The request is invalid.
   * 
   * - **5xx**: A server error occurs.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The instance specifications.
   */
  data?: DescribeInstanceSpecificationsResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * - The **ErrorCode** parameter is not returned if the request is successful.
   * 
   * - The **ErrorCode** parameter is returned if the request fails. For more information, see the **Error codes** section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
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
   * Indicates whether the instance specifications are obtained. Valid values:
   * 
   * - **true**: The instance specifications are obtained.
   * 
   * - **false**: The instance specifications fail to be obtained.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID that is used to query the details of a request.
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

