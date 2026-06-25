// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the swimlane.
   * 
   * @example
   * 22318
   */
  laneId?: number;
  static names(): { [key: string]: string } {
    return {
      laneId: 'LaneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      laneId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code or an error code of Platform as a Service (PaaS). Valid values:
   * 
   * - **2xx**: The request is successful.
   * 
   * - **3xx**: The request is redirected.
   * 
   * - **4xx**: A request error occurs.
   * 
   * - **5xx**: A server error occurs.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateOrUpdateSwimmingLaneResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is not returned if the request is successful.
   * 
   * - For more information, see the "**Error codes**" section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The response message. Valid values:
   * 
   * - If the request is successful, `success` is returned.
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
   * Indicates whether the swimlane was created or updated. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The request trace ID. You can use this ID to query the details of a request.
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
      data: CreateOrUpdateSwimmingLaneResponseBodyData,
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

