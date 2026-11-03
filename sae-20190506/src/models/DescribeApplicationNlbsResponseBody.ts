// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataInstancesValue } from "./DataInstancesValue";


export class DescribeApplicationNlbsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance information.
   */
  instances?: { [key: string]: DataInstancesValue };
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'map', 'keyType': 'string', 'valueType': DataInstancesValue },
    };
  }

  validate() {
    if(this.instances) {
      $dara.Model.validateMap(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationNlbsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * - **2xx**: Success.
   * - **3xx**: Redirection.
   * - **4xx**: Client error.
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeApplicationNlbsResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - If the request is successful, the **ErrorCode** parameter is not returned.
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * InvalidApplication.NotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. If the request is successful, success is returned. If the request fails, a specific error code is returned.
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
   * Specifies whether the binding is successful. Valid values:
   * 
   * - **true**: The binding is successful.
   * - **false**: The binding failed.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The trace ID used to query call details.
   * 
   * @example
   * ac1a0b2215622246421415014e****
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
      data: DescribeApplicationNlbsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
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

