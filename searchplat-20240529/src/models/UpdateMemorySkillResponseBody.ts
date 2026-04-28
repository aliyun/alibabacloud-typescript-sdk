// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMemorySkillResponseBodyResult extends $dara.Model {
  files?: { [key: string]: string };
  name?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      files: 'files',
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.files) {
      $dara.Model.validateMap(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMemorySkillResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: UpdateMemorySkillResponseBodyResult;
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
      result: UpdateMemorySkillResponseBodyResult,
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

