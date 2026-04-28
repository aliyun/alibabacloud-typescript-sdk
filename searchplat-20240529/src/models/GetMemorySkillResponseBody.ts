// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemorySkillResponseBodyResult extends $dara.Model {
  agentId?: string;
  files?: string;
  name?: string;
  skillId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
      files: 'files',
      name: 'name',
      skillId: 'skill_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      files: 'string',
      name: 'string',
      skillId: 'string',
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

export class GetMemorySkillResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetMemorySkillResponseBodyResult;
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
      result: GetMemorySkillResponseBodyResult,
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

