// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAgentShrinkRequest extends $dara.Model {
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
  skillIdsShrink?: string;
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
  toolsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      enableTools: 'EnableTools',
      name: 'Name',
      skillIdsShrink: 'SkillIds',
      systemPrompt: 'SystemPrompt',
      toolsShrink: 'Tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTools: 'boolean',
      name: 'string',
      skillIdsShrink: 'string',
      systemPrompt: 'string',
      toolsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

