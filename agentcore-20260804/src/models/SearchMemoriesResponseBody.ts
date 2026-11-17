// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMemoriesResponseBodyDataMemoriesMemoryContent extends $dara.Model {
  /**
   * @remarks
   * The memory text.
   * 
   * This parameter is required.
   * 
   * @example
   * The user likes hiking
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMemoriesResponseBodyDataMemoriesMemoryScope extends $dara.Model {
  /**
   * @remarks
   * The agent ID. The length is limited to 1 to 128 UTF-8 bytes. The value cannot contain a forward slash (/) or an asterisk (*). This field is not returned if the memory is not associated with an agent ID.
   * 
   * @example
   * agent-001
   */
  agentId?: string;
  /**
   * @remarks
   * The session ID. The length is limited to 1 to 128 UTF-8 bytes. The value cannot contain a forward slash (/) or an asterisk (*). This field is not returned if the memory is not associated with a session ID.
   * 
   * @example
   * session-001
   */
  sessionId?: string;
  /**
   * @remarks
   * The business team ID defined by the caller. If provided, it cannot be empty and can be up to 128 UTF-8 bytes in length.
   * 
   * @example
   * team-001
   */
  teamId?: string;
  /**
   * @remarks
   * The user ID. The length is limited to 1 to 128 UTF-8 bytes. The value cannot contain a forward slash (/) or an asterisk (*). This field is not returned if the memory is not associated with a user ID.
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

export class SearchMemoriesResponseBodyDataMemoriesMemory extends $dara.Model {
  /**
   * @remarks
   * The memory content.
   */
  content?: SearchMemoriesResponseBodyDataMemoriesMemoryContent;
  /**
   * @remarks
   * The creation time. The time is in RFC 3339 format. The Z at the end of the example indicates the UTC time zone.
   * 
   * @example
   * 2026-09-23T10:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The long-term memory ID.
   * 
   * @example
   * mem-2f5f9c5a8d0e4c3b
   */
  memoryId?: string;
  /**
   * @remarks
   * The memory metadata.
   * 
   * @example
   * {"topic":"hiking"}
   */
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * The memory scope.
   */
  scope?: SearchMemoriesResponseBodyDataMemoriesMemoryScope;
  /**
   * @remarks
   * The memory source. Valid values: session_extraction (extracted from session events), content_extraction (extracted from text or messages), and direct (written directly).
   * 
   * @example
   * session_extraction
   */
  source?: string;
  /**
   * @remarks
   * The memory content type. Valid values: semantic (semantic memory), skill (skill), user_profile (user preference), and session_summary (session summary).
   * 
   * @example
   * semantic
   */
  type?: string;
  /**
   * @remarks
   * The last updated time. The time is in RFC 3339 format. The Z at the end of the example indicates the UTC time zone.
   * 
   * @example
   * 2026-09-23T10:05:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * Indicates whether the memory is valid. A value of false indicates that the memory is revoked and is not included in valid memory retrieval.
   */
  valid?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createdAt: 'createdAt',
      memoryId: 'memoryId',
      metadata: 'metadata',
      scope: 'scope',
      source: 'source',
      type: 'type',
      updatedAt: 'updatedAt',
      valid: 'valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: SearchMemoriesResponseBodyDataMemoriesMemoryContent,
      createdAt: 'string',
      memoryId: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      scope: SearchMemoriesResponseBodyDataMemoriesMemoryScope,
      source: 'string',
      type: 'string',
      updatedAt: 'string',
      valid: 'boolean',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
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

export class SearchMemoriesResponseBodyDataMemories extends $dara.Model {
  /**
   * @remarks
   * The matched memory.
   * 
   * This parameter is required.
   */
  memory?: SearchMemoriesResponseBodyDataMemoriesMemory;
  /**
   * @remarks
   * The relevance score.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.86
   */
  score?: number;
  /**
   * @remarks
   * The vector similarity.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.91
   */
  similarity?: number;
  static names(): { [key: string]: string } {
    return {
      memory: 'memory',
      score: 'score',
      similarity: 'similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memory: SearchMemoriesResponseBodyDataMemoriesMemory,
      score: 'number',
      similarity: 'number',
    };
  }

  validate() {
    if(this.memory && typeof (this.memory as any).validate === 'function') {
      (this.memory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMemoriesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of retrieval results.
   * 
   * This parameter is required.
   */
  memories?: SearchMemoriesResponseBodyDataMemories[];
  static names(): { [key: string]: string } {
    return {
      memories: 'memories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memories: { 'type': 'array', 'itemType': SearchMemoriesResponseBodyDataMemories },
    };
  }

  validate() {
    if(Array.isArray(this.memories)) {
      $dara.Model.validateArray(this.memories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMemoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The retrieval result.
   */
  data?: SearchMemoriesResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 01A00000-0000-0000-0000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SearchMemoriesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

