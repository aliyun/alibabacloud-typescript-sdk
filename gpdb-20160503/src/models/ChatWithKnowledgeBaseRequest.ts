// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatWithKnowledgeBaseRequestKnowledgeParamsMergeMethodArgsRrf extends $dara.Model {
  /**
   * @remarks
   * The constant k in the score calculation formula 1/(k+rank_i). The value must be a positive integer greater than 1.
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
   * @remarks
   * Configurable when RerankModel.Name is set to qwen3-rerank. Adds a custom sorting task type description. You can use this parameter to guide the model to adopt different sorting strategies.
   * 
   * @example
   * Given a web search query, retrieve relevant passages that answer the query
   */
  instruct?: string;
  /**
   * @remarks
   * The name of the reranking model. Valid values: qwen3-rerank and gte-rerank-v2.
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
   * The top number of entities and relationship edges to return. Default value: 60.
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
   * Configurable when RerankModel.Name is set to qwen3-rerank. Adds a custom sorting task type description. You can use this parameter to guide the model to adopt different sorting strategies.
   * 
   * @example
   * Given a web search query, retrieve relevant passages that answer the query
   */
  instruct?: string;
  /**
   * @remarks
   * The name of the reranking model. Valid values: qwen3-rerank and gte-rerank-v2.
   * 
   * @example
   * qwen3-rerank
   */
  name?: string;
  /**
   * @remarks
   * The metadata fields that participate in reranking. Separate multiple fields with commas (,). By default, only the document content (content) is used for reranking. The field names must be metadata defined in the collection.
   * 
   * @example
   * title
   */
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
   * The filter condition for the data to be updated, in the SQL WHERE format.
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
   * The top number of entities and relationship edges to return. Default value: 60.
   */
  graphSearchArgs?: ChatWithKnowledgeBaseRequestKnowledgeParamsSourceCollectionQueryParamsGraphSearchArgs;
  /**
   * @remarks
   * The multi-channel recall algorithm. Default value: empty (which means directly comparing and sorting the scores of dense vectors and full text). Valid values:
   * 
   * - RRF: Reciprocal rank fusion. A parameter k is used to control the fusion effect. For details, see HybridSearchArgs.
   * - Weight: Weighted sorting. Parameters are used to control the score weights of vectors and full text before sorting. For details, see HybridSearchArgs.
   * - Cascaded: Full-text retrieve is performed first, followed by vector retrieve based on the results.
   * 
   * @example
   * RRF
   */
  hybridSearch?: string;
  /**
   * @remarks
   * The algorithm parameters for multi-channel recall. RRF and Weight are supported. HybridPathsSetting can be used to specify the recall of dense vectors (dense), sparse vectors (sparse), and full-text retrieve (fulltext). If this value is empty, dense vectors (dense) and full-text retrieve (fulltext) are recalled by default.
   * 
   * - RRF: The constant k in the score calculation formula 1/(k+rank_i). The value must be a positive integer greater than 1. Format:
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
   *    - Dual-channel recall (HybridPathsSetting is not specified, only alpha is specified):
   *       - Calculation formula: alpha * dense_score + (1-alpha) * fulltext_score. The alpha parameter represents the score weight of dense vectors and full-text retrieve. The value ranges from 0 to 1, where 0 indicates full-text retrieve only and 1 indicates dense vectors only:
   * ```
   * { 
   *    "Weight": {
   *     "alpha": 0.5
   *    }
   * }
   * ```
   *   - Triple-channel recall pattern:
   *      - Calculation formula: normalized_dense * dense_score + normalized_sparse * sparse_score + normalized_fulltext * fulltext_score. dense, sparse, and fulltext represent the weights of dense vectors, sparse vectors, and full-text retrieve, respectively. The value must be greater than or equal to 0. The system automatically performs normalization on the weights to 0 to 1 (that is, normalized_x = x / (dense + sparse + fulltext)).
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
   * The method used to build the vector index. Valid values:
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
   * The recall window. If this value is not empty, the context of the retrieval results is additionally returned. The format is an array of two elements: List<A, B>, where -10 <= A <= 0 and 0 <= B <= 10.
   * > - We recommend that you use this parameter when documents are chunked into excessively small pieces and retrieval may lose context information.
   * > - Reranking takes precedence over windowing. That is, reranking is performed before windowing.
   * 
   * @example
   * [-1,1]
   */
  recallWindow?: number[];
  /**
   * @remarks
   * The reranking factor. If this value is not empty, the vector retrieve results are reranked. Valid values: 1 < RerankFactor <= 5.
   * > - When documents are sparsely chunked, the reranking efficiency is low.
   * > - We recommend that the number of reranked items (TopK × Factor, rounded up) does not exceed 50.
   * 
   * @example
   * 1.5
   */
  rerankFactor?: number;
  /**
   * @remarks
   * The reranking model parameters.
   */
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
   * Specifies whether to use full-text retrieve (dual-channel recall). Default value: false, which indicates that only vector retrieve is used.
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
   * The name of the collection to be recalled.
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
   * > You can call the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation to create a namespace and call the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to view the namespace list.
   * 
   * @example
   * dukang
   */
  namespace?: string;
  /**
   * @remarks
   * The password corresponding to the namespace.
   * 
   * > This value is specified when you call the CreateNamespace operation.
   * 
   * This parameter is required.
   * 
   * @example
   * namespacePasswd
   */
  namespacePassword?: string;
  /**
   * @remarks
   * The parameters related to the retrieval of this knowledge base.
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
   * The method used to merge multiple knowledge bases. Default value: RRF. Valid values:
   * - RRF
   * - Weight
   * 
   * @example
   * "RRF"
   */
  mergeMethod?: string;
  /**
   * @remarks
   * The parameters for merging multiple knowledge bases.
   */
  mergeMethodArgs?: ChatWithKnowledgeBaseRequestKnowledgeParamsMergeMethodArgs;
  /**
   * @remarks
   * The reranking factor. If this value is not empty, the vector retrieve results are reranked. Valid values: 1 < RerankFactor <= 5.
   * > - When documents are sparsely chunked, the reranking efficiency is low.
   * > - We recommend that the number of reranked items (TopK × Factor, rounded up) does not exceed 50.
   * 
   * @example
   * 1.0001
   */
  rerankFactor?: number;
  /**
   * @remarks
   * The reranking model parameters.
   */
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
   * The number of top results to return after the multi-vector collection recall results are merged.
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
   * The description of the function tool.
   * 
   * @example
   * Get the weather
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
   * The number of candidate replies to generate.
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
   * The stop word list.
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
  tools?: ChatWithKnowledgeBaseRequestModelParamsTools[];
  /**
   * @remarks
   * The probability threshold for nucleus sampling. Valid values: 0 to 1.
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
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the details of all instances in the target region, including the instance IDs.
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
   * The knowledge retrieval parameter object. If this parameter is not specified, only chat is performed.
   */
  knowledgeParams?: ChatWithKnowledgeBaseRequestKnowledgeParams;
  /**
   * @remarks
   * The large language model (LLM) call parameter object.
   * 
   * This parameter is required.
   */
  modelParams?: ChatWithKnowledgeBaseRequestModelParams;
  ownerId?: number;
  /**
   * @remarks
   * The system prompt template. It must include {{ text_chunks }}, {{ user_system_prompt }}, {{ graph_entities }}, and {{ graph_relations }}. If this parameter is not specified, this part does not take effect.
   * 
   * @example
   * "Answer the question based on the following knowledge: {{ text_chunks }}"
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

