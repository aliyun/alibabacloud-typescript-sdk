// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatSessionResponseBodyMessages extends $dara.Model {
  /**
   * @remarks
   * 消息内容
   * 
   * @example
   * 示例内容
   */
  content?: string;
  /**
   * @remarks
   * 该消息之后 LLM 上下文是否已清空
   * 
   * @example
   * true
   */
  contextCleared?: boolean;
  /**
   * @remarks
   * 是否来自分享续聊复制的消息
   * 
   * @example
   * true
   */
  fromShare?: boolean;
  /**
   * @remarks
   * 消息ID
   * 
   * @example
   * exampleId
   */
  id?: string;
  /**
   * @remarks
   * 更新时间
   * 
   * @example
   * 1
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * 类型
   * 
   * @example
   * string_value
   */
  object?: string;
  /**
   * @remarks
   * 角色
   * 
   * @example
   * string_value
   */
  role?: string;
  /**
   * @remarks
   * 分享来源用户名称
   * 
   * @example
   * string_value
   */
  shareUserName?: string;
  /**
   * @remarks
   * 消息状态
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * 追踪ID
   * 
   * @example
   * exampleTraceId
   */
  traceId?: string;
  updateAt?: number;
  /**
   * @remarks
   * 用户反馈类型
   * 
   * @example
   * string_value
   */
  userFeedback?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contextCleared: 'contextCleared',
      fromShare: 'fromShare',
      id: 'id',
      metadata: 'metadata',
      object: 'object',
      role: 'role',
      shareUserName: 'shareUserName',
      status: 'status',
      traceId: 'traceId',
      updateAt: 'updateAt',
      userFeedback: 'userFeedback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contextCleared: 'boolean',
      fromShare: 'boolean',
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      object: 'string',
      role: 'string',
      shareUserName: 'string',
      status: 'string',
      traceId: 'string',
      updateAt: 'number',
      userFeedback: 'string',
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

export class GetChatSessionResponseBodySession extends $dara.Model {
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 1
   */
  createdAt?: number;
  /**
   * @remarks
   * 消息ID
   * 
   * @example
   * exampleId
   */
  id?: string;
  /**
   * @remarks
   * 创建时间是否超过30天
   * 
   * @example
   * true
   */
  isExpired?: boolean;
  /**
   * @remarks
   * 关联对象ID
   * 
   * @example
   * exampleObjectId
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * 会话使用的抽象模型名（quick/standard/flagship）
   * 
   * @example
   * string_value
   */
  model?: string;
  /**
   * @remarks
   * 类型
   * 
   * @example
   * string_value
   */
  object?: string;
  objectId?: string;
  /**
   * @remarks
   * operatingObjectName
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string[];
  /**
   * @remarks
   * 标题
   * 
   * @example
   * 示例标题
   */
  title?: string;
  /**
   * @remarks
   * 更新时间
   * 
   * @example
   * 1
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      id: 'id',
      isExpired: 'isExpired',
      metadata: 'metadata',
      model: 'model',
      object: 'object',
      objectId: 'objectId',
      operatingObjectName: 'operatingObjectName',
      title: 'title',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      id: 'string',
      isExpired: 'boolean',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      model: 'string',
      object: 'string',
      objectId: 'string',
      operatingObjectName: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(Array.isArray(this.operatingObjectName)) {
      $dara.Model.validateArray(this.operatingObjectName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatSessionResponseBody extends $dara.Model {
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
  messages?: GetChatSessionResponseBodyMessages[];
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  session?: GetChatSessionResponseBodySession;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      messages: 'messages',
      requestId: 'requestId',
      session: 'session',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      messages: { 'type': 'array', 'itemType': GetChatSessionResponseBodyMessages },
      requestId: 'string',
      session: GetChatSessionResponseBodySession,
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(this.session && typeof (this.session as any).validate === 'function') {
      (this.session as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

