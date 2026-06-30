// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomAgentShrinkRequest extends $dara.Model {
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
   * 查询实例列表Agent
   */
  name?: string;
  skillIdsShrink?: string;
  /**
   * @remarks
   * The system prompt.
   * 
   * @example
   * 我是您用来查询实例列表的专属Agent
   */
  systemPrompt?: string;
  /**
   * @remarks
   * The tools that the custom agent can use.
   */
  toolsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      customAgentId: 'CustomAgentId',
      enableTools: 'EnableTools',
      name: 'Name',
      skillIdsShrink: 'SkillIds',
      systemPrompt: 'SystemPrompt',
      toolsShrink: 'Tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAgentId: 'string',
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

