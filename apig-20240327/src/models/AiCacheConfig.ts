// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiPluginStatus } from "./AiPluginStatus";
import { AiPolicyRedisConfig } from "./AiPolicyRedisConfig";


export class AiCacheConfigEmbeddingConfig extends $dara.Model {
  modelName?: string;
  serviceId?: string;
  timeout?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'modelName',
      serviceId: 'serviceId',
      timeout: 'timeout',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      serviceId: 'string',
      timeout: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiCacheConfigVectorConfig extends $dara.Model {
  apiKey?: string;
  collectionId?: string;
  serviceHost?: string;
  threshold?: number;
  timeout?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      collectionId: 'collectionId',
      serviceHost: 'serviceHost',
      threshold: 'threshold',
      timeout: 'timeout',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      collectionId: 'string',
      serviceHost: 'string',
      threshold: 'number',
      timeout: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiCacheConfig extends $dara.Model {
  cacheKeyStrategy?: string;
  cacheMode?: string;
  cacheTTL?: number;
  embeddingConfig?: AiCacheConfigEmbeddingConfig;
  /**
   * **if can be null:**
   * true
   */
  pluginStatus?: AiPluginStatus;
  /**
   * **if can be null:**
   * true
   */
  redisConfig?: AiPolicyRedisConfig;
  vectorConfig?: AiCacheConfigVectorConfig;
  static names(): { [key: string]: string } {
    return {
      cacheKeyStrategy: 'cacheKeyStrategy',
      cacheMode: 'cacheMode',
      cacheTTL: 'cacheTTL',
      embeddingConfig: 'embeddingConfig',
      pluginStatus: 'pluginStatus',
      redisConfig: 'redisConfig',
      vectorConfig: 'vectorConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheKeyStrategy: 'string',
      cacheMode: 'string',
      cacheTTL: 'number',
      embeddingConfig: AiCacheConfigEmbeddingConfig,
      pluginStatus: AiPluginStatus,
      redisConfig: AiPolicyRedisConfig,
      vectorConfig: AiCacheConfigVectorConfig,
    };
  }

  validate() {
    if(this.embeddingConfig && typeof (this.embeddingConfig as any).validate === 'function') {
      (this.embeddingConfig as any).validate();
    }
    if(this.pluginStatus && typeof (this.pluginStatus as any).validate === 'function') {
      (this.pluginStatus as any).validate();
    }
    if(this.redisConfig && typeof (this.redisConfig as any).validate === 'function') {
      (this.redisConfig as any).validate();
    }
    if(this.vectorConfig && typeof (this.vectorConfig as any).validate === 'function') {
      (this.vectorConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

