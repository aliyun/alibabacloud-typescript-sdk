// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiproEmbedConfigResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 小Q
   */
  agentName?: string;
  /**
   * @example
   * 123124
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
   * 0327
   */
  showName?: string;
  /**
   * @example
   * 1
   */
  status?: number;
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
   * @example
   * D8749***C180FF3B4
   */
  requestId?: string;
  result?: QueryAiproEmbedConfigResponseBodyResult[];
  /**
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

