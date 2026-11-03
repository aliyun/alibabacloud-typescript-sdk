// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindNlbResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the change order, which is used to query the execution status of the task.
   * 
   * @example
   * ba386059-69b1-4e65-b1e5-0682d9fa****
   */
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class BindNlbResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
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
  data?: BindNlbResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - If the request is successful, the **ErrorCode** parameter is not returned.
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
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
   * Id of the request
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the applications were stopped in batches successfully. Valid values:
   * 
   * - **true**: The applications were stopped successfully.
   * - **false**: The applications failed to be stopped.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID, which is used to accurately query the call information.
   * 
   * @example
   * 0a06dfe717389800573793090e0589
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
      data: BindNlbResponseBodyData,
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

