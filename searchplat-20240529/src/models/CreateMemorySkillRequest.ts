// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMemorySkillRequest extends $dara.Model {
  agentId?: string;
  userId?: string;
  zipBase64?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
      userId: 'user_id',
      zipBase64: 'zip_base64',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      userId: 'string',
      zipBase64: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

