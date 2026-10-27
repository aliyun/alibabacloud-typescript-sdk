// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIdentityProviderSCIMCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * 失败时结合 HTTP 状态及 message 处理。
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * 本次请求的处理状态，不等同后台任务最终结果。
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * 请求受理或错误消息；异步任务结果需按对应查询接口核对。
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * 用于关联本次调用与排障，失败时请保留。
   * 
   * @example
   * request-example
   */
  requestId?: string;
  /**
   * @remarks
   * true 表示本次请求处理成功；异步写入仍需继续查询任务结果。
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

