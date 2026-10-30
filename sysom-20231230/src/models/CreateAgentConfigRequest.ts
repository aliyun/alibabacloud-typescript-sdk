// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent associated with the configuration. You can obtain the agent ID from ListAgents.
   * 
   * This parameter is required.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  agentId?: string;
  /**
   * @remarks
   * The name of the configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * Configuration 1
   */
  configName?: string;
  /**
   * @remarks
   * The content of the configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * {"oomkill":{"enable":false}}
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      configName: 'configName',
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      configName: 'string',
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

