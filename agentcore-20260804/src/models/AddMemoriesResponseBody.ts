// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMemoriesResponseBodyDataMemories extends $dara.Model {
  /**
   * @remarks
   * The long-term memory ID.
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

export class AddMemoriesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The memory references returned only when sync is set to true. An empty array is allowed. It is not returned together with taskId.
   */
  memories?: AddMemoriesResponseBodyDataMemories[];
  /**
   * @remarks
   * The task ID returned only when sync is set to false. It is not returned together with memories.
   * 
   * @example
   * task-2f5f9c5a8d0e4c3b
   */
  taskId?: string;
  /**
   * @remarks
   * The list of extraction task IDs. Multiple tasks may be returned when multiple rules are enabled. It is not returned for direct writes.
   */
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      memories: 'memories',
      taskId: 'taskId',
      taskIds: 'taskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memories: { 'type': 'array', 'itemType': AddMemoriesResponseBodyDataMemories },
      taskId: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.memories)) {
      $dara.Model.validateArray(this.memories);
    }
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMemoriesResponseBody extends $dara.Model {
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
   * The write result.
   */
  data?: AddMemoriesResponseBodyData;
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
      data: AddMemoriesResponseBodyData,
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

