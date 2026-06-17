// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatWithKnowledgeBaseStreamRequestKnowledgeParamsMergeMethodArgsRrf extends $dara.Model {
  /**
   * @remarks
   * The constant `k` used in the reciprocal rank fusion (RRF) formula `1/(k + rank_i)`. The value must be an integer greater than 1.
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
   * An array of weights for each `SourceCollection`.
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
   * Parameters for the `RRF` merge method.
   */
  rrf?: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsMergeMethodArgsRrf;
  /**
   * @remarks
   * Parameters for the `Weight` merge method.
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
   * An instruction for the rerank model.
   * 
   * @example
   * Given a web search query, retrieve relevant passages that answer the query
   */
  instruct?: string;
  /**
   * @remarks
   * The name of the rerank model.
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
   * The number of top entities and relationship edges to return. Default value: `60`.
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
   * An instruction for the rerank model.
   * 
   * @example
   * Given a web search query, retrieve relevant passages that answer the query
   */
  instruct?: string;
  /**
   * @remarks
   * The name of the rerank model.
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

export class ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollectionQueryParams extends $dara.Model {
  /**
   * @remarks
   * A filter expression to apply to the search, similar to a SQL `WHERE` clause.
   * 
   * @example
   * method_id=\\"e41695f0-2851-40ac-b21d-dd337b60d71c\\"
   */
  filter?: string;
  /**
   * @remarks
   * Specifies whether to enable knowledge graph enhancement. Default value: `false`.
   * 
   * @example
   * true
   */
  graphEnhance?: boolean;
  /**
   * @remarks
   * The parameters for knowledge graph search.
   */
  graphSearchArgs?: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollectionQueryParamsGraphSearchArgs;
  /**
   * @remarks
   * Specifies the hybrid search algorithm. If omitted, the system performs a basic score comparison of vector search and full-text retrieval results.
   * 
   * Valid values:
   * 
   * - `RRF`: Reciprocal rank fusion. Configure the `k` parameter in `HybridSearchArgs`.
   * 
   * - `Weight`: Weighted score fusion. Use the `alpha` parameter in `HybridSearchArgs` to control the balance between vector and full-text search scores.
   * 
   * - `Cascaded`: First performs full-text retrieval, then runs a vector search on the results.
   * 
   * @example
   * Cascaded
   */
  hybridSearch?: string;
  /**
   * @remarks
   * The arguments for the specified hybrid search algorithm. Supports `RRF` and `Weight`.
   * 
   * - `RRF`: Specifies the constant `k` in the score calculation formula `1/(k+rank_i)`. `k` must be an integer greater than 1. Format:
   * 
   * ```
   * { 
   *    "RRF": {
   *     "k": 60
   *    }
   * }
   * ```
   * 
   * - `Weight`: Calculates the final score using the formula `alpha * vector_score + (1 - alpha) * text_score`. The `alpha` parameter balances the scores, ranging from 0 (full-text only) to 1 (vector only). Format:
   * 
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
   * The distance metric for vector search. Valid values:
   * 
   * - `l2`: Euclidean distance.
   * 
   * - `ip`: Inner product.
   * 
   * - `cosine`: Cosine similarity.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The recall window. Specifies a window of context to include around retrieved chunks. The value must be a two-element array `[A, B]`, where -10 <= A <= 0 and 0 <= B <= 10.
   * 
   * > - This parameter is useful when document chunks are small and a search might miss important surrounding context.
   * >
   * > - The window is applied after reranking.
   */
  recallWindow?: number[];
  /**
   * @remarks
   * The rerank factor. If specified, the system reranks the results from the vector search. The value must be greater than 1 and less than or equal to 5.
   * 
   * > - Reranking may be inefficient if document chunks are sparse.
   * >
   * > - The number of items to rerank, calculated as `ceil(TopK * RerankFactor)`, should not exceed 50.
   * 
   * @example
   * 2.0
   */
  rerankFactor?: number;
  /**
   * @remarks
   * The rerank model to use.
   */
  rerankModel?: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollectionQueryParamsRerankModel;
  /**
   * @remarks
   * The number of top results to return from this collection.
   * 
   * @example
   * 101
   */
  topK?: number;
  /**
   * @remarks
   * Specifies whether to use full-text retrieval for hybrid search. If `false` (the default), only vector search is performed.
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
   * The name of the collection to search.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_index_adb_50943_prod
   */
  collection?: string;
  /**
   * @remarks
   * The namespace that contains the collection.
   * 
   * > You can call the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to view available namespaces.
   * 
   * @example
   * ddstar_vector
   */
  namespace?: string;
  /**
   * @remarks
   * The password for the specified namespace.
   * 
   * > This value is specified in the `CreateNamespace` operation.
   * 
   * This parameter is required.
   * 
   * @example
   * namespacePassword
   */
  namespacePassword?: string;
  /**
   * @remarks
   * Parameters for the knowledge base query.
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
   * Specifies the method for merging results from multiple knowledge bases. Default: `RRF`. Valid values:
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
   * The arguments for the result merging method.
   */
  mergeMethodArgs?: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsMergeMethodArgs;
  /**
   * @remarks
   * Specifies the factor for reranking vector search results. The value must be greater than 1 and less than or equal to 5.
   * 
   * > - Reranking may be inefficient if document chunks are sparse.
   * >
   * > - The number of items to rerank, calculated as `ceil(TopK * RerankFactor)`, should not exceed 50.
   * 
   * @example
   * 5.0
   */
  rerankFactor?: number;
  /**
   * @remarks
   * The rerank model to use.
   */
  rerankModel?: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsRerankModel;
  /**
   * @remarks
   * An array of knowledge bases to search.
   * 
   * This parameter is required.
   */
  sourceCollection?: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollection[];
  /**
   * @remarks
   * The total number of top results to return after merging results from all collections.
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

export class ChatWithKnowledgeBaseStreamRequestModelParamsToolsFunction extends $dara.Model {
  /**
   * @remarks
   * A description of the function tool.
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
   * The parameters of the function, described as a JSON Schema object.
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
   * A list of messages in the conversation.
   * 
   * This parameter is required.
   */
  messages?: ChatWithKnowledgeBaseStreamRequestModelParamsMessages[];
  /**
   * @remarks
   * The name of the Large Language Model to use. For a list of available models, refer to the [Model Studio documentation](https://help.aliyun.com/zh/model-studio/compatibility-of-openai-with-dashscope?spm=openapi-amp.newDocPublishment.0.0.257c281fH8TtM8\\&scm=20140722.H_2833609._.OR_help-T_cn~zh-V_1#eadfc13038jd5).
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
   * The presence penalty. A value between -2.0 and 2.0.
   * 
   * @example
   * 1.0
   */
  presencePenalty?: number;
  /**
   * @remarks
   * The random seed for sampling.
   * 
   * @example
   * 42
   */
  seed?: number;
  /**
   * @remarks
   * A list of stop sequences.
   */
  stop?: string[];
  /**
   * @remarks
   * The sampling temperature. A value between 0 and 2.
   * 
   * @example
   * 0.6
   */
  temperature?: number;
  /**
   * @remarks
   * A list of tools the model can call.
   */
  tools?: ChatWithKnowledgeBaseStreamRequestModelParamsTools[];
  /**
   * @remarks
   * The nucleus sampling probability threshold. A value between 0 and 1.
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
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances in a specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to include the retrieved knowledge base results in the response. Default value: `false`.
   * 
   * @example
   * false
   */
  includeKnowledgeBaseResults?: boolean;
  /**
   * @remarks
   * Parameters for knowledge retrieval. If omitted, the API performs a chat-only operation.
   */
  knowledgeParams?: ChatWithKnowledgeBaseStreamRequestKnowledgeParams;
  /**
   * @remarks
   * An object that contains parameters for the Large Language Model (LLM) call.
   * 
   * This parameter is required.
   */
  modelParams?: ChatWithKnowledgeBaseStreamRequestModelParams;
  ownerId?: number;
  /**
   * @remarks
   * A template for the system prompt. It must include placeholders such as `{{text_chunks}}`, `{{user_system_prompt}}`, `{{graph_entities}}`, and `{{graph_relations}}`. If omitted, no custom prompt template is applied.
   * 
   * @example
   * "参考以下知识回答问题:{{ text_chunks }}"
   */
  promptParams?: string;
  /**
   * @remarks
   * The instance\\"s region ID.
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

