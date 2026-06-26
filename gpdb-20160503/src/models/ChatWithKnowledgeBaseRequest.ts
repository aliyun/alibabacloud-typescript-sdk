// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatWithKnowledgeBaseRequestKnowledgeParamsMergeMethodArgsRrf extends $dara.Model {
  /**
   * @remarks
   * The k constant in the scoring algorithm 1/(k+rank_i). The value must be a positive integer greater than 1.
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
   * The weight array for each SourceCollection.
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
   * The configurable parameters when MergeMethod is set to RRF.
   */
  rrf?: ChatWithKnowledgeBaseRequestKnowledgeParamsMergeMethodArgsRrf;
  /**
   * @remarks
   * The configurable parameters when MergeMethod is set to Weight.
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
   * @example
   * Given a web search query, retrieve relevant passages that answer the query
   */
  instruct?: string;
  /**
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
   * The number of top entities and relationship edges to return. Default value: 60.
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
   * @example
   * Given a web search query, retrieve relevant passages that answer the query
   */
  instruct?: string;
  /**
   * @example
   * qwen3-rerank
   */
  name?: string;
  rerankMetadataFields?: string;
  static names(): { [key: string]: string } {
    return {
      instruct: 'Instruct',
      name: 'Name',
      rerankMetadataFields: 'RerankMetadataFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instruct: 'string',
      name: 'string',
      rerankMetadataFields: 'string',
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
   * The filter condition for the data to be updated, in SQL WHERE clause format.
   * 
   * @example
   * id = \\"llm-t87l87fxuhn56woc_8anu8j2d3f_file_e74635e2cc314e838543e724f6b3b1f2_10658020\\"
   */
  filter?: string;
  /**
   * @remarks
   * Specifies whether to enable knowledge graph enhancement. Default value: false.
   * 
   * @example
   * false
   */
  graphEnhance?: boolean;
  /**
   * @remarks
   * The number of top entities and relationship edges to return. Default value: 60.
   */
  graphSearchArgs?: ChatWithKnowledgeBaseRequestKnowledgeParamsSourceCollectionQueryParamsGraphSearchArgs;
  /**
   * @remarks
   * The multi-path recall algorithm. Default is empty (i.e., directly compares and sorts the dense vector and full-text scores).
   * 
   * Valid values:
   * 
   * - RRF: Reciprocal Rank Fusion. Has a parameter k to control the fusion effect. See HybridSearchArgs configuration for details.
   * - Weight: Weight-based sorting. Uses parameters to control the score weights of vector and full-text retrieval, then sorts. See HybridSearchArgs configuration for details.
   * - Cascaded: First performs full-text retrieval, then performs vector retrieval on top of it.
   * 
   * @example
   * RRF
   */
  hybridSearch?: string;
  /**
   * @remarks
   * The algorithm parameters for multi-path recall. Currently supports RRF and Weight. HybridPathsSetting can specify recall of dense vectors (dense), sparse vectors (sparse), and full-text retrieval (fulltext). If the value is empty, dense vectors (dense) and full-text retrieval (fulltext) are recalled by default.
   * 
   * - RRF: Specifies the k constant in the scoring algorithm `1/(k+rank_i)`. The value must be a positive integer greater than 1. Format:
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
   * - Weight: 
   *    - Dual-path recall (without specifying HybridPathsSetting, only specifying alpha):
   *       - Formula: alpha * dense_score + (1-alpha) * fulltext_score. The parameter alpha represents the score weight between dense vector and full-text retrieval, ranging from 0 to 1, where 0 means full-text only and 1 means dense vector only:
   * ```
   * { 
   *    "Weight": {
   *     "alpha": 0.5
   *    }
   * }
   * ```
   *   - Three-path recall mode:
   *      - Formula: normalized_dense * dense_score + normalized_sparse * sparse_score + normalized_fulltext * fulltext_score. Where dense, sparse, and fulltext represent the weights for dense vector, sparse vector, and full-text retrieval respectively, with values greater than or equal to 0. The system automatically normalizes the weights to the range 0-1 (i.e., normalized_x = x / (dense + sparse + fulltext)).
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
   * The method used when building the vector index. Valid values:
   * - l2: Euclidean distance.
   * - ip: Inner product distance.
   * - cosine: Cosine similarity.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The recall window. When this value is not empty, additional context of the retrieval results is returned. The format is a 2-element array: List<A, B>, where -10 <= A <= 0 and 0 <= B <= 10.
   * > - It is recommended to use this parameter when document segmentation is too granular and retrieval may lose contextual information.
   * > - Reranking takes priority over windowing, meaning reranking is performed first, then windowing is applied.
   */
  recallWindow?: number[];
  /**
   * @remarks
   * The reranking factor. When this value is not empty, the vector retrieval results are reranked. Value range: 1 < RerankFactor <= 5.
   * > - Reranking is slow when document segmentation is sparse.
   * > - It is recommended that the number of items to rerank (TopK * Factor, rounded up) does not exceed 50.
   * 
   * @example
   * 1.5
   */
  rerankFactor?: number;
  rerankModel?: ChatWithKnowledgeBaseRequestKnowledgeParamsSourceCollectionQueryParamsRerankModel;
  /**
   * @remarks
   * The number of top results to return.
   * 
   * @example
   * 10
   */
  topK?: number;
  /**
   * @remarks
   * Specifies whether to use full-text retrieval (dual-path recall). Default value: false, which means only vector retrieval is used.
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
   * The name of the collection to recall.
   * 
   * This parameter is required.
   * 
   * @example
   * adbpg_document_collection
   */
  collection?: string;
  /**
   * @remarks
   * The namespace. Default value: public.
   * 
   * > You can create a namespace by calling the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation, and view the list by calling the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation.
   * 
   * @example
   * dukang
   */
  namespace?: string;
  /**
   * @remarks
   * The password corresponding to the namespace.
   * 
   * > This value is specified in the CreateNamespace operation.
   * 
   * This parameter is required.
   * 
   * @example
   * namespacePasswd
   */
  namespacePassword?: string;
  /**
   * @remarks
   * The parameters related to knowledge base retrieval.
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
   * The method for merging multiple knowledge bases. Default is RRF. Valid values:
   * - RRF
   * - Weight
   * 
   * @example
   * "RRF"
   */
  mergeMethod?: string;
  /**
   * @remarks
   * The parameters for multi-knowledge base fusion.
   */
  mergeMethodArgs?: ChatWithKnowledgeBaseRequestKnowledgeParamsMergeMethodArgs;
  /**
   * @remarks
   * The reranking factor. When this value is not empty, the vector retrieval results are reranked. Value range: 1 < RerankFactor <= 5.
   * > - Reranking is slow when document segmentation is sparse.
   * > - It is recommended that the number of items to rerank (TopK * Factor, rounded up) does not exceed 50.
   * 
   * @example
   * 1.0001
   */
  rerankFactor?: number;
  rerankModel?: ChatWithKnowledgeBaseRequestKnowledgeParamsRerankModel;
  /**
   * @remarks
   * The list of knowledge bases.
   * 
   * This parameter is required.
   */
  sourceCollection?: ChatWithKnowledgeBaseRequestKnowledgeParamsSourceCollection[];
  /**
   * @remarks
   * The number of top results to return after merging the recall results from multiple vector collections.
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
   * The message content.
   * 
   * This parameter is required.
   * 
   * @example
   * You are a helpful assistant.
   */
  content?: string;
  /**
   * @remarks
   * The message role. Valid values:
   * - system
   * - user
   * - assistant
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
   * The function tool description.
   * 
   * @example
   * 获取天气。
   */
  description?: string;
  /**
   * @remarks
   * The function tool name.
   * 
   * @example
   * get_weather
   */
  name?: string;
  /**
   * @remarks
   * The function parameters in JSON Schema format.
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
   * The message list.
   * 
   * This parameter is required.
   */
  messages?: ChatWithKnowledgeBaseRequestModelParamsMessages[];
  /**
   * @remarks
   * The name of the large model to use. For valid values, see: [Bailian Help Documentation](https://help.aliyun.com/zh/model-studio/compatibility-of-openai-with-dashscope?spm=a2c4g.11186623.help-menu-2400256.d_2_10_0.45b5516eZIciC8&scm=20140722.H_2833609._.OR_help-T_cn~zh-V_1#eadfc13038jd5)
   * 
   * This parameter is required.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * The number of candidate replies to generate.
   * 
   * @example
   * 1
   */
  n?: number;
  /**
   * @remarks
   * The presence penalty coefficient (-2.0 to 2.0).
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
   * The stop word list.
   */
  stop?: string[];
  /**
   * @remarks
   * The sampling temperature (0 to 2).
   * 
   * @example
   * 0.6
   */
  temperature?: number;
  /**
   * @remarks
   * The tool list.
   */
  tools?: ChatWithKnowledgeBaseRequestModelParamsTools[];
  /**
   * @remarks
   * The nucleus sampling probability threshold (0 to 1).
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
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the details of all instances in the target region, including the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to return the recall results. Default value: false.
   * 
   * @example
   * false
   */
  includeKnowledgeBaseResults?: boolean;
  /**
   * @remarks
   * The knowledge retrieval parameter object. If not specified, only chat is performed.
   */
  knowledgeParams?: ChatWithKnowledgeBaseRequestKnowledgeParams;
  /**
   * @remarks
   * The large language model (LLM) invocation parameter object.
   * 
   * This parameter is required.
   */
  modelParams?: ChatWithKnowledgeBaseRequestModelParams;
  ownerId?: number;
  /**
   * @remarks
   * The system prompt template, which must include {{ text_chunks }}, {{ user_system_prompt }}, {{ graph_entities }}, and {{ graph_relations }}. If not specified, this part does not take effect.
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

