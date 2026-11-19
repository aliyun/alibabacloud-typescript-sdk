// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiproEmbedConfigResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The agent nickname.
   * 
   * @example
   * Xiao Q
   */
  agentName?: string;
  /**
   * @remarks
   * The embed configuration ID, which is used for CreateTicket4AiPro.
   * 
   * @example
   * 123124
   */
  aiProId?: string;
  /**
   * @remarks
   * Indicates whether chat history is displayed. Valid values:
   * 
   * - 1: Displayed.
   * - 0: Not displayed.
   * 
   * @example
   * 1
   */
  chatHistoryStatus?: number;
  /**
   * @remarks
   * The JSON string of the embed appearance configuration.
   * 
   * @example
   * test
   */
  config?: string;
  /**
   * @remarks
   * Specifies whether memory is enabled. Valid values:
   * 
   * - 1: Enabled.
   * - 0: Disabled.
   * 
   * @example
   * 1
   */
  memoryEnabled?: number;
  /**
   * @remarks
   * The configuration name.
   * 
   * @example
   * 0327
   */
  showName?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - 1: Enabled.
   * - 0: Disabled.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Specifies whether file upload is allowed. Valid values:
   * 
   * - 1: Allowed.
   * - 0: Not allowed.
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
      status: 'Status',
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
      status: 'number',
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

export class QueryAiproEmbedConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D8749***C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * The array of AIPro configurations.
   */
  result?: QueryAiproEmbedConfigResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryAiproEmbedConfigResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

