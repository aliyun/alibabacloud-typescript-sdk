// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchRestartApplicationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the change process.
   * 
   * @example
   * 01db03d3-3ee9-48b3-b3d0-dfce2d88****
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

export class BatchRestartApplicationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status or POP error code. Value description:
   * 
   * 2xx: The request was successful. 3xx: The request was redirected. 4xx: The request was invalid. 5xx: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response.
   */
  data?: BatchRestartApplicationsResponseBodyData;
  /**
   * @remarks
   * The error code. Value description:
   * 
   * If the request succeeds, this field is not returned. It is returned only if the request fails. For more information, see the "Error codes" section in this topic.
   * 
   * @example
   * System.Upgrading
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. Value description:
   * 
   * If the request succeeds, a success message is returned. If the request fails, an error code is returned.
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
   * Indicates whether the applications were started. Valid values:
   * 
   * true and false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the trace, which is used to query the exact call information.
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
      data: BatchRestartApplicationsResponseBodyData,
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

