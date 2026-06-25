// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataInstancesValue } from "./DataInstancesValue";


export class DescribeApplicationNlbsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A collection of instance details.
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
   * - **2xx**: The request is successful.
   * 
   * - **3xx**: The request is redirected.
   * 
   * - **4xx**: A client error occurred.
   * 
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned in the response.
   */
  data?: DescribeApplicationNlbsResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is returned only if the request fails.
   * 
   * - For more information, see the **Error codes** section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message. A value of `success` indicates a successful request; otherwise, an error code is returned.
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
  success?: string;
  /**
   * @remarks
   * The trace ID used to query the details of the request.
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

