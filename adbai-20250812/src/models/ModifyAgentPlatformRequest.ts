// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAgentPlatformRequestAiPlatformConfig extends $dara.Model {
  /**
   * @example
   * 3760d3**************************
   */
  serveApiKey?: string;
  /**
   * @example
   * http://111.xx.xx.xx:8100/inferenceservice/emb
   */
  serveEmbeddingEndpoint?: string;
  /**
   * @example
   * Qwen3-Embedding-8B
   */
  serveEmbeddingModelName?: string;
  /**
   * @example
   * http://111.xx.xx.xx:8100/inferenceservice/base
   */
  serveEndpoint?: string;
  /**
   * @example
   * Qwen3-235B-A22B-Instruct-2507
   */
  serveModelName?: string;
  /**
   * @example
   * large
   */
  specName?: string;
  static names(): { [key: string]: string } {
    return {
      serveApiKey: 'ServeApiKey',
      serveEmbeddingEndpoint: 'ServeEmbeddingEndpoint',
      serveEmbeddingModelName: 'ServeEmbeddingModelName',
      serveEndpoint: 'ServeEndpoint',
      serveModelName: 'ServeModelName',
      specName: 'SpecName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serveApiKey: 'string',
      serveEmbeddingEndpoint: 'string',
      serveEmbeddingModelName: 'string',
      serveEndpoint: 'string',
      serveModelName: 'string',
      specName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAgentPlatformRequest extends $dara.Model {
  aiPlatformConfig?: ModifyAgentPlatformRequestAiPlatformConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_platform
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aiPlatformConfig: 'AiPlatformConfig',
      DBClusterId: 'DBClusterId',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiPlatformConfig: ModifyAgentPlatformRequestAiPlatformConfig,
      DBClusterId: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(this.aiPlatformConfig && typeof (this.aiPlatformConfig as any).validate === 'function') {
      (this.aiPlatformConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

