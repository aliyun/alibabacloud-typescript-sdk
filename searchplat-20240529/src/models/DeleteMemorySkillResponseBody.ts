// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMemorySkillResponseBodyResult extends $dara.Model {
  message?: string;
  skillId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      skillId: 'skill_id',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      skillId: 'string',
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

export class DeleteMemorySkillResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: DeleteMemorySkillResponseBodyResult;
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
      result: DeleteMemorySkillResponseBodyResult,
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

