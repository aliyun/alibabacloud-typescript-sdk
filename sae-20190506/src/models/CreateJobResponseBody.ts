// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the job template.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the returned change order, which is used to query the job execution status.
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
   * The HTTP status code or POP error code. Valid values:
   * 
   * - **2xx**: success.
   * - **3xx**: redirection.
   * - **4xx**: request error.
   * - **5xx**: server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: CreateJobResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - If the request is successful, the **ErrorCode** parameter is not returned.
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * Application.MissingJdk
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. Valid values:
   * 
   * - If the request is successful, **success** is returned.
   * - If the request fails, a specific error code is returned.
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
   * Indicates whether the job template was created. Valid values:
   * 
   * - **true**: created.
   * - **false**: failed to create.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to accurately query the call information.
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

