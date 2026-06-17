// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatWithKnowledgeBaseRequestKnowledgeParamsMergeMethodArgsRrf extends $dara.Model {
  /**
   * @remarks
   * The constant `k` in the reciprocal rank fusion formula `1/(k + rank_i)`. The value must be a positive integer greater than 1.
   * 
   * @example
   * 60
   */
  k?: number;
  static names(): { [key: string]: string } {
    return {
      k: 'K',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseRequestKnowledgeParamsMergeMethodArgsWeight extends $dara.Model {
  /**
   * @remarks
   * An array of weights corresponding to each collection specified in `SourceCollection`.
   */
  weights?: number[];
  static names(): { [key: string]: string } {
    return {
      weights: 'Weights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weights: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.weights)) {
      $dara.Model.validateArray(this.weights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseRequestKnowledgeParamsMergeMethodArgs extends $dara.Model {
  /**
   * @remarks
   * Parameters to use when `MergeMethod` is set to `RRF`.
   */
  rrf?: ChatWithKnowledgeBaseRequestKnowledgeParamsMergeMethodArgsRrf;
  /**
   * @remarks
   * Parameters to use when `MergeMethod` is set to `Weight`.
   */
  weight?: ChatWithKnowledgeBaseRequestKnowledgeParamsMergeMethodArgsWeight;
  static names(): { [key: string]: string } {
    return {
      rrf: 'Rrf',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rrf: ChatWithKnowledgeBaseRequestKnowledgeParamsMergeMethodArgsRrf,
      weight: ChatWithKnowledgeBaseRequestKnowledgeParamsMergeMethodArgsWeight,
    };
  }

  validate() {
    if(this.rrf && typeof (this.rrf as any).validate === 'function') {
      (this.rrf as any).validate();
    }
    if(this.weight && typeof (this.weight as any).validate === 'function') {
      (this.weight as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseRequestKnowledgeParamsRerankModel extends $dara.Model {
  /**
   * @remarks
   * The instruction or prompt for the reranking model.
   * 
   * @example
   * Given a web search query, retrieve relevant passages that answer the query
   */
  instruct?: string;
  /**
   * @remarks
   * The name of the reranking model.
   * 
   * @example
   * qwen3-rerank
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      instruct: 'Instruct',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instruct: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseRequestKnowledgeParamsSourceCollectionQueryParamsGraphSearchArgs extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entities and relationship edges to return from the knowledge graph search. Default: 60.
   * 
   * @example
   * 60
   */
  graphTopK?: number;
  static names(): { [key: string]: string } {
    return {
      graphTopK: 'GraphTopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graphTopK: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseRequestKnowledgeParamsSourceCollectionQueryParamsRerankModel extends $dara.Model {
  /**
   * @remarks
   * The instruction or prompt for the reranking model.
   * 
   * @example
   * Given a web search query, retrieve relevant passages that answer the query
   */
  instruct?: string;
  /**
   * @remarks
   * The name of the reranking model.
   * 
   * @example
   * qwen3-rerank
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      instruct: 'Instruct',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instruct: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseRequestKnowledgeParamsSourceCollectionQueryParams extends $dara.Model {
  /**
   * @remarks
   * A filter to apply to the search, specified as a SQL `WHERE` clause.
   * 
   * @example
   * id = \\"llm-t87l87fxuhn56woc_8anu8j2d3f_file_e74635e2cc314e838543e724f6b3b1f2_10658020\\"
   */
  filter?: string;
  /**
   * @remarks
   * Whether to enhance the search with a knowledge graph. Default: `false`.
   * 
   * @example
   * false
   */
  graphEnhance?: boolean;
  /**
   * @remarks
   * Parameters for the knowledge graph search, used when `GraphEnhance` is `true`.
   */
  graphSearchArgs?: ChatWithKnowledgeBaseRequestKnowledgeParamsSourceCollectionQueryParamsGraphSearchArgs;
  /**
   * @remarks
   * The multi-channel recall algorithm. If omitted, the system directly compares and sorts scores from dense vector retrieval and full-text search.
   * 
   * Valid values:
   * 
   * - `RRF`: Uses reciprocal rank fusion. The fusion effect is controlled by the `k` parameter in `HybridSearchArgs`.
   * 
   * - `Weight`: Uses weighted sorting. The weights for vector retrieval and full-text search scores are controlled by parameters in `HybridSearchArgs`.
   * 
   * - `Cascaded`: Performs a full-text search first, followed by a vector retrieval on the results.
   * 
   * @example
   * RRF
   */
  hybridSearch?: string;
  /**
   * @remarks
   * Parameters for the multi-channel recall algorithm. `RRF` and `Weight` are supported. The `HybridPathsSetting` parameter can specify the recall channels: `dense` (dense vector), `sparse` (sparse vector), and `fulltext` (full-text search). If this parameter is empty, `dense` and `fulltext` are used by default.
   * 
   * - `RRF`: Specifies the constant `k` in the formula `1/(k+rank_i)`. The value must be a positive integer greater than 1. Format:
   * 
   * ```
   * {
   *   "HybridPathsSetting": {
   *     "paths": "dense,fulltext"
   *   },
   *   "RRF": {
   *     "k": 60
   *   }
   * }
   * ```
   * 
   * - `Weight`:
   * 
   *   - Two-channel recall (if `HybridPathsSetting` is not specified, only `alpha` is required):
   * 
   *     - Formula: `alpha * dense_score + (1-alpha) * fulltext_score`. The `alpha` parameter represents the weight of the dense vector score relative to the full-text search score. The value must be in the range [0, 1]. A value of 0 uses only full-text search. A value of 1 uses only dense vector retrieval.
   * 
   * ```
   * { 
   *    "Weight": {
   *     "alpha": 0.5
   *    }
   * }
   * ```
   * 
   * - Three-channel recall:
   * 
   *   - Formula: `normalized_dense * dense_score + normalized_sparse * sparse_score + normalized_fulltext * fulltext_score`. The `dense`, `sparse`, and `fulltext` parameters represent the weights for each channel and must be greater than or equal to 0. The system automatically normalizes these weights (for example, `normalized_x = x / (dense + sparse + fulltext)`).
   * 
   * ```
   * {
   *   "HybridPathsSetting": {
   *      "paths": "dense,sparse,fulltext"
   *    },
   *   "Weight": {
   *     "dense": 0.5,
   *     "sparse": 0.3,
   *     "fulltext": 0.2
   *   }
   * }
   * ```
   */
  hybridSearchArgs?: { [key: string]: any };
  /**
   * @remarks
   * The distance metric used for vector indexing. Valid values:
   * 
   * - `l2`: euclidean distance.
   * 
   * - `ip`: Inner product (dot product) distance.
   * 
   * - `cosine`: cosine similarity.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The recall window. If specified, expands the context around retrieved text chunks. Must be an array of two integers, `[A, B]`, where `A` is the number of preceding chunks to include (from -10 to 0) and `B` is the number of following chunks (from 0 to 10).
   * 
   * > - We recommend that you use this parameter when document chunks are highly fragmented and retrieval might result in a loss of context.
   * >
   * > - Reranking is performed before windowing is applied.
   */
  recallWindow?: number[];
  /**
   * @remarks
   * The reranking factor for this collection, which overrides the top-level `RerankFactor`. If specified, it reranks the initial retrieval results to improve relevance. Valid range: (1, 5].
   * 
   * > - Reranking may be less efficient if document chunks are sparse.
   * >
   * > - We recommend that the number of items to rerank, calculated as `Ceiling(TopK * RerankFactor)`, does not exceed 50.
   * 
   * @example
   * 1.5
   */
  rerankFactor?: number;
  /**
   * @remarks
   * The model to use for reranking.
   */
  rerankModel?: ChatWithKnowledgeBaseRequestKnowledgeParamsSourceCollectionQueryParamsRerankModel;
  /**
   * @remarks
   * The number of top results to return from this collection before merging.
   * 
   * @example
   * 10
   */
  topK?: number;
  /**
   * @remarks
   * Whether to enable full-text search in addition to vector retrieval. Default: `false` (uses only vector retrieval).
   * 
   * @example
   * true
   */
  useFullTextRetrieval?: boolean;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      graphEnhance: 'GraphEnhance',
      graphSearchArgs: 'GraphSearchArgs',
      hybridSearch: 'HybridSearch',
      hybridSearchArgs: 'HybridSearchArgs',
      metrics: 'Metrics',
      recallWindow: 'RecallWindow',
      rerankFactor: 'RerankFactor',
      rerankModel: 'RerankModel',
      topK: 'TopK',
      useFullTextRetrieval: 'UseFullTextRetrieval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      graphEnhance: 'boolean',
      graphSearchArgs: ChatWithKnowledgeBaseRequestKnowledgeParamsSourceCollectionQueryParamsGraphSearchArgs,
      hybridSearch: 'string',
      hybridSearchArgs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      metrics: 'string',
      recallWindow: { 'type': 'array', 'itemType': 'number' },
      rerankFactor: 'number',
      rerankModel: ChatWithKnowledgeBaseRequestKnowledgeParamsSourceCollectionQueryParamsRerankModel,
      topK: 'number',
      useFullTextRetrieval: 'boolean',
    };
  }

  validate() {
    if(this.graphSearchArgs && typeof (this.graphSearchArgs as any).validate === 'function') {
      (this.graphSearchArgs as any).validate();
    }
    if(this.hybridSearchArgs) {
      $dara.Model.validateMap(this.hybridSearchArgs);
    }
    if(Array.isArray(this.recallWindow)) {
      $dara.Model.validateArray(this.recallWindow);
    }
    if(this.rerankModel && typeof (this.rerankModel as any).validate === 'function') {
      (this.rerankModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseRequestKnowledgeParamsSourceCollection extends $dara.Model {
  /**
   * @remarks
   * The name of the collection to query.
   * 
   * This parameter is required.
   * 
   * @example
   * adbpg_document_collection
   */
  collection?: string;
  /**
   * @remarks
   * The namespace where the collection resides. Default: `public`.
   * 
   * > You can create a namespace by calling the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation and view existing namespaces by calling the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation.
   * 
   * @example
   * dukang
   */
  namespace?: string;
  /**
   * @remarks
   * The password for the specified namespace.
   * 
   * > This password is set when you call the `CreateNamespace` operation.
   * 
   * This parameter is required.
   * 
   * @example
   * namespacePasswd
   */
  namespacePassword?: string;
  /**
   * @remarks
   * Retrieval parameters for this knowledge base collection.
   */
  queryParams?: ChatWithKnowledgeBaseRequestKnowledgeParamsSourceCollectionQueryParams;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      queryParams: 'QueryParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      queryParams: ChatWithKnowledgeBaseRequestKnowledgeParamsSourceCollectionQueryParams,
    };
  }

  validate() {
    if(this.queryParams && typeof (this.queryParams as any).validate === 'function') {
      (this.queryParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseRequestKnowledgeParams extends $dara.Model {
  /**
   * @remarks
   * The method for merging results from multiple knowledge bases. Default: `RRF`. Valid values:
   * 
   * - `RRF`
   * 
   * - `Weight`
   * 
   * @example
   * "RRF"
   */
  mergeMethod?: string;
  /**
   * @remarks
   * The parameters for the merge method.
   */
  mergeMethodArgs?: ChatWithKnowledgeBaseRequestKnowledgeParamsMergeMethodArgs;
  /**
   * @remarks
   * The reranking factor. Specify this to rerank the initial vector retrieval results for improved relevance. Valid range: (1, 5].
   * 
   * > - Reranking may be less efficient if document chunks are sparse.
   * >
   * > - We recommend that the number of items to rerank, calculated as `Ceiling(TopK * RerankFactor)`, does not exceed 50.
   * 
   * @example
   * 1.0001
   */
  rerankFactor?: number;
  /**
   * @remarks
   * The model to use for reranking.
   */
  rerankModel?: ChatWithKnowledgeBaseRequestKnowledgeParamsRerankModel;
  /**
   * @remarks
   * An array of knowledge base collections to query.
   * 
   * This parameter is required.
   */
  sourceCollection?: ChatWithKnowledgeBaseRequestKnowledgeParamsSourceCollection[];
  /**
   * @remarks
   * The number of top results to return after the results from multiple vector collection recalls are merged.
   * 
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      mergeMethod: 'MergeMethod',
      mergeMethodArgs: 'MergeMethodArgs',
      rerankFactor: 'RerankFactor',
      rerankModel: 'RerankModel',
      sourceCollection: 'SourceCollection',
      topK: 'TopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mergeMethod: 'string',
      mergeMethodArgs: ChatWithKnowledgeBaseRequestKnowledgeParamsMergeMethodArgs,
      rerankFactor: 'number',
      rerankModel: ChatWithKnowledgeBaseRequestKnowledgeParamsRerankModel,
      sourceCollection: { 'type': 'array', 'itemType': ChatWithKnowledgeBaseRequestKnowledgeParamsSourceCollection },
      topK: 'number',
    };
  }

  validate() {
    if(this.mergeMethodArgs && typeof (this.mergeMethodArgs as any).validate === 'function') {
      (this.mergeMethodArgs as any).validate();
    }
    if(this.rerankModel && typeof (this.rerankModel as any).validate === 'function') {
      (this.rerankModel as any).validate();
    }
    if(Array.isArray(this.sourceCollection)) {
      $dara.Model.validateArray(this.sourceCollection);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseRequestModelParamsMessages extends $dara.Model {
  /**
   * @remarks
   * The content of the message.
   * 
   * This parameter is required.
   * 
   * @example
   * You are a helpful assistant.
   */
  content?: string;
  /**
   * @remarks
   * The role of the message author. Valid values:
   * 
   * - `system`
   * 
   * - `user`
   * 
   * - `assistant`
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseRequestModelParamsToolsFunction extends $dara.Model {
  /**
   * @remarks
   * The description of the function tool.
   * 
   * @example
   * 获取天气。
   */
  description?: string;
  /**
   * @remarks
   * The name of the function tool.
   * 
   * @example
   * get_weather
   */
  name?: string;
  /**
   * @remarks
   * The JSON schema of the function parameters.
   * 
   * @example
   * {"type": "object", ...}
   */
  parameters?: any;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      parameters: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseRequestModelParamsTools extends $dara.Model {
  /**
   * @remarks
   * The function information.
   */
  function?: ChatWithKnowledgeBaseRequestModelParamsToolsFunction;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: ChatWithKnowledgeBaseRequestModelParamsToolsFunction,
    };
  }

  validate() {
    if(this.function && typeof (this.function as any).validate === 'function') {
      (this.function as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseRequestModelParams extends $dara.Model {
  /**
   * @remarks
   * The maximum number of tokens to generate.
   * 
   * @example
   * 8192
   */
  maxTokens?: number;
  /**
   * @remarks
   * The list of messages that form the conversation history.
   * 
   * This parameter is required.
   */
  messages?: ChatWithKnowledgeBaseRequestModelParamsMessages[];
  /**
   * @remarks
   * The name of the large language model to use. For a list of available models, see the [Model Studio documentation](https://help.aliyun.com/zh/model-studio/compatibility-of-openai-with-dashscope?spm=a2c4g.11186623.help-menu-2400256.d_2_10_0.45b5516eZIciC8\\&scm=20140722.H_2833609._.OR_help-T_cn~zh-V_1#eadfc13038jd5).
   * 
   * This parameter is required.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * The number of candidate responses to generate.
   * 
   * @example
   * 1
   */
  n?: number;
  /**
   * @remarks
   * The presence penalty. Valid range: [-2.0, 2.0].
   * 
   * @example
   * 1.0
   */
  presencePenalty?: number;
  /**
   * @remarks
   * The random seed.
   * 
   * @example
   * 42
   */
  seed?: number;
  /**
   * @remarks
   * A list of stop words.
   */
  stop?: string[];
  /**
   * @remarks
   * The sampling temperature. Valid range: (0, 2.0].
   * 
   * @example
   * 0.6
   */
  temperature?: number;
  /**
   * @remarks
   * The list of tools.
   */
  tools?: ChatWithKnowledgeBaseRequestModelParamsTools[];
  /**
   * @remarks
   * The probability threshold for nucleus sampling. Valid range: (0, 1.0).
   * 
   * @example
   * 0.9
   */
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      maxTokens: 'MaxTokens',
      messages: 'Messages',
      model: 'Model',
      n: 'N',
      presencePenalty: 'PresencePenalty',
      seed: 'Seed',
      stop: 'Stop',
      temperature: 'Temperature',
      tools: 'Tools',
      topP: 'TopP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxTokens: 'number',
      messages: { 'type': 'array', 'itemType': ChatWithKnowledgeBaseRequestModelParamsMessages },
      model: 'string',
      n: 'number',
      presencePenalty: 'number',
      seed: 'number',
      stop: { 'type': 'array', 'itemType': 'string' },
      temperature: 'number',
      tools: { 'type': 'array', 'itemType': ChatWithKnowledgeBaseRequestModelParamsTools },
      topP: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(Array.isArray(this.stop)) {
      $dara.Model.validateArray(this.stop);
    }
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to view the details of all instances in a target region, including their instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Whether to include the raw retrieval results from the knowledge base in the response. Default: `false`.
   * 
   * @example
   * false
   */
  includeKnowledgeBaseResults?: boolean;
  /**
   * @remarks
   * Parameters for knowledge retrieval. If omitted, the operation performs a standard chat without retrieving from a knowledge base.
   */
  knowledgeParams?: ChatWithKnowledgeBaseRequestKnowledgeParams;
  /**
   * @remarks
   * The parameters for calling the large language model (LLM).
   * 
   * This parameter is required.
   */
  modelParams?: ChatWithKnowledgeBaseRequestModelParams;
  ownerId?: number;
  /**
   * @remarks
   * A custom system prompt template. If specified, it overrides the default prompt. The template must include the {{ text_chunks }}, {{ user_system_prompt }}, {{ graph_entities }}, and {{ graph_relations }} placeholders.
   * 
   * @example
   * "参考以下知识回答问题:{{ text_chunks }}"
   */
  promptParams?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      includeKnowledgeBaseResults: 'IncludeKnowledgeBaseResults',
      knowledgeParams: 'KnowledgeParams',
      modelParams: 'ModelParams',
      ownerId: 'OwnerId',
      promptParams: 'PromptParams',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      includeKnowledgeBaseResults: 'boolean',
      knowledgeParams: ChatWithKnowledgeBaseRequestKnowledgeParams,
      modelParams: ChatWithKnowledgeBaseRequestModelParams,
      ownerId: 'number',
      promptParams: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(this.knowledgeParams && typeof (this.knowledgeParams as any).validate === 'function') {
      (this.knowledgeParams as any).validate();
    }
    if(this.modelParams && typeof (this.modelParams as any).validate === 'function') {
      (this.modelParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

