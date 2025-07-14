// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataInstancesValue } from "./DataInstancesValue";


export class DescribeApplicationNlbsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the instance.
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
   * The returned data.
   */
  data?: DescribeApplicationNlbsResponseBodyData;
  /**
   * @remarks
   * The status code. Value values:
   * 
   * *   If the request was successful, **ErrorCode** is not returned.
   * *   If the request failed, **ErrorCode** is returned. For more information, see **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The message returned. Valid values:If the request was successful, success is returned. If the request failed, an error code is returned.
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
   * Indicates whether the NLB instance was successfully associated with the application. Valid values:
   * 
   * *   **true**: The application was associated.
   * *   **false**: The application failed to be associated.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The ID of the trace. The ID is used to query the details of a request.
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

