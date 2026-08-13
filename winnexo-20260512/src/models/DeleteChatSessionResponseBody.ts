// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChatSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 是否删除成功
   * 
   * @example
   * true
   */
  deleted?: boolean;
  /**
   * @remarks
   * 是否硬删除
   * 
   * @example
   * true
   */
  hardDelete?: boolean;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 会话 ID
   * 
   * @example
   * exampleSessionId
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      deleted: 'deleted',
      hardDelete: 'hardDelete',
      message: 'message',
      requestId: 'requestId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      deleted: 'boolean',
      hardDelete: 'boolean',
      message: 'string',
      requestId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

