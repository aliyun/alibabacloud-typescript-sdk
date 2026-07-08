// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAuditTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code
   * 
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the audit task was canceled successfully
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * 错误消息
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request
   * 
   * @example
   * xxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

