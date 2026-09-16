// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAgentRequest extends $dara.Model {
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
   * The name of the agent.
   * 
   * @example
   * QueryInstanceListAgent
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
   * This parameter is required.
   * 
   * @example
   * I am your dedicated agent for querying instance lists
   */
  systemPrompt?: string;
  /**
   * @remarks
   * The tool information.
   */
  tools?: string[];
  static names(): { [key: string]: string } {
    return {
      enableTools: 'EnableTools',
      name: 'Name',
      skillIds: 'SkillIds',
      systemPrompt: 'SystemPrompt',
      tools: 'Tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

