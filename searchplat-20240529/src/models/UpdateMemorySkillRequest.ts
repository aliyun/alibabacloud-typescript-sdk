// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMemorySkillRequest extends $dara.Model {
  agentId?: string;
  files?: { [key: string]: string };
  name?: string;
  userId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
      files: 'files',
      name: 'name',
      userId: 'user_id',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      files: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      userId: 'string',
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

