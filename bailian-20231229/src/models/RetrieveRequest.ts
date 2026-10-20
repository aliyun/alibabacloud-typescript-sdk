// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveRequestExtra extends $dara.Model {
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      uniqueId: 'uniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uniqueId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveRequestQueryHistory extends $dara.Model {
  /**
   * @remarks
   * The question or answer content of the corresponding role.
   * 
   * @example
   * A piece of text
   */
  content?: string;
  /**
   * @remarks
   * The role.
   * 
   * Valid values:
   * 
   * - user: If this role is passed, content indicates the text that you input to the Alibaba Cloud Model Studio application.
   * - assistant: If this role is passed, content indicates the reply from the Alibaba Cloud Model Studio application.
   * 
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
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

export class RetrieveRequestRerank extends $dara.Model {
  /**
   * @remarks
   * The specified reranking model. The value specified here overrides the reranking model selected when the knowledge base was created. Valid values:
   * 
   * <props="china">
   * 
   * - qwen3-rerank-hybrid: qwen3-rerank (hybrid) reranking.
   * - qwen3-rerank: qwen3-rerank reranking.
   * - gte-rerank-hybrid: gte-rerank (hybrid) reranking.
   * - gte-rerank: gte-rerank reranking.
   * 
   * 
   * 
   * <props="intl">
   * 
   * - gte-rerank-hybrid: Official reranking.
   * - gte-rerank: gte-rerank reranking.
   * 
   * 
   * 
   * 
   * 
   * 
   * Default value: null. The reranking model selected when the knowledge base was created is used.
   * 
   * 
   * <props="china">
   * 
   * > If you only need semantic reranking, use qwen3-rerank. If you need both semantic reranking and text matching features to ensure relevance, use qwen3-rerank-hybrid.
   * >
   * 
   * 
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * > If you only need semantic reranking, use gte-rerank. If you need both semantic reranking and text matching features to ensure relevance, use gte-rerank-hybrid.
   * >
   * 
   * 
   * 
   * 
   * 
   * 
   * <props="china">
   * 
   * > gte-rerank-hybrid and gte-rerank will no longer be updated and are not recommended.
   * >
   * 
   * @example
   * gte-rerank-hybrid
   */
  modelName?: string;
  /**
   * @remarks
   * <props="intl">This parameter is not available. Do not specify this parameter.
   * 
   * <props="china">A natural language instruction used to fine-tune the behavior of the reranking model.
   * <notice>This parameter takes effect only when rerank_mode is set to custom.</notice>
   * 
   * @example
   * Given a web search query, retrieve relevant passages that answer the query.
   */
  rerankInstruct?: string;
  /**
   * @remarks
   * <props="china">
   * The instruction intervention mode of the reranking model, which determines its scoring preference.
   * 
   * **Valid values:**
   * 
   * - **qa**: (Default) Q&A mode. The model tends to assign higher scores to candidates that can directly answer the query. Recommended for Q&A scenarios.
   * 
   * - **similar**: Similarity mode. The model tends to assign higher scores to candidates that are highly consistent with the query content. Recommended for matching and retrieval scenarios.
   * 
   * - **custom**: Custom mode. The reranking behavior of the model is determined by the instruction in the rerank_instruct parameter.
   * 
   * 
   * 
   * <props="intl">This parameter is not available. Do not specify this parameter.
   * 
   * @example
   * qa
   */
  rerankMode?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'ModelName',
      rerankInstruct: 'RerankInstruct',
      rerankMode: 'RerankMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      rerankInstruct: 'string',
      rerankMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveRequestRewrite extends $dara.Model {
  /**
   * @remarks
   * The name of the multi-turn conversation rewriting model. The model automatically adjusts the original input prompt (user question) based on the conversation context to improve retrieval performance. Valid values:
   * - conv-rewrite-qwen-1.8b: The conv-rewrite-qwen-1.8b model. Currently, only this model is supported.
   * 
   * Default value: null. The conv-rewrite-qwen-1.8b model is used.
   * 
   * @example
   * conv-rewrite-qwen-1.8b
   */
  modelName?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'ModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveRequest extends $dara.Model {
  /**
   * @remarks
   * The top K value for AISearch. The system generates a vector for the input text and retrieves the top K text chunks in the knowledge base that are most similar to the vector representation. Valid values: 0 to 100.
   * The sum of DenseSimilarityTopK and SparseSimilarityTopK must be less than or equal to 200.
   * 
   * Default value: 100.
   * 
   * @example
   * 100
   */
  denseSimilarityTopK?: number;
  /**
   * @remarks
   * Specifies whether to enable reranking. For more information, see [Knowledge base](https://help.aliyun.com/document_detail/2807740.html). Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  enableReranking?: boolean;
  /**
   * @remarks
   * Specifies whether to enable <props="china">[multi-turn conversation rewriting](https://help.aliyun.com/model-studio/use-cases/rag-optimization#b7031e2ad6cji)<props="intl">[multi-turn conversation rewriting](https://www.alibabacloud.com/help/model-studio/use-cases/rag-optimization#b7031e2ad6cji).
   * Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableRewrite?: boolean;
  extra?: RetrieveRequestExtra;
  /**
   * @remarks
   * The URLs of the images passed in the query.
   */
  images?: string[];
  /**
   * @remarks
   * The ID of the knowledge base, which is the Data.Id returned by the CreateIndex operation.
   * 
   * > - Make sure that the corresponding knowledge base is created and not deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * 5pwe0mxxxx
   */
  indexId?: string;
  /**
   * @remarks
   * The input text, which is the original input prompt. The length and characters of Query are not limited.
   * 
   * @example
   * Introduction to Alibaba Cloud Model Studio
   */
  query?: string;
  /**
   * @remarks
   * <props="china">[Multi-turn conversation rewriting](https://help.aliyun.com/model-studio/use-cases/rag-optimization#b7031e2ad6cji)<props="intl">[Multi-turn conversation rewriting](https://www.alibabacloud.com/help/model-studio/use-cases/rag-optimization#b7031e2ad6cji) allows you to pass in your own managed conversation history. This parameter takes effect only when EnableRewrite is set to **true**. Otherwise, it does not take effect even if you specify it.
   */
  queryHistory?: RetrieveRequestQueryHistory[];
  /**
   * @remarks
   * The reranking configuration.
   */
  rerank?: RetrieveRequestRerank[];
  /**
   * @remarks
   * The similarity threshold. This threshold specifies the minimum similarity score allowed for recalled text chunks and is used to filter the text chunks returned by the ranking model. Only text chunks with a score greater than this value are recalled. Valid values: 0.01 to 1.00. This parameter has a higher priority than the similarity threshold configured for the knowledge base.
   * 
   * If no specific value is specified, the similarity threshold configured for the knowledge base is used by default.
   * 
   * @example
   * 0.20
   */
  rerankMinScore?: number;
  /**
   * @remarks
   * The top N text chunks to return after reranking. Valid values: 1 to 20. Default value: 5.
   * 
   * @example
   * 5
   */
  rerankTopN?: number;
  /**
   * @remarks
   * The multi-turn conversation rewriting configuration.
   */
  rewrite?: RetrieveRequestRewrite[];
  /**
   * @remarks
   * Specifies whether to save the historical text chunk recall test data. Valid values:
   * - true: Save.
   * - false: Do not save.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  saveRetrieverHistory?: boolean;
  /**
   * @remarks
   * The personalized retrieval conditions, such as tags, configured by using SearchFilter to filter semantic retrieval results and exclude information irrelevant to the query.
   * The filtering logic takes effect when the is_displayed_chunk_content parameter is set to true. For more information, see [Knowledge base SearchFilters](https://help.aliyun.com/document_detail/2869641.html).
   */
  searchFilters?: { [key: string]: string }[];
  /**
   * @remarks
   * The top K value for keyword retrieval. The system retrieves chunks from the knowledge base that are an exact match for the keywords in the input text. This helps you filter out irrelevant text chunks and provides more accurate results.
   * Valid values: 0 to 100.
   * The sum of DenseSimilarityTopK and SparseSimilarityTopK must be less than or equal to 200.
   * 
   * Default value: 100.
   * 
   * @example
   * 100
   */
  sparseSimilarityTopK?: number;
  static names(): { [key: string]: string } {
    return {
      denseSimilarityTopK: 'DenseSimilarityTopK',
      enableReranking: 'EnableReranking',
      enableRewrite: 'EnableRewrite',
      extra: 'Extra',
      images: 'Images',
      indexId: 'IndexId',
      query: 'Query',
      queryHistory: 'QueryHistory',
      rerank: 'Rerank',
      rerankMinScore: 'RerankMinScore',
      rerankTopN: 'RerankTopN',
      rewrite: 'Rewrite',
      saveRetrieverHistory: 'SaveRetrieverHistory',
      searchFilters: 'SearchFilters',
      sparseSimilarityTopK: 'SparseSimilarityTopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      denseSimilarityTopK: 'number',
      enableReranking: 'boolean',
      enableRewrite: 'boolean',
      extra: RetrieveRequestExtra,
      images: { 'type': 'array', 'itemType': 'string' },
      indexId: 'string',
      query: 'string',
      queryHistory: { 'type': 'array', 'itemType': RetrieveRequestQueryHistory },
      rerank: { 'type': 'array', 'itemType': RetrieveRequestRerank },
      rerankMinScore: 'number',
      rerankTopN: 'number',
      rewrite: { 'type': 'array', 'itemType': RetrieveRequestRewrite },
      saveRetrieverHistory: 'boolean',
      searchFilters: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      sparseSimilarityTopK: 'number',
    };
  }

  validate() {
    if(this.extra && typeof (this.extra as any).validate === 'function') {
      (this.extra as any).validate();
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.queryHistory)) {
      $dara.Model.validateArray(this.queryHistory);
    }
    if(Array.isArray(this.rerank)) {
      $dara.Model.validateArray(this.rerank);
    }
    if(Array.isArray(this.rewrite)) {
      $dara.Model.validateArray(this.rewrite);
    }
    if(Array.isArray(this.searchFilters)) {
      $dara.Model.validateArray(this.searchFilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

