// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomAgentRequest extends $dara.Model {
  /**
   * @remarks
   * AgentId。
   * 
   * This parameter is required.
   * 
   * @example
   * ebe44453-3b41-4c74-94d1-01d088d7****
   */
  customAgentId?: string;
  /**
   * @example
   * true
   */
  enableTools?: boolean;
  name?: string;
  systemPrompt?: string;
  tools?: string[];
  static names(): { [key: string]: string } {
    return {
      customAgentId: 'CustomAgentId',
      enableTools: 'EnableTools',
      name: 'Name',
      systemPrompt: 'SystemPrompt',
      tools: 'Tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAgentId: 'string',
      enableTools: 'boolean',
      name: 'string',
      systemPrompt: 'string',
      tools: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

