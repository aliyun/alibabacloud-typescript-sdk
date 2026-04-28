// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMemoryResponseBodyResult extends $dara.Model {
  memory?: string;
  memoryId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      memory: 'memory',
      memoryId: 'memory_id',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memory: 'string',
      memoryId: 'string',
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

export class UpdateMemoryResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: UpdateMemoryResponseBodyResult;
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
      result: UpdateMemoryResponseBodyResult,
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

