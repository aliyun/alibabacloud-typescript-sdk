// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ebe44453-3b41-4c74-94d1-01d088d7****
   */
  customAgentId?: string;
  /**
   * @remarks
   * Specifies whether to enable tools.
   * 
   * @example
   * true
   */
  enableTools?: boolean;
  /**
   * @remarks
   * The name of the custom agent.
   * 
   * @example
   * Query instance list agent
   */
  name?: string;
  /**
   * @remarks
   * The list of associated skill IDs.
   */
  skillIds?: string[];
  /**
   * @remarks
   * The system prompt.
   * 
   * @example
   * I am your custom agent for querying the instance list
   */
  systemPrompt?: string;
  /**
   * @remarks
   * The tool information.
   */
  tools?: string[];
  static names(): { [key: string]: string } {
    return {
      customAgentId: 'CustomAgentId',
      enableTools: 'EnableTools',
      name: 'Name',
      skillIds: 'SkillIds',
      systemPrompt: 'SystemPrompt',
      tools: 'Tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAgentId: 'string',
      enableTools: 'boolean',
      name: 'string',
      skillIds: { 'type': 'array', 'itemType': 'string' },
      systemPrompt: 'string',
      tools: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.skillIds)) {
      $dara.Model.validateArray(this.skillIds);
    }
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

