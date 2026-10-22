// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddMemoriesRequestBodyMessages extends $dara.Model {
  /**
   * @remarks
   * The content of the message.
   * 
   * This parameter is required.
   * 
   * @example
   * The user likes hiking
   */
  content?: string;
  /**
   * @remarks
   * The role of the message.
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMemoriesRequestBodyScope extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent. The length is limited to 1 to 128 UTF-8 bytes. The ID cannot contain a forward slash (/) or an asterisk (*).
   * 
   * @example
   * agent-001
   */
  agentId?: string;
  /**
   * @remarks
   * The ID of the session. The length is limited to 1 to 128 UTF-8 bytes. The ID cannot contain a forward slash (/) or an asterisk (*).
   * 
   * @example
   * session-001
   */
  sessionId?: string;
  /**
   * @remarks
   * The ID of the user. The length is limited to 1 to 128 UTF-8 bytes. The ID cannot contain a forward slash (/) or an asterisk (*).
   * 
   * @example
   * user-001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      sessionId: 'sessionId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      sessionId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMemoriesRequestBody extends $dara.Model {
  /**
   * @remarks
   * The list of messages. You must provide either this parameter or Text, but not both. The list must contain 1 to 20 messages, and the total size of the content must not exceed 32,000 UTF-8 bytes.
   */
  messages?: AddMemoriesRequestBodyMessages[];
  /**
   * @remarks
   * The string key-value metadata. You can specify up to 16 keys. The maximum length of a key is 64 characters, and the maximum length of a value is 1,024 characters.
   */
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * The time reference point for the batch of messages or text. The value must be in RFC 3339 format with a time zone and support fractional seconds.
   * 
   * @example
   * 2023-05-08T13:56:00+08:00
   */
  referenceTime?: string;
  /**
   * @remarks
   * The scope of the write operation. UserId, AgentId, and SessionId are all optional.
   */
  scope?: AddMemoriesRequestBodyScope;
  /**
   * @remarks
   * Specifies whether to synchronously wait for memory extraction to complete. Default value: true.
   */
  sync?: boolean;
  /**
   * @remarks
   * The text to be written directly. You must provide either this parameter or Messages, but not both. The size of the text must not exceed 32,000 UTF-8 bytes.
   * 
   * @example
   * The user likes hiking
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
      metadata: 'metadata',
      referenceTime: 'referenceTime',
      scope: 'scope',
      sync: 'sync',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': AddMemoriesRequestBodyMessages },
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      referenceTime: 'string',
      scope: AddMemoriesRequestBodyScope,
      sync: 'boolean',
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(this.scope && typeof (this.scope as any).validate === 'function') {
      (this.scope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMemoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for writing to memory.
   * 
   * This parameter is required.
   */
  body?: AddMemoriesRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: AddMemoriesRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

