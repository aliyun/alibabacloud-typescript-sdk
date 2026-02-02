// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The system prompts.
   * 
   * @example
   * true
   */
  enableTools?: boolean;
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **CreateCustomAgent**.
   */
  name?: string;
  skillIds?: string[];
  /**
   * @remarks
   * The name of the dedicated agent.
   * 
   * This parameter is required.
   */
  systemPrompt?: string;
  /**
   * @remarks
   * Specifies whether to enable tools.
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

