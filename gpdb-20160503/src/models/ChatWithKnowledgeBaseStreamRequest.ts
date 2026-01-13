// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatWithKnowledgeBaseStreamRequestKnowledgeParamsMergeMethodArgsRrf extends $dara.Model {
  /**
   * @remarks
   * Formula to calculate the score: 1/(k + rank_i). The k constant must be a positive integer greater than 1.
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
   * An array of weights for each SourceCollection.
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
   * The parameter to be configured when the MergeMethod parameter is set to RRF.
   */
  rrf?: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsMergeMethodArgsRrf;
  /**
   * @remarks
   * The smoothing constant in the formula to calculate the score: 1/(k + rank_i). It must be a positive integer greater than 1.
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

export class ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollectionQueryParamsGraphSearchArgs extends $dara.Model {
  /**
   * @remarks
   * The number of top entities and relationship edges. Default value: 60.
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

export class ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollectionQueryParams extends $dara.Model {
  /**
   * @remarks
   * The condition that is used to filter the data to be updated. Specify this parameter in a format that is the same as the WHERE clause.
   * 
   * @example
   * method_id=\\"e41695f0-2851-40ac-b21d-dd337b60d71c\\"
   */
  filter?: string;
  /**
   * @remarks
   * Whether to enable knowledge graph enhancement. Default value: false.
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
   * The dual-path retrieval algorithm. This parameter is empty by default, which specifies that scores of vector retrieval and full-text retrieval are directly compared and sorted together.
   * 
   * Valid values:
   * 
   * *   RRF: The reciprocal rank fusion (RRF) algorithm uses a constant k to control the fusion effect. For more information, see the description of the HybridSearchArgs parameter.
   * *   Weight: This algorithm uses the alpha parameter to specify the proportion of the vector search score and the full-text search score and then sorts by weight. For more information, see the description of the HybridSearchArgs parameter.
   * *   Cascaded: This algorithm performs first full-text retrieval and then vector retrieval.
   * 
   * @example
   * Cascaded
   */
  hybridSearch?: string;
  /**
   * @remarks
   * The parameters of the dual-path retrieval algorithm. RRF and Weight are supported at this time:
   * 
   * *   RRF: Specifies the smoothing constant k in the formula to calculate the score: `1/(k + rank_i)`. The k constant must be a positive integer greater than 1. The format:
   * 
   * <!---->
   * 
   *     { 
   *        "RRF": {
   *         "k": 60
   *        }
   *     }
   * 
   * *   Weight: The score is computed as `alpha * vector_score + (1 - alpha) * text_score`. The parameter alpha controls the weighting between vector search and full-text search scores, with a valid range of [0, 1]. 0 specifies only full-text search score. 1 specifies only vector search score.
   * 
   * <!---->
   * 
   *     { 
   *        "Weight": {
   *         "alpha": 0.5
   *        }
   *     }
   */
  hybridSearchArgs?: { [key: string]: any };
  /**
   * @remarks
   * The method that is used to create vector indexes. Valid values:
   * 
   * *   l2: Euclidean distance.
   * *   ip: Inner product distance.
   * *   cosine: Cosine similarity.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The retrieval window. If you specify this parameter, the context of the retrieved result is added in the output. Format: List\\<A, B>. Valid values: -10<=A<=0 and 0<=B<=10.
   * 
   * > 
   * 
   * *   We recommend that you specify this parameter if the source document is segmented into large numbers of pieces, which may result in loss of contextual information during retrieval.
   * 
   * *   Prioritized reranking with windowing, i.e., perform reranking first followed by windowing processing.
   */
  recallWindow?: number[];
  /**
   * @remarks
   * The rerank factor. If you specify this parameter, the retrieved results are reranked once again. Valid values: 1\\<RerankFactor<=5.
   * 
   * > 
   * 
   * *   If the document is segmented into sparse parts, reranking is inefficient.
   * 
   * *   We recommend that the number of reranked results (the ceiling of TopK × RerankFactor) not exceed 50.
   * 
   * @example
   * 2.0
   */
  rerankFactor?: number;
  /**
   * @remarks
   * The number of top results.
   * 
   * @example
   * 101
   */
  topK?: number;
  /**
   * @remarks
   * Specifies whether to use full-text retrieval (dual-path retrieval). The default value is false, which means only vector retrieval is used.
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
   * >  You can call the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to query a list of namespaces.
   * 
   * @example
   * ddstar_vector
   */
  namespace?: string;
  /**
   * @remarks
   * The password for the namespace.
   * 
   * > The value of this parameter is specified by the CreateNamespace operation.
   * 
   * This parameter is required.
   * 
   * @example
   * namespacePassword
   */
  namespacePassword?: string;
  /**
   * @remarks
   * Parameters related to the knowledge base retrieval.
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
   * The method used to merge multiple knowledge base. Default value: RRF. Valid values:
   * 
   * *   RRF
   * *   Weight
   * 
   * @example
   * "RRF"
   */
  mergeMethod?: string;
  /**
   * @remarks
   * Parameters for multi-knowledge-base fusion.
   */
  mergeMethodArgs?: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsMergeMethodArgs;
  /**
   * @remarks
   * The rerank factor. If you specify this parameter, the search result is reranked once again. Valid values: 1\\<RerankFactor<=5.
   * 
   * > 
   * 
   * *   If the document is segmented into sparse parts, reranking is inefficient.
   * 
   * *   We recommend that the number of reranked results (the ceiling of TopK × RerankFactor) not exceed 50.
   * 
   * @example
   * 5.0
   */
  rerankFactor?: number;
  /**
   * @remarks
   * Knowledge base.
   * 
   * This parameter is required.
   */
  sourceCollection?: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollection[];
  /**
   * @remarks
   * Specifies the number of top results to return after merging retrieved results from multiple vector collections.
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
      sourceCollection: 'SourceCollection',
      topK: 'TopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mergeMethod: 'string',
      mergeMethodArgs: ChatWithKnowledgeBaseStreamRequestKnowledgeParamsMergeMethodArgs,
      rerankFactor: 'number',
      sourceCollection: { 'type': 'array', 'itemType': ChatWithKnowledgeBaseStreamRequestKnowledgeParamsSourceCollection },
      topK: 'number',
    };
  }

  validate() {
    if(this.mergeMethodArgs && typeof (this.mergeMethodArgs as any).validate === 'function') {
      (this.mergeMethodArgs as any).validate();
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
   */
  content?: string;
  /**
   * @remarks
   * The message role. Valid values:
   * 
   * *   system
   * *   user
   * *   assistant
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
   * The description of the function.
   */
  description?: string;
  /**
   * @remarks
   * The name of the function.
   * 
   * @example
   * get_weather
   */
  name?: string;
  /**
   * @remarks
   * JSON Schema for function parameters.
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
   * The information about a function.
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
   * Maximum number of tokens to generate.
   * 
   * @example
   * 8192
   */
  maxTokens?: number;
  /**
   * @remarks
   * Message list.
   * 
   * This parameter is required.
   */
  messages?: ChatWithKnowledgeBaseStreamRequestModelParamsMessages[];
  /**
   * @remarks
   * The model name. See [Model Studio Document](https://help.aliyun.com/zh/model-studio/compatibility-of-openai-with-dashscope?spm=openapi-amp.newDocPublishment.0.0.257c281fH8TtM8\\&scm=20140722.H_2833609._.OR_help-T_cn~zh-V_1#eadfc13038jd5) for the available models.
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
   * Presence penalty coefficient (-2.0 to 2.0).
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
   * Stop words.
   */
  stop?: string[];
  /**
   * @remarks
   * Sampling temperature (0~2).
   * 
   * @example
   * 0.6
   */
  temperature?: number;
  /**
   * @remarks
   * Tools.
   */
  tools?: ChatWithKnowledgeBaseStreamRequestModelParamsTools[];
  /**
   * @remarks
   * Top-p (nucleus) sampling threshold (0–1).
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
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Whether to return the retrieved result. Default value: false.
   * 
   * @example
   * false
   */
  includeKnowledgeBaseResults?: boolean;
  /**
   * @remarks
   * The knowledge retrieval parameter object. If you do not specify this parameter, only chat mode is enabled.
   */
  knowledgeParams?: ChatWithKnowledgeBaseStreamRequestKnowledgeParams;
  /**
   * @remarks
   * The Large Language Model (LLM) invocation parameter object.
   * 
   * This parameter is required.
   */
  modelParams?: ChatWithKnowledgeBaseStreamRequestModelParams;
  ownerId?: number;
  /**
   * @remarks
   * The system prompt template, which should include {{ text_chunks }},{{ user_system_prompt }},{{ graph_entities },{{ graph_relations }}. If any of these placeholders are not specified, the corresponding section should have no effect.
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

