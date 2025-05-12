// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentRequest extends $dara.Model {
  agentId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

