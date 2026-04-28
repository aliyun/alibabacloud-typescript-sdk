// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemoryTaskResponseBodyResult extends $dara.Model {
  errorMessage?: string;
  memoryIds?: string[];
  skillIds?: string[];
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'error_message',
      memoryIds: 'memory_ids',
      skillIds: 'skill_ids',
      status: 'status',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      memoryIds: { 'type': 'array', 'itemType': 'string' },
      skillIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.memoryIds)) {
      $dara.Model.validateArray(this.memoryIds);
    }
    if(Array.isArray(this.skillIds)) {
      $dara.Model.validateArray(this.skillIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemoryTaskResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetMemoryTaskResponseBodyResult;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: GetMemoryTaskResponseBodyResult,
      status: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

