// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomAgentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * app-iBuGU1VxEY42zrQRQfNA****
   */
  apiId?: string;
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
  toolsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      customAgentId: 'CustomAgentId',
      enableTools: 'EnableTools',
      name: 'Name',
      systemPrompt: 'SystemPrompt',
      toolsShrink: 'Tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      customAgentId: 'string',
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

