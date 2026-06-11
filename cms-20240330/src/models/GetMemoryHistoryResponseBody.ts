// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemoryHistoryResponseBodyResultsInput extends $dara.Model {
  /**
   * @remarks
   * Message content.
   * 
   * @example
   * My name is Zhang San and I live in Hangzhou.
   */
  content?: string;
  /**
   * @remarks
   * Message sender role.
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

export class GetMemoryHistoryResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1764556182850
   */
  createdAt?: string;
  /**
   * @remarks
   * Event type.
   * 
   * @example
   * ADD
   */
  event?: string;
  /**
   * @remarks
   * Memory ID.
   * 
   * @example
   * b25d6ad7-306f-4040-9890-4dddd2505a2e
   */
  id?: string;
  /**
   * @remarks
   * Original message.
   */
  input?: GetMemoryHistoryResponseBodyResultsInput[];
  /**
   * @remarks
   * Memory ID.
   * 
   * @example
   * 019cacf6-7b39-7f61-8314-548f07ca449a
   */
  memoryId?: string;
  /**
   * @remarks
   * Metadata.
   * 
   * @example
   * {"sessionId":"test_session_001"}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * New memory.
   * 
   * @example
   * I really like Python.
   */
  newMemory?: string;
  /**
   * @remarks
   * Old memory.
   * 
   * @example
   * I really don\\"t like Python at all.
   */
  oldMemory?: string;
  /**
   * @remarks
   * Update time.
   * 
   * @example
   * 1771036123785
   */
  updatedAt?: string;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * test_session_001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      event: 'event',
      id: 'id',
      input: 'input',
      memoryId: 'memoryId',
      metadata: 'metadata',
      newMemory: 'newMemory',
      oldMemory: 'oldMemory',
      updatedAt: 'updatedAt',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      event: 'string',
      id: 'string',
      input: { 'type': 'array', 'itemType': GetMemoryHistoryResponseBodyResultsInput },
      memoryId: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      newMemory: 'string',
      oldMemory: 'string',
      updatedAt: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.input)) {
      $dara.Model.validateArray(this.input);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemoryHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 3B311FD9-A60B-55E0-A896-A0C73*********
   */
  requestId?: string;
  /**
   * @remarks
   * Return value.
   */
  results?: GetMemoryHistoryResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': GetMemoryHistoryResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

