// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseRequestChunkConfigurationPreprocessRules extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove URLs and email addresses during parsing.
   * 
   * @example
   * false
   */
  removeUrlsAndEmails?: boolean;
  /**
   * @remarks
   * Specifies whether to replace consecutive whitespace characters, such as spaces, line breaks, and tabs, with a single space.
   * 
   * @example
   * true
   */
  replaceConsecutiveWhitespace?: boolean;
  static names(): { [key: string]: string } {
    return {
      removeUrlsAndEmails: 'RemoveUrlsAndEmails',
      replaceConsecutiveWhitespace: 'ReplaceConsecutiveWhitespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      removeUrlsAndEmails: 'boolean',
      replaceConsecutiveWhitespace: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeBaseRequestChunkConfiguration extends $dara.Model {
  /**
   * @remarks
   * Required for the BY_HEADING strategy. Valid values: 1 to 6. This parameter is ignored for other strategies. Headings at or above the specified level are used as split boundaries. For example, if you set this parameter to 2, both H1 and H2 headings are used for splitting. Deeper-level headings are not split and are retained in the chunk text. If the section content exceeds MaxChunkSize, the system falls back to splitting by paragraphs or sentences. For documents without headings, the system falls back to intelligent chunking.
   * 
   * @example
   * 2
   */
  headingLevel?: number;
  /**
   * @remarks
   * The maximum token length of a single chunk.
   * 
   * @example
   * 512
   */
  maxChunkSize?: number;
  /**
   * @remarks
   * The overlap token length between adjacent chunks.
   * 
   * @example
   * 6
   */
  overlapSize?: number;
  /**
   * @remarks
   * The preprocessing rules.
   */
  preprocessRules?: UpdateKnowledgeBaseRequestChunkConfigurationPreprocessRules;
  /**
   * @remarks
   * The paragraph identifier for the LINE_BREAK strategy, such as a line break.
   * 
   * @example
   * \\\\n\\\\n
   */
  separator?: string;
  /**
   * @remarks
   * The chunking strategy. Valid values: AUTO: Automatic chunking. LINE_BREAK: Chunking by paragraph identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * LINE_BREAK
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      headingLevel: 'HeadingLevel',
      maxChunkSize: 'MaxChunkSize',
      overlapSize: 'OverlapSize',
      preprocessRules: 'PreprocessRules',
      separator: 'Separator',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headingLevel: 'number',
      maxChunkSize: 'number',
      overlapSize: 'number',
      preprocessRules: UpdateKnowledgeBaseRequestChunkConfigurationPreprocessRules,
      separator: 'string',
      strategy: 'string',
    };
  }

  validate() {
    if(this.preprocessRules && typeof (this.preprocessRules as any).validate === 'function') {
      (this.preprocessRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeBaseRequestSearchConfiguration extends $dara.Model {
  /**
   * @remarks
   * The search mode. Valid values: KEYWORD: Keyword retrieve. VECTOR: AISearch. HYBRID: Hybrid retrieve.
   * 
   * @example
   * HYBRID
   */
  mode?: string;
  /**
   * @remarks
   * The hybrid search fusion algorithm. This parameter takes effect only in hybrid search mode. Valid values: RRF: Reciprocal rank fusion.
   * 
   * @example
   * RRF
   */
  rankAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to enable reranking by default. This parameter takes effect only in hybrid search mode and is used when a search request does not specify the Rerank parameter.
   * 
   * @example
   * false
   */
  rerankEnabled?: boolean;
  /**
   * @remarks
   * The default rerank model used when a search request does not specify the RerankModel parameter. Valid values: qwen3-rerank. Default value: qwen3-rerank.
   * 
   * @example
   * qwen3-rerank
   */
  rerankModel?: string;
  /**
   * @remarks
   * The parameter k for the RRF fusion algorithm. The value must be greater than 0. Default value: 60.
   * 
   * @example
   * 60
   */
  rrfK?: number;
  /**
   * @remarks
   * The default number of returned results.
   * 
   * @example
   * 20
   */
  topK?: number;
  /**
   * @remarks
   * The weight of the vector path in the WEIGHTED fusion algorithm. Valid values: 0 to 1. The weight of the keyword path is 1 minus this value. Default value: 0.7.
   * 
   * @example
   * 0.7
   */
  vectorWeight?: number;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      rankAlgorithm: 'RankAlgorithm',
      rerankEnabled: 'RerankEnabled',
      rerankModel: 'RerankModel',
      rrfK: 'RrfK',
      topK: 'TopK',
      vectorWeight: 'VectorWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      rankAlgorithm: 'string',
      rerankEnabled: 'boolean',
      rerankModel: 'string',
      rrfK: 'number',
      topK: 'number',
      vectorWeight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * The data catalog to which the knowledge base belongs. It is used together with Namespace and KnowledgeBaseName to locate the knowledge base. You can call ListCatalogs to obtain the value.
   * 
   * This parameter is required.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * Optional. Updates the default chunking strategy of the knowledge base. This update takes effect only for newly uploaded documents and does not re-chunk existing documents. If this parameter is not specified, the strategy is not modified.
   */
  chunkConfiguration?: UpdateKnowledgeBaseRequestChunkConfiguration;
  /**
   * @remarks
   * Updates the description of the knowledge base. If this parameter is not specified, the description is not modified.
   * 
   * @example
   * Product documentation knowledge base
   */
  description?: string;
  /**
   * @remarks
   * The name of the knowledge base. The name must be unique within the namespace. It is specified during creation and cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * my-knowledge-base
   */
  knowledgeBaseName?: string;
  /**
   * @remarks
   * The namespace to which the knowledge base belongs. The namespace must belong to the specified data catalog. It is used together with Catalog and KnowledgeBaseName to locate the knowledge base. You can call ListNamespaces to obtain the value.
   * 
   * This parameter is required.
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * Optional. Updates the default search configuration at the knowledge base level. The update takes effect immediately for subsequent search requests. If this parameter is not specified, the configuration is not modified.
   */
  searchConfiguration?: UpdateKnowledgeBaseRequestSearchConfiguration;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      chunkConfiguration: 'ChunkConfiguration',
      description: 'Description',
      knowledgeBaseName: 'KnowledgeBaseName',
      namespace: 'Namespace',
      searchConfiguration: 'SearchConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      chunkConfiguration: UpdateKnowledgeBaseRequestChunkConfiguration,
      description: 'string',
      knowledgeBaseName: 'string',
      namespace: 'string',
      searchConfiguration: UpdateKnowledgeBaseRequestSearchConfiguration,
    };
  }

  validate() {
    if(this.chunkConfiguration && typeof (this.chunkConfiguration as any).validate === 'function') {
      (this.chunkConfiguration as any).validate();
    }
    if(this.searchConfiguration && typeof (this.searchConfiguration as any).validate === 'function') {
      (this.searchConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

