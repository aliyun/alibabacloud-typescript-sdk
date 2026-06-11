// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveWorkspaceCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * 返回数据
   * 
   * @example
   * 1
   */
  data?: string;
  /**
   * @remarks
   * 错误码
   * 
   * @example
   * InvalidTid
   */
  errorCode?: string;
  /**
   * @remarks
   * http状态码
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * 错误信息，在接口失败时，返回具体错误信息，成功时则为空
   * 
   * @example
   * Failed to publish，repo branch empty
   */
  message?: string;
  /**
   * @remarks
   * 请求ID
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * 是否调用成功。
   * - **true**：调用成功。
   * - **false**：调用失败。
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
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

