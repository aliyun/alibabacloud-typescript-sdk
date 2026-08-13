// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAsyncChatMessageResponseBody extends $dara.Model {
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
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 助手消息ID；用于随后调用 streamChatMessage 订阅生成结果
   * 
   * @example
   * 3cf84d92-f273-4bb7-ab3c-52646d25ec30
   */
  messageId?: string;
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
   * 本次调用是否新建了会话
   * 
   * @example
   * true
   */
  sessionCreated?: boolean;
  /**
   * @remarks
   * 会话ID；续写会话时与入参一致，新建会话时为服务端生成值
   * 
   * @example
   * bd772dcc-afab-44ad-9fb8-bca716726201
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      messageId: 'messageId',
      requestId: 'requestId',
      sessionCreated: 'sessionCreated',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      messageId: 'string',
      requestId: 'string',
      sessionCreated: 'boolean',
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

