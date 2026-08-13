// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConversationResponseBody extends $dara.Model {
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
   * 新建会话ID
   * 
   * @example
   * exampleConversationId
   */
  conversationId?: string;
  /**
   * @remarks
   * 会话创建时间戳（秒）
   * 
   * @example
   * 1
   */
  createdAt?: string;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  metadata?: { [key: string]: any };
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
   * 会话标题（已按调用方语言国际化）
   * 
   * @example
   * 示例标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      conversationId: 'conversationId',
      createdAt: 'createdAt',
      message: 'message',
      metadata: 'metadata',
      requestId: 'requestId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      conversationId: 'string',
      createdAt: 'string',
      message: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      title: 'string',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

