// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgentVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码，请求成功时为 SUCCESS，失败时为错误码。
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * HTTP 状态码。
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * 响应消息，请求成功时为 success，失败时为错误信息。
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * 请求 ID，用于定位和排查请求。
   * 
   * @example
   * 5E8F3C2A-1B4D-4F6E-9A7C-0D2B8E6F4A1C
   */
  requestId?: string;
  /**
   * @remarks
   * 请求是否成功。
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

