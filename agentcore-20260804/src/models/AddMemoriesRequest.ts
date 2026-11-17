// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddMemoriesRequestBodyMemories extends $dara.Model {
  /**
   * @remarks
   * The string key-value tags set by the caller. A maximum of 16 tags are supported. A key can be up to 64 Unicode characters in length, and a value can be up to 1,024 Unicode characters in length. Empty strings are allowed. Nested objects or arrays are not supported.
   * 
   * @example
   * {"topic":"hiking"}
   */
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * The content of the memory to be directly written. It cannot be empty and can be up to 32,000 UTF-8 bytes in length.
   * 
   * @example
   * The user likes hiking
   */
  text?: string;
  /**
   * @remarks
   * The content type of the memory. Valid values: semantic for semantic memory, skill for skill, user_profile for user preference, and session_summary for session summary.
   * 
   * @example
   * semantic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'metadata',
      text: 'text',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      text: 'string',
      type: 'string',
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
   * The reference time of the message in RFC 3339 format with a time zone. If omitted, the request-level referenceTime is used. If both are omitted, the time of the current request is used.
   * 
   * @example
   * 2023-05-08T13:56:00+08:00
   */
  referenceTime?: string;
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
      referenceTime: 'referenceTime',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      referenceTime: 'string',
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
   * The agent ID. The length is limited to 1 to 128 UTF-8 bytes. It cannot contain a forward slash (/) or an asterisk (*).
   * 
   * @example
   * agent-001
   */
  agentId?: string;
  /**
   * @remarks
   * The session ID. The length is limited to 1 to 128 UTF-8 bytes. It cannot contain a forward slash (/) or an asterisk (*).
   * 
   * @example
   * session-001
   */
  sessionId?: string;
  /**
   * @remarks
   * The business team ID defined by the caller. It cannot be empty when provided and can be up to 128 UTF-8 bytes in length.
   * 
   * @example
   * team-001
   */
  teamId?: string;
  /**
   * @remarks
   * The user ID. The length is limited to 1 to 128 UTF-8 bytes. It cannot contain a forward slash (/) or an asterisk (*).
   * 
   * @example
   * user-001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      sessionId: 'sessionId',
      teamId: 'teamId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      sessionId: 'string',
      teamId: 'string',
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
   * Specifies whether to extract memories. If omitted or set to true, memories are extracted from text or messages. If set to false, memories are directly written.
   */
  extract?: boolean;
  /**
   * @remarks
   * The list of memories to be directly written when extract is set to false. The list can contain 1 to 100 memories. You cannot provide text, messages, referenceTime, or request-level metadata at the same time.
   */
  memories?: AddMemoriesRequestBodyMemories[];
  /**
   * @remarks
   * The list of messages. You must provide either text or messages, but not both. The list can contain 1 to 20 messages, and the total length of the content cannot exceed 32,000 UTF-8 bytes.
   */
  messages?: AddMemoriesRequestBodyMessages[];
  /**
   * @remarks
   * The string key-value metadata. A maximum of 16 keys are supported. A key can be up to 64 characters in length, and a value can be up to 1,024 characters in length.
   * 
   * @example
   * {"topic":"hiking"}
   */
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * The time reference point for the batch of messages or text. It uses the RFC 3339 format with a time zone and supports fractional seconds.
   * 
   * @example
   * 2023-05-08T13:56:00+08:00
   */
  referenceTime?: string;
  /**
   * @remarks
   * The write scope. UserId, AgentId, and SessionId are all optional.
   */
  scope?: AddMemoriesRequestBodyScope;
  /**
   * @remarks
   * Specifies whether to synchronously wait for the memory extraction to complete. Default value: true.
   */
  sync?: boolean;
  /**
   * @remarks
   * The text to be directly written. You must provide either text or messages, but not both. The text cannot exceed 32,000 UTF-8 bytes.
   * 
   * @example
   * The user likes hiking
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      extract: 'extract',
      memories: 'memories',
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
      extract: 'boolean',
      memories: { 'type': 'array', 'itemType': AddMemoriesRequestBodyMemories },
      messages: { 'type': 'array', 'itemType': AddMemoriesRequestBodyMessages },
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      referenceTime: 'string',
      scope: AddMemoriesRequestBodyScope,
      sync: 'boolean',
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.memories)) {
      $dara.Model.validateArray(this.memories);
    }
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
   * The write memory request.
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

