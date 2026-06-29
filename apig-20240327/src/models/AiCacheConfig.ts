// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiPluginStatus } from "./AiPluginStatus";
import { AiPolicyRedisConfig } from "./AiPolicyRedisConfig";


export class AiCacheConfigEmbeddingConfig extends $dara.Model {
  /**
   * @remarks
   * The embedding model name.
   * 
   * @example
   * text-embedding-v2
   */
  modelName?: string;
  /**
   * @remarks
   * The embedding service ID.
   * 
   * @example
   * svc-xxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The request timeout period, in milliseconds.
   * 
   * @example
   * 5000
   */
  timeout?: number;
  /**
   * @remarks
   * The embedding service type.
   * 
   * @example
   * dashscope
   */
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
  /**
   * @remarks
   * The API key of the vector database.
   * 
   * @example
   * sk-xxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The vector collection ID.
   * 
   * @example
   * col-xxx
   */
  collectionId?: string;
  /**
   * @remarks
   * The service address of the vector database.
   * 
   * @example
   * vdb-xxx.dashvector.aliyuncs.com
   */
  serviceHost?: string;
  /**
   * @remarks
   * The similarity threshold.
   * 
   * @example
   * 0.95
   */
  threshold?: number;
  /**
   * @remarks
   * The request timeout period, in milliseconds.
   * 
   * @example
   * 5000
   */
  timeout?: number;
  /**
   * @remarks
   * The vector database type.
   * 
   * @example
   * dashvector
   */
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
  /**
   * @remarks
   * The cache key generation strategy.
   * 
   * @example
   * -
   */
  cacheKeyStrategy?: string;
  /**
   * @remarks
   * The cache mode.
   * 
   * @example
   * exact
   */
  cacheMode?: string;
  /**
   * @remarks
   * The cache expiration time, in seconds.
   * 
   * @example
   * 3600
   */
  cacheTTL?: number;
  /**
   * @remarks
   * The embedding service configuration.
   */
  embeddingConfig?: AiCacheConfigEmbeddingConfig;
  /**
   * @remarks
   * The plugin running status.
   * 
   * **if can be null:**
   * true
   */
  pluginStatus?: AiPluginStatus;
  /**
   * @remarks
   * The Redis configuration for exact cache count storage.
   * 
   * **if can be null:**
   * true
   */
  redisConfig?: AiPolicyRedisConfig;
  /**
   * @remarks
   * The vector database configuration.
   */
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

