// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAgentShrinkRequest extends $dara.Model {
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
  toolsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      enableTools: 'EnableTools',
      name: 'Name',
      systemPrompt: 'SystemPrompt',
      toolsShrink: 'Tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTools: 'boolean',
      name: 'string',
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

