// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchRestartApplicationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The change order ID.
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
   * The API status code or POP error code. Valid values:
   * 
   * - 2xx: The request is successful.
   * - 3xx: The request is redirected.
   * - 4xx: A request error occurred.
   * - 5xx: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: BatchRestartApplicationsResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - Successful request: The ErrorCode field is not returned.
   * - Failed request: The ErrorCode field is returned. For more information, see the error codes section in this topic.
   * 
   * @example
   * System.Upgrading
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. Valid values:
   * 
   * - success: The request is successful.
   * - Specific error code: The request is abnormal and a specific error code is returned.
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
   * Indicates whether the applications are successfully restarted in batches. Valid values:
   * 
   * - true: The applications are successfully restarted in batches.
   * - false: The applications fail to be restarted in batches.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to accurately query call information.
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

