// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGreyTagRouteResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The globally unique ID of the grey tag route.
   * 
   * @example
   * 16
   */
  greyTagRouteId?: number;
  static names(): { [key: string]: string } {
    return {
      greyTagRouteId: 'GreyTagRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      greyTagRouteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGreyTagRouteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * - **2xx**: The request is successful.
   * 
   * - **3xx**: The request is redirected.
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
   * The information about the grey tag route.
   */
  data?: DeleteGreyTagRouteResponseBodyData;
  /**
   * @remarks
   * The error code. The following describes when this field is returned:
   * 
   * - This parameter is not returned if the request is successful.
   * 
   * - This parameter is returned if the request fails. For more information, see the **Error codes** section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The response message. Valid values:
   * 
   * - **success** is returned if the request is successful.
   * 
   * - An error message is returned if the request fails.
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
   * 9D29CBD0-45D3-410B-9826-52F86F90****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID. You can use this ID to query call details.
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
      data: DeleteGreyTagRouteResponseBodyData,
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

