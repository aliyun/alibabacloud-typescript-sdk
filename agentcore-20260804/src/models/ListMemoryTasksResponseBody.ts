// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemoryTasksResponseBodyItemsChanges extends $dara.Model {
  /**
   * @remarks
   * memoryId
   * 
   * This parameter is required.
   * 
   * @example
   * mem-2f5f9c5a8d0e4c3b
   */
  memoryId?: string;
  /**
   * @remarks
   * operation
   * 
   * This parameter is required.
   * 
   * @example
   * ADD
   */
  operation?: string;
  static names(): { [key: string]: string } {
    return {
      memoryId: 'memoryId',
      operation: 'operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memoryId: 'string',
      operation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemoryTasksResponseBodyItemsError extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * This parameter is required.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * message
   * 
   * This parameter is required.
   * 
   * @example
   * The format of the event content is incorrect
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemoryTasksResponseBodyItemsMemories extends $dara.Model {
  /**
   * @remarks
   * memoryId
   * 
   * This parameter is required.
   * 
   * @example
   * mem-2f5f9c5a8d0e4c3b
   */
  memoryId?: string;
  static names(): { [key: string]: string } {
    return {
      memoryId: 'memoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemoryTasksResponseBodyItemsStrategyConfig extends $dara.Model {
  /**
   * @remarks
   * The strategy-level instruction. It takes effect together with the store-level instruction. If a conflict occurs, this field takes precedence.
   * 
   * @example
   * Retain only long-term preferences explicitly expressed by the user
   */
  instruction?: string;
  /**
   * @remarks
   * type
   * 
   * This parameter is required.
   * 
   * @example
   * auto
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instruction: 'instruction',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instruction: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemoryTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * changes
   */
  changes?: ListMemoryTasksResponseBodyItemsChanges[];
  /**
   * @remarks
   * createdAt
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-09-23T10:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * error
   */
  error?: ListMemoryTasksResponseBodyItemsError;
  /**
   * @remarks
   * finishedAt
   * 
   * @example
   * 2026-09-23T10:00:01Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * inputMessageCount
   * 
   * This parameter is required.
   * 
   * @example
   * 8
   */
  inputMessageCount?: number;
  /**
   * @remarks
   * inputTokenCount
   * 
   * This parameter is required.
   * 
   * @example
   * 120
   */
  inputTokenCount?: number;
  /**
   * @remarks
   * memories
   * 
   * This parameter is required.
   */
  memories?: ListMemoryTasksResponseBodyItemsMemories[];
  /**
   * @remarks
   * startedAt
   * 
   * @example
   * 2026-09-23T10:00:00Z
   */
  startedAt?: string;
  /**
   * @remarks
   * status
   * 
   * This parameter is required.
   * 
   * @example
   * SUCCEEDED
   */
  status?: string;
  /**
   * @remarks
   * strategyConfig
   * 
   * This parameter is required.
   */
  strategyConfig?: ListMemoryTasksResponseBodyItemsStrategyConfig;
  /**
   * @remarks
   * taskId
   * 
   * This parameter is required.
   * 
   * @example
   * task-2f5f9c5a8d0e4c3b
   */
  taskId?: string;
  /**
   * @remarks
   * triggerType
   * 
   * This parameter is required.
   * 
   * @example
   * AUTO
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      changes: 'changes',
      createdAt: 'createdAt',
      error: 'error',
      finishedAt: 'finishedAt',
      inputMessageCount: 'inputMessageCount',
      inputTokenCount: 'inputTokenCount',
      memories: 'memories',
      startedAt: 'startedAt',
      status: 'status',
      strategyConfig: 'strategyConfig',
      taskId: 'taskId',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changes: { 'type': 'array', 'itemType': ListMemoryTasksResponseBodyItemsChanges },
      createdAt: 'string',
      error: ListMemoryTasksResponseBodyItemsError,
      finishedAt: 'string',
      inputMessageCount: 'number',
      inputTokenCount: 'number',
      memories: { 'type': 'array', 'itemType': ListMemoryTasksResponseBodyItemsMemories },
      startedAt: 'string',
      status: 'string',
      strategyConfig: ListMemoryTasksResponseBodyItemsStrategyConfig,
      taskId: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.changes)) {
      $dara.Model.validateArray(this.changes);
    }
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    if(Array.isArray(this.memories)) {
      $dara.Model.validateArray(this.memories);
    }
    if(this.strategyConfig && typeof (this.strategyConfig as any).validate === 'function') {
      (this.strategyConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemoryTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * httpStatusCode
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * items
   */
  items?: ListMemoryTasksResponseBodyItems[];
  /**
   * @remarks
   * maxResults
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * nextToken
   * 
   * @example
   * eyJvZmZzZXQiOjIwMH0=
   */
  nextToken?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 01A00000-0000-0000-0000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * success
   */
  success?: boolean;
  /**
   * @remarks
   * totalCount
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListMemoryTasksResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

