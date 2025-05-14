// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRunResponseBodyDataContent } from "./CreateRunResponseBodyDataContent";


export class CreateRunResponseBodyData extends $dara.Model {
  content?: CreateRunResponseBodyDataContent[];
  createAt?: number;
  id?: string;
  metadata?: { [key: string]: any };
  object?: string;
  role?: string;
  runId?: string;
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createAt: 'createAt',
      id: 'id',
      metadata: 'metadata',
      object: 'object',
      role: 'role',
      runId: 'runId',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': CreateRunResponseBodyDataContent },
      createAt: 'number',
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      object: 'string',
      role: 'string',
      runId: 'string',
      threadId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

