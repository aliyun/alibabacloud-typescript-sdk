// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemoryResponseBodyResult extends $dara.Model {
  agentId?: string;
  memory?: string;
  memoryId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
      memory: 'memory',
      memoryId: 'memory_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      memory: 'string',
      memoryId: 'string',
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

export class GetMemoryResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetMemoryResponseBodyResult;
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
      result: GetMemoryResponseBodyResult,
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

