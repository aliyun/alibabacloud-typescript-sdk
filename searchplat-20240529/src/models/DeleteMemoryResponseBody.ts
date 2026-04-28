// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMemoryResponseBodyResult extends $dara.Model {
  memoryId?: string;
  message?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      memoryId: 'memory_id',
      message: 'message',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memoryId: 'string',
      message: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMemoryResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: DeleteMemoryResponseBodyResult;
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
      result: DeleteMemoryResponseBodyResult,
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

