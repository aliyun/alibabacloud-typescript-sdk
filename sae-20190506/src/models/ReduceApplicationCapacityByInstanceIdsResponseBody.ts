// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReduceApplicationCapacityByInstanceIdsResponseBodyData } from "./ReduceApplicationCapacityByInstanceIdsResponseBodyData";


export class ReduceApplicationCapacityByInstanceIdsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
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
   * The information about the change process.
   */
  data?: ReduceApplicationCapacityByInstanceIdsResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed. Take note of the following rules:
   * 
   * *   The **ErrorCode** parameter is not returned if the request succeeds.
   * *   If the call fails, the **ErrorCode** parameter is returned. For more information, see the "**Error codes**" section of this topic.
   * 
   * @example
   * Null
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information that is returned. Take note of the following rules:
   * 
   * *   success: If the call is successful, **success** is returned.
   * *   An error code: If the call fails, an error code is returned.
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
   * 91F93257-7A4A-4BD3-9A8E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the information of the change order was queried. Take note of the following rules:
   * 
   * *   **true**: The information was queried.
   * *   **false**: The image failed to be found.
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
      data: ReduceApplicationCapacityByInstanceIdsResponseBodyData,
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

