// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatWithKnowledgeBaseStreamRequestKnowledgeParamsMergeMethodArgsRrf extends $dara.Model {
  /**
   * @remarks
   * The k constant in the score calculation formula `1/(k+rank_i)`. The value must be a positive integer greater than 1.
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

export class ChatWithKnowledgeBaseStreamRequestKnowledgeParamsMergeMethodArgsWeight extends $dara.Model {
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

export class ChatWithKnowledgeBaseStreamRequestKnowledgeParamsMergeMethodArgs extends $dara.Model {
  /**
   * @remarks
   * The configurable parameters when MergeMethod is set to RRF.
   */
  rrf?: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsMergeMethodArgsRrf;
  /**
   * @remarks
   * The configurable parameters when MergeMethod is set to Weight.
   */
  weight?: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsMergeMethodArgsWeight;
  static names(): { [key: string]: string } {
    return {
      rrf: 'Rrf',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rrf: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsMergeMethodArgsRrf,
      weight: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsMergeMethodArgsWeight,
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

export class ChatWithKnowledgeBaseStreamRequestKnowledgeParamsRerankModel extends $dara.Model {
  /**
   * @remarks
   * This parameter can be set when RerankModel.Name is set to qwen3-rerank. Specifies a custom ranking task type description to guide the model to adopt different ranking strategies.
   * 
   * @example
   * Given a web search query, retrieve relevant passages that answer the query
   */
  instruct?: string;
  /**
   * @remarks
   * The reranking model name. Valid values: qwen3-rerank, gte-rerank-v2.
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

export class ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollectionQueryParamsGraphSearchArgs extends $dara.Model {
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

export class ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollectionQueryParamsRerankModel extends $dara.Model {
  /**
   * @remarks
   * This parameter can be set when RerankModel.Name is set to qwen3-rerank. Specifies a custom ranking task type description to guide the model to adopt different ranking strategies.
   * 
   * @example
   * Given a web search query, retrieve relevant passages that answer the query
   */
  instruct?: string;
  /**
   * @remarks
   * The reranking model name. Valid values: qwen3-rerank, gte-rerank-v2.
   * 
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

export class ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollectionQueryParams extends $dara.Model {
  /**
   * @remarks
   * The filter condition for the data to update, in SQL WHERE clause format.
   * 
   * @example
   * method_id=\\"e41695f0-2851-40ac-b21d-dd337b60d71c\\"
   */
  filter?: string;
  /**
   * @remarks
   * Specifies whether to enable knowledge graph enhancement. Default value: false.
   * 
   * @example
   * true
   */
  graphEnhance?: boolean;
  /**
   * @remarks
   * The knowledge graph retrieval parameters.
   */
  graphSearchArgs?: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollectionQueryParamsGraphSearchArgs;
  /**
   * @remarks
   * The multi-channel recall algorithm. Default value: empty (AISearch and full-text index scores are directly compared and sorted).
   * 
   * Valid values:
   * 
   * - RRF: Reciprocal rank fusion. A parameter k controls the fusion effect. For more information, see HybridSearchArgs.
   * - Weight: Weighted reranking. A parameter alpha controls the score weight between AISearch and full-text index results, then performs reranking. For more information, see HybridSearchArgs.
   * - Cascaded: Full-text index retrieve is performed first, followed by AISearch retrieve on the full-text index results.
   * 
   * @example
   * Cascaded
   */
  hybridSearch?: string;
  /**
   * @remarks
   * The algorithm parameters for multi-channel recall. RRF and Weight are supported:
   * 
   * - RRF: The k constant in the score calculation formula `1/(k+rank_i)`. The value must be a positive integer greater than 1. Format:
   * ```
   * { 
   *    "RRF": {
   *     "k": 60
   *    }
   * }
   * ```
   * 
   * - Weight: The calculation formula is `alpha * vector_score + (1-alpha) * text_score`. The parameter alpha specifies the score weight between vector and full-text retrieval. Valid values: 0 to 1, where 0 indicates full-text only and 1 indicates vector only:
   * ```
   * { 
   *    "Weight": {
   *     "alpha": 0.5
   *    }
   * }
   * ```.
   */
  hybridSearchArgs?: { [key: string]: any };
  /**
   * @remarks
   * The method used to build the vector index. Valid values:
   * - l2: Euclidean distance.
   * - ip: inner product distance.
   * - cosine: cosine similarity.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The recall window. If this value is not empty, additional context is returned for retrieval results. The format is a two-element array: List<A, B>, where -10 <= A <= 0 and 0 <= B <= 10.
   * > - Use this parameter when documents are segmented too finely and retrieval may lose contextual information.
   * > - Reranking takes priority over windowing. Reranking is performed first, followed by windowing.
   */
  recallWindow?: number[];
  /**
   * @remarks
   * The reranking factor. If this value is not empty, the AISearch retrieve results are reranked. Valid values: 1 < RerankFactor <= 5.
   * > - Reranking is slow when document chunks are sparse.
   * > - The recommended number of reranked items (TopK × Factor, rounded up) should not exceed 50.
   * 
   * @example
   * 2.0
   */
  rerankFactor?: number;
  /**
   * @remarks
   * The reranking model parameters.
   */
  rerankModel?: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollectionQueryParamsRerankModel;
  /**
   * @remarks
   * The number of top results to return.
   * 
   * @example
   * 101
   */
  topK?: number;
  /**
   * @remarks
   * Specifies whether to use full-text index (multi-channel recall). Default value: false. Only AISearch retrieve is used.
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
      graphSearchArgs: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollectionQueryParamsGraphSearchArgs,
      hybridSearch: 'string',
      hybridSearchArgs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      metrics: 'string',
      recallWindow: { 'type': 'array', 'itemType': 'number' },
      rerankFactor: 'number',
      rerankModel: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollectionQueryParamsRerankModel,
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

export class ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollection extends $dara.Model {
  /**
   * @remarks
   * The name of the collection to recall.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_index_adb_50943_prod
   */
  collection?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * > You can call the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to query the list.
   * 
   * @example
   * ddstar_vector
   */
  namespace?: string;
  /**
   * @remarks
   * The password of the namespace.
   * 
   * > This value is specified in the CreateNamespace operation.
   * 
   * This parameter is required.
   * 
   * @example
   * namespacePassword
   */
  namespacePassword?: string;
  /**
   * @remarks
   * The parameters related to retrieval from this knowledge base.
   */
  queryParams?: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollectionQueryParams;
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
      queryParams: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollectionQueryParams,
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

export class ChatWithKnowledgeBaseStreamRequestKnowledgeParams extends $dara.Model {
  /**
   * @remarks
   * The method for merging results from multiple knowledge bases. Default value: RRF. Valid values:
   * - RRF
   * - Weight.
   * 
   * @example
   * "RRF"
   */
  mergeMethod?: string;
  /**
   * @remarks
   * The parameters for merging results from multiple knowledge bases.
   */
  mergeMethodArgs?: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsMergeMethodArgs;
  /**
   * @remarks
   * The reranking factor. If this value is not empty, the AISearch retrieve results are reranked. Valid values: 1 < RerankFactor <= 5.
   * > - Reranking is slow when document chunks are sparse.
   * > - The recommended number of reranked items (TopK × Factor, rounded up) should not exceed 50.
   * 
   * @example
   * 5.0
   */
  rerankFactor?: number;
  /**
   * @remarks
   * The reranking model parameters for performing an additional reranking on the merged results from multiple retrieval paths.
   */
  rerankModel?: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsRerankModel;
  /**
   * @remarks
   * The knowledge base.
   * 
   * This parameter is required.
   */
  sourceCollection?: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollection[];
  /**
   * @remarks
   * The number of top results to return after merging recall results from multiple vector collections.
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
      mergeMethodArgs: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsMergeMethodArgs,
      rerankFactor: 'number',
      rerankModel: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsRerankModel,
      sourceCollection: { 'type': 'array', 'itemType': ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollection },
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

export class ChatWithKnowledgeBaseStreamRequestModelParamsMessages extends $dara.Model {
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
   * 
   * - system
   * - user
   * - assistant.
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

export class ChatWithKnowledgeBaseStreamRequestModelParamsToolsFunction extends $dara.Model {
  /**
   * @remarks
   * The description of the function tool.
   * 
   * @example
   * Get weather.
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
   * The JSON Schema of the function parameters.
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

export class ChatWithKnowledgeBaseStreamRequestModelParamsTools extends $dara.Model {
  /**
   * @remarks
   * The function information.
   */
  function?: ChatWithKnowledgeBaseStreamRequestModelParamsToolsFunction;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: ChatWithKnowledgeBaseStreamRequestModelParamsToolsFunction,
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

export class ChatWithKnowledgeBaseStreamRequestModelParams extends $dara.Model {
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
  messages?: ChatWithKnowledgeBaseStreamRequestModelParamsMessages[];
  /**
   * @remarks
   * The name of the large language model to use. For valid values, see [Model Studio documentation](https://www.alibabacloud.com/help/en/model-studio/compatibility-of-openai-with-dashscope#eadfc13038jd5).
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
   * The presence penalty coefficient. Valid values: -2.0 to 2.0.
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
   * The list of stop words.
   */
  stop?: string[];
  /**
   * @remarks
   * The sampling temperature. Valid values: 0 to 2.
   * 
   * @example
   * 0.6
   */
  temperature?: number;
  /**
   * @remarks
   * The tool list.
   */
  tools?: ChatWithKnowledgeBaseStreamRequestModelParamsTools[];
  /**
   * @remarks
   * The nucleus sampling probability threshold. Valid values: 0 to 1.
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
      messages: { 'type': 'array', 'itemType': ChatWithKnowledgeBaseStreamRequestModelParamsMessages },
      model: 'string',
      n: 'number',
      presencePenalty: 'number',
      seed: 'number',
      stop: { 'type': 'array', 'itemType': 'string' },
      temperature: 'number',
      tools: { 'type': 'array', 'itemType': ChatWithKnowledgeBaseStreamRequestModelParamsTools },
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

export class ChatWithKnowledgeBaseStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances in a region.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to return recall results. Default value: false.
   * 
   * @example
   * false
   */
  includeKnowledgeBaseResults?: boolean;
  /**
   * @remarks
   * The knowledge retrieval parameter object. If this parameter is not specified, only chat is performed.
   */
  knowledgeParams?: ChatWithKnowledgeBaseStreamRequestKnowledgeParams;
  /**
   * @remarks
   * The large language model (LLM) invocation parameter object.
   * 
   * This parameter is required.
   */
  modelParams?: ChatWithKnowledgeBaseStreamRequestModelParams;
  ownerId?: number;
  /**
   * @remarks
   * The system prompt template. The template must include {{ text_chunks }}, {{ user_system_prompt }}, {{ graph_entities }}, and {{ graph_relations }}. If not specified, this part does not take effect.
   * 
   * @example
   * "参考以下知识回答问题:{{ text_chunks }}"
   */
  promptParams?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
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
      knowledgeParams: ChatWithKnowledgeBaseStreamRequestKnowledgeParams,
      modelParams: ChatWithKnowledgeBaseStreamRequestModelParams,
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

