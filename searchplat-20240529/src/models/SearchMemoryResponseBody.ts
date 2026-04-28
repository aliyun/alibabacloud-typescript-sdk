// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMemoryResponseBodyResultMemoryResults extends $dara.Model {
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

export class SearchMemoryResponseBodyResultMemory extends $dara.Model {
  results?: SearchMemoryResponseBodyResultMemoryResults[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      results: 'results',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': SearchMemoryResponseBodyResultMemoryResults },
      total: 'number',
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

export class SearchMemoryResponseBodyResultSkillResults extends $dara.Model {
  agentId?: string;
  description?: string;
  name?: string;
  skillId?: string;
  userId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
      description: 'description',
      name: 'name',
      skillId: 'skill_id',
      userId: 'user_id',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      description: 'string',
      name: 'string',
      skillId: 'string',
      userId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMemoryResponseBodyResultSkill extends $dara.Model {
  results?: SearchMemoryResponseBodyResultSkillResults[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      results: 'results',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': SearchMemoryResponseBodyResultSkillResults },
      total: 'number',
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

export class SearchMemoryResponseBodyResult extends $dara.Model {
  memory?: SearchMemoryResponseBodyResultMemory;
  skill?: SearchMemoryResponseBodyResultSkill;
  static names(): { [key: string]: string } {
    return {
      memory: 'memory',
      skill: 'skill',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memory: SearchMemoryResponseBodyResultMemory,
      skill: SearchMemoryResponseBodyResultSkill,
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

export class SearchMemoryResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: SearchMemoryResponseBodyResult;
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
      result: SearchMemoryResponseBodyResult,
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

