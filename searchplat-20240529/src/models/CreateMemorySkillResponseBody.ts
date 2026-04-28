// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMemorySkillResponseBodyResultData extends $dara.Model {
  description?: string;
  id?: string;
  name?: string;
  owner?: string;
  resourcePaths?: string[];
  tags?: string[];
  triggers?: string[];
  updatedAt?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      id: 'id',
      name: 'name',
      owner: 'owner',
      resourcePaths: 'resource_paths',
      tags: 'tags',
      triggers: 'triggers',
      updatedAt: 'updated_at',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      name: 'string',
      owner: 'string',
      resourcePaths: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': 'string' },
      triggers: { 'type': 'array', 'itemType': 'string' },
      updatedAt: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourcePaths)) {
      $dara.Model.validateArray(this.resourcePaths);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.triggers)) {
      $dara.Model.validateArray(this.triggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemorySkillResponseBodyResult extends $dara.Model {
  data?: CreateMemorySkillResponseBodyResultData[];
  importedCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      importedCount: 'imported_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': CreateMemorySkillResponseBodyResultData },
      importedCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemorySkillResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: CreateMemorySkillResponseBodyResult;
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
      result: CreateMemorySkillResponseBodyResult,
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

