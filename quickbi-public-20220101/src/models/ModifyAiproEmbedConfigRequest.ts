// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAiproEmbedConfigRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  agentName?: string;
  /**
   * @example
   * test
   */
  aiProId?: string;
  /**
   * @example
   * 1
   */
  chatHistoryStatus?: number;
  /**
   * @example
   * test
   */
  config?: string;
  /**
   * @example
   * 1
   */
  memoryEnabled?: number;
  /**
   * @example
   * test
   */
  showName?: string;
  /**
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

