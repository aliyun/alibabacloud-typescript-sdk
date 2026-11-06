// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendWorkItemMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * 公共业务状态码；成功为200，失败为后端错误码。
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 公共状态说明；成功时为success，失败时描述具体原因。
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * 本轮助手消息ID；回复在后台异步生成，取得该ID不表示AI已开始或已完成回复。
   * 
   * @example
   * 23456789-abcd-4ef0-8123-456789abcdef
   */
  messageId?: string;
  /**
   * @remarks
   * 请求追踪ID，可用于定位本次调用及排查失败原因。
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 本次消息发送到的已有话题会话ID，不是新建会话ID。
   * 
   * @example
   * 01234567-89ab-4def-8123-456789abcdef
   */
  sessionId?: string;
  /**
   * @remarks
   * 本次提交的用户消息ID。
   * 
   * @example
   * 12345678-9abc-4def-8123-456789abcdef
   */
  userMessageId?: string;
  /**
   * @remarks
   * 请求传入的工作项ID；仅传conversationId时返回legacy-topic:<conversationId>形式的兼容ID。
   * 
   * @example
   * wi_0123456789abcdef0123456789abcdef
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      messageId: 'messageId',
      requestId: 'requestId',
      sessionId: 'sessionId',
      userMessageId: 'userMessageId',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      messageId: 'string',
      requestId: 'string',
      sessionId: 'string',
      userMessageId: 'string',
      workItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

