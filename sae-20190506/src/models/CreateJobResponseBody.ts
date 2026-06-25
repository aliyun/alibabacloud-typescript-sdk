// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The job template ID.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The change order ID. You can use this ID to check the execution status of the task.
   * 
   * @example
   * 01db03d3-3ee9-48b3-b3d0-dfce2d88****
   */
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      changeOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code or a POP error code. Valid values:
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: A request error occurred.
   * 
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateJobResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is not returned if the request is successful.
   * 
   * - If the request fails, this parameter is returned. For more information, see the **error codes** section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * Additional information. Valid values:
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
   * 01CF26C7-00A3-4AA6-BA76-7E95F2A3***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the job template was created successfully. Valid values:
   * 
   * - **true**: The job template was created.
   * 
   * - **false**: The job template was not created.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The call trace ID. You can use this ID to query detailed information about the call.
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
      data: CreateJobResponseBodyData,
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

