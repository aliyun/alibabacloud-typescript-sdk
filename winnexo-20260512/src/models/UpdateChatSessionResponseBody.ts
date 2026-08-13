// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChatSessionResponseBodySession extends $dara.Model {
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

export class UpdateChatSessionResponseBody extends $dara.Model {
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
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  session?: UpdateChatSessionResponseBodySession;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      session: 'session',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      session: UpdateChatSessionResponseBodySession,
    };
  }

  validate() {
    if(this.session && typeof (this.session as any).validate === 'function') {
      (this.session as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

