// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatWithKnowledgeBaseStreamRequestKnowledgeParamsMergeMethodArgsRrf extends $dara.Model {
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
   * This parameter can be set when RerankModel.Name is set to qwen3-rerank. It adds a description for the custom sorting task type, which guides the model to adopt different sorting strategies.
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

export class ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollectionQueryParamsGraphSearchArgs extends $dara.Model {
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

export class ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollectionQueryParamsRerankModel extends $dara.Model {
  /**
   * @remarks
   * This parameter can be set when RerankModel.Name is set to qwen3-rerank. It adds a description for the custom sorting task type, which guides the model to adopt different sorting strategies.
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
   * The metadata fields that participate in reranking. Separate multiple fields with commas (,). By default, only the document content (content) is used for reranking. The field names must be defined in the Metadata of the Collection.
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

export class ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollectionQueryParams extends $dara.Model {
  /**
   * @remarks
   * The filter condition for the data to be updated, in the SQL WHERE format.
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
   * The dual-path recall algorithm. Default value: empty, which means the vector and full-text scores are directly compared and sorted. Valid values:
   * 
   * - RRF: Reciprocal Rank Fusion. It uses a parameter k to control the fusion effect. For details, see HybridSearchArgs.
   * - Weight: Weighted sorting. It uses a parameter alpha to control the weight of vector and full-text scores before sorting. For details, see HybridSearchArgs.
   * - Cascaded: Full-text retrieval is performed first, followed by vector retrieval based on the full-text results.
   * 
   * @example
   * Cascaded
   */
  hybridSearch?: string;
  /**
   * @remarks
   * The algorithm parameters for dual-path recall. Currently, RRF and Weight are supported:
   * 
   * - RRF: Specifies the constant k in the score calculation formula `1/(k+rank_i)`. The value must be a positive integer greater than 1. Format:
   * ```
   * { 
   *    "RRF": {
   *     "k": 60
   *    }
   * }
   * ```
   * 
   * - Weight: The calculation formula is `alpha * vector_score + (1-alpha) * text_score`. The parameter alpha represents the weight of vector and full-text retrieval scores, ranging from 0 to 1. A value of 0 indicates full-text only, and 1 indicates vector only. Format:
   * ```
   * { 
   *    "Weight": {
   *     "alpha": 0.5
   *    }
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
   * The recall window. If this value is not empty, the context of the retrieval results is added to the response. The format is an array of two elements: List<A, B>, where -10 <= A <= 0 and 0 <= B <= 10.
   * > - We recommend that you use this parameter when documents are split into excessively small chunks and retrieval may lose context information.
   * > - Reranking takes precedence over windowing. That is, reranking is performed before windowing.
   * 
   * @example
   * [-1,1]
   */
  recallWindow?: number[];
  /**
   * @remarks
   * The reranking factor. If this value is not empty, a reranking is performed on the vector retrieval results. Valid values: 1 < RerankFactor <= 5.
   * > - When document chunks are sparse, the reranking efficiency is low.
   * > - We recommend that the number of reranked items (TopK × Factor, rounded up) does not exceed 50.
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
   * The name of the collection to be recalled.
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
   * > You can call the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) API operation to view the list.
   * 
   * @example
   * ddstar_vector
   */
  namespace?: string;
  /**
   * @remarks
   * The password for the namespace.
   * 
   * > This value is specified when you call the CreateNamespace API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * namespacePassword
   */
  namespacePassword?: string;
  /**
   * @remarks
   * The parameters related to the retrieval of this knowledge base.
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
  mergeMethodArgs?: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsMergeMethodArgs;
  /**
   * @remarks
   * The reranking factor. If this value is not empty, a reranking is performed on the vector retrieval results. Valid values: 1 < RerankFactor <= 5.
   * > - When document chunks are sparse, the reranking efficiency is low.
   * > - We recommend that the number of reranked items (TopK × Factor, rounded up) does not exceed 50.
   * 
   * @example
   * 5.0
   */
  rerankFactor?: number;
  /**
   * @remarks
   * The reranking model parameters used to rerank the final merged results after multi-way merging.
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
   * The number of top results to return after the recall results of multiple vector collections are merged.
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
   * The JSON Schema for the function parameters.
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
  tools?: ChatWithKnowledgeBaseStreamRequestModelParamsTools[];
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
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) API operation to view the instance IDs of all AnalyticDB for PostgreSQL instances in the specified region.
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
   * The knowledge retrieval parameters. If this parameter is not specified, only the chat feature is used.
   */
  knowledgeParams?: ChatWithKnowledgeBaseStreamRequestKnowledgeParams;
  /**
   * @remarks
   * The call parameters for the large language model (LLM).
   * 
   * This parameter is required.
   */
  modelParams?: ChatWithKnowledgeBaseStreamRequestModelParams;
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

