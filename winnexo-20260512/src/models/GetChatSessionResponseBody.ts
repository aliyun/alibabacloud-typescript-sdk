// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatSessionResponseBodyMessages extends $dara.Model {
  /**
   * @remarks
   * The message content.
   * 
   * @example
   * Sample content
   */
  content?: string;
  /**
   * @remarks
   * Indicates whether the LLM context has been cleared after this message.
   * 
   * @example
   * true
   */
  contextCleared?: boolean;
  /**
   * @remarks
   * Indicates whether the message is copied from a shared conversation.
   * 
   * @example
   * true
   */
  fromShare?: boolean;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * exampleId
   */
  id?: string;
  /**
   * @remarks
   * The message metadata.
   * 
   * @example
   * 1
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The type.
   * 
   * @example
   * string_value
   */
  object?: string;
  /**
   * @remarks
   * The role.
   * 
   * @example
   * string_value
   */
  role?: string;
  /**
   * @remarks
   * The username of the sharing source. This parameter has a value only when from_share=True.
   * 
   * @example
   * string_value
   */
  shareUserName?: string;
  /**
   * @remarks
   * The message status.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The trace ID.
   * 
   * @example
   * exampleTraceId
   */
  traceId?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 20240101
   */
  updateAt?: number;
  /**
   * @remarks
   * The user feedback type: LIKE | DISLIKE | CANCEL.
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
   * The creation time.
   * 
   * @example
   * 1
   */
  createdAt?: number;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * exampleId
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the creation time exceeds 30 days.
   * 
   * @example
   * true
   */
  isExpired?: boolean;
  /**
   * @remarks
   * The session metadata.
   * 
   * @example
   * exampleObjectId
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The abstract model name used by the session (quick/standard/flagship).
   * 
   * @example
   * string_value
   */
  model?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * string_value
   */
  object?: string;
  /**
   * @remarks
   * The associated object ID.
   * 
   * @example
   * 2676
   */
  objectId?: string;
  /**
   * @remarks
   * The list of digital employee names.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string[];
  /**
   * @remarks
   * The title.
   * 
   * @example
   * Sample title
   */
  title?: string;
  /**
   * @remarks
   * The update time.
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
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The message data detail structure.
   */
  messages?: GetChatSessionResponseBodyMessages[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The session ID.
   */
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

