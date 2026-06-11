// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiPluginStatus } from "./AiPluginStatus";
import { AiPolicyRedisConfig } from "./AiPolicyRedisConfig";


export class AiCacheConfigEmbeddingConfig extends $dara.Model {
  /**
   * @remarks
   * The model name to use for generating embeddings, such as `text-embedding-v1`.
   */
  modelName?: string;
  /**
   * @remarks
   * The service ID of the deployed embedding model.
   */
  serviceId?: string;
  /**
   * @remarks
   * The request timeout in milliseconds. A request to the embedding service fails if it exceeds this duration. Default: `10000`.
   */
  timeout?: number;
  /**
   * @remarks
   * The type of embedding service. For example, specify `Tongyi` for Alibaba Cloud\\"s Tongyi Qwen model series.
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
   * The API key to authenticate with the vector database service.
   */
  apiKey?: string;
  /**
   * @remarks
   * The unique ID of the collection or index within the vector database for search and storage.
   */
  collectionId?: string;
  /**
   * @remarks
   * The endpoint URL of the vector database service.
   */
  serviceHost?: string;
  /**
   * @remarks
   * The similarity threshold for a vector search to qualify as a cache hit. The value must be between 0.0 and 1.0. A higher value means a stricter similarity requirement.
   */
  threshold?: number;
  /**
   * @remarks
   * The request timeout in milliseconds. A request to the vector service fails if it exceeds this duration. Default: `10000`.
   */
  timeout?: number;
  /**
   * @remarks
   * The type of vector database service. For example, specify `DashVector` for Alibaba Cloud\\"s vector search service.
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
   * The cache key strategy, which determines how the system generates a unique key for each cacheable request. Valid values: `DEFAULT` and `CUSTOM`.
   */
  cacheKeyStrategy?: string;
  /**
   * @remarks
   * The cache mode, which defines the caching behavior. Valid values are `NORMAL` for standard key-value caching and `SEMANTIC` for vector-based similarity caching.
   */
  cacheMode?: string;
  /**
   * @remarks
   * The cache Time-to-Live (TTL) in seconds. This specifies the duration that a cached response remains valid. After the TTL expires, the cache removes the response.
   */
  cacheTTL?: number;
  /**
   * @remarks
   * The embedding configuration. Specifies the service that converts text queries into vector embeddings for semantic search.
   */
  embeddingConfig?: AiCacheConfigEmbeddingConfig;
  /**
   * @remarks
   * The plugin status. Set to `enable` to activate the plugin or `disable` to deactivate it.
   * 
   * **if can be null:**
   * true
   */
  pluginStatus?: AiPluginStatus;
  /**
   * @remarks
   * The Redis configuration, required if you use a Redis instance as the cache backend.
   * 
   * **if can be null:**
   * true
   */
  redisConfig?: AiPolicyRedisConfig;
  /**
   * @remarks
   * The vector configuration for semantic caching. This enables the cache to retrieve results based on semantic similarity instead of exact matches.
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

