// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the component whose configuration you want to update.
   * 
   * This parameter is required.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  agentId?: string;
  /**
   * @remarks
   * The ID of the component configuration to update.
   * 
   * This parameter is required.
   * 
   * @example
   * f0078fbb-4213-11f0-a19b-00163e4ae208
   */
  configId?: string;
  /**
   * @remarks
   * The new content of the component configuration.
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
      configId: 'configId',
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      configId: 'string',
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

