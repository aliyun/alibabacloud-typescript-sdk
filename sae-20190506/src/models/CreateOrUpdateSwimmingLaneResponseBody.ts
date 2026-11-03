// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the traffic lane.
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
   * The API status code or POP error code. Valid values:
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
   * The returned information.
   */
  data?: CreateOrUpdateSwimmingLaneResponseBodyData;
  /**
   * @remarks
   * The error code. Description:
   * 
   * - If the request is successful, the **ErrorCode** parameter is not returned.
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * InvalidParameter.NotEmpty
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. Description:
   * 
   * - If the request is normal, success is returned.
   * - If the request is abnormal, a specific error code is returned.
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
   * Specifies whether the traffic lane is created or updated successfully. Valid values:
   * 
   * - true: The traffic lane is created or updated successfully.
   * - false: The traffic lane fails to be created or updated.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to query call information accurately.
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

