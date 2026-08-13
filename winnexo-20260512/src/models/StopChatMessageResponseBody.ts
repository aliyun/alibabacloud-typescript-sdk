// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopChatMessageResponseBody extends $dara.Model {
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
   * 结束原因
   * 
   * @example
   * string_value
   */
  finishReason?: string;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 助手消息ID，由 sendAsyncChatMessage 返回；不属于当前租户时返回 404
   * 
   * @example
   * exampleMessageId
   */
  messageId?: string;
  /**
   * @remarks
   * 已生成的部分内容
   * 
   * @example
   * string_value
   */
  partialContent?: string;
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
  /**
   * @remarks
   * 消息最终状态
   * 
   * @example
   * READY
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      finishReason: 'finishReason',
      message: 'message',
      messageId: 'messageId',
      partialContent: 'partialContent',
      requestId: 'requestId',
      sessionId: 'sessionId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      finishReason: 'string',
      message: 'string',
      messageId: 'string',
      partialContent: 'string',
      requestId: 'string',
      sessionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

