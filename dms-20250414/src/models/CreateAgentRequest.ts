// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  agentName?: string;
  agentType?: string;
  description?: string;
  expireAfterSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      agentType: 'AgentType',
      description: 'Description',
      expireAfterSeconds: 'ExpireAfterSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      agentType: 'string',
      description: 'string',
      expireAfterSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

