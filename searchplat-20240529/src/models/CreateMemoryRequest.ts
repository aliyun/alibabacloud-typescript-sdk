// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMemoryRequest extends $dara.Model {
  agentId?: string;
  enhancements?: { [key: string]: any };
  messages?: any;
  runId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
      enhancements: 'enhancements',
      messages: 'messages',
      runId: 'run_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      enhancements: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      messages: 'any',
      runId: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.enhancements) {
      $dara.Model.validateMap(this.enhancements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

