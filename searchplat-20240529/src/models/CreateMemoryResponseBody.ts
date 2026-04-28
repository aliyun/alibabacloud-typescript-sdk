// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMemoryResponseBodyResultMemory extends $dara.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemoryResponseBodyResultSkill extends $dara.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemoryResponseBodyResult extends $dara.Model {
  memory?: CreateMemoryResponseBodyResultMemory;
  skill?: CreateMemoryResponseBodyResultSkill;
  static names(): { [key: string]: string } {
    return {
      memory: 'memory',
      skill: 'skill',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memory: CreateMemoryResponseBodyResultMemory,
      skill: CreateMemoryResponseBodyResultSkill,
    };
  }

  validate() {
    if(this.memory && typeof (this.memory as any).validate === 'function') {
      (this.memory as any).validate();
    }
    if(this.skill && typeof (this.skill as any).validate === 'function') {
      (this.skill as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemoryResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: CreateMemoryResponseBodyResult;
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
      result: CreateMemoryResponseBodyResult,
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

