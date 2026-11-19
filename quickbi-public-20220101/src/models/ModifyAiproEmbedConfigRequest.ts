// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAiproEmbedConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The nickname of the agent. The default value is Intelligent Data Analytics Assistant when you create a configuration.
   * 
   * @example
   * test
   */
  agentName?: string;
  /**
   * @remarks
   * The AIPro configuration ID. If this parameter is not specified or is left empty, a new configuration is created. If this parameter is specified, the existing configuration is updated.
   * 
   * @example
   * test
   */
  aiProId?: string;
  /**
   * @remarks
   * Specifies whether to display the chat history. Valid values:
   * 
   * - 1: Display.
   * - 0: Do not display.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  chatHistoryStatus?: number;
  /**
   * @remarks
   * The JSON string of the embedding appearance configuration saved on the frontend.
   * 
   * @example
   * test
   */
  config?: string;
  /**
   * @remarks
   * Specifies whether to enable memory. Valid values:
   * 
   * - 1: Enable.
   * - 0: Disable.
   * 
   * Default value: 0.
   * 
   * @example
   * 1
   */
  memoryEnabled?: number;
  /**
   * @remarks
   * The name of the configuration. This parameter is required and must be unique within the organization when you create a configuration. If this parameter is left empty when you update a configuration, the name is not updated.
   * 
   * @example
   * test
   */
  showName?: string;
  /**
   * @remarks
   * Specifies whether to allow file uploads. Valid values:
   * 
   * - 1: Allow.
   * - 0: Do not allow.
   * 
   * Default value: 0.
   * 
   * @example
   * 1
   */
  uploadEnabled?: number;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      aiProId: 'AiProId',
      chatHistoryStatus: 'ChatHistoryStatus',
      config: 'Config',
      memoryEnabled: 'MemoryEnabled',
      showName: 'ShowName',
      uploadEnabled: 'UploadEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      aiProId: 'string',
      chatHistoryStatus: 'number',
      config: 'string',
      memoryEnabled: 'number',
      showName: 'string',
      uploadEnabled: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

