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
   * The content of the message for the specified `role`.
   * 
   * @example
   * 代表一段文本。
   */
  content?: string;
  /**
   * @remarks
   * The role of the entity that sent the message.
   * 
   * Valid values:
   * 
   * - `user`: Indicates that the `content` is from the end user.
   * 
   * - `assistant`: Indicates that the `content` is a response from the Model Studio application.
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
   * The reranking model to use. Specifying a model here overrides the default model selected when the knowledge base was created. Valid values:
   * 
   * <props="china">
   * 
   * - `qwen3-rerank-hybrid`: Performs reranking by using the qwen3-rerank (hybrid) model.
   * 
   * - `qwen3-rerank`: Performs reranking by using the qwen3-rerank model.
   * 
   * - `gte-rerank-hybrid`: Performs reranking by using the gte-rerank (hybrid) model.
   * 
   * - `gte-rerank`: Performs reranking by using the gte-rerank model.
   * 
   * 
   * 
   * <props="intl">
   * 
   * - `gte-rerank-hybrid`: Performs reranking by using the gte-rerank (hybrid) model.
   * 
   * - `gte-rerank`: Performs reranking by using the gte-rerank model.
   * 
   * 
   * 
   * If you do not specify this parameter, the model configured for the knowledge base is used.
   * 
   * <props="china">
   * 
   * > Use `qwen3-rerank` for semantic ranking only. We recommend `qwen3-rerank-hybrid` if you require both semantic ranking and text matching features for higher relevance.
   * 
   * 
   * 
   * <props="intl">
   * 
   * > Use `gte-rerank` for semantic ranking only. We recommend `gte-rerank-hybrid` if you require both semantic ranking and text matching features for higher relevance.
   * 
   * 
   * 
   * <props="china">
   * 
   * > The `gte-rerank-hybrid` and `gte-rerank` models are no longer updated and are not recommended for use.
   * 
   * @example
   * gte-rerank-hybrid
   */
  modelName?: string;
  /**
   * @remarks
   * <props="intl">
   * 
   * This parameter is not yet available. Do not specify a value for it.
   * 
   * 
   * 
   * <props="china">
   * 
   * A natural language instruction to fine-tune the behavior of the reranking model.
   * 
   * >Notice: 
   * 
   * This parameter takes effect only when `RerankMode` is set to `custom`.
   */
  rerankInstruct?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * Specifies the instruction intervention mode for the reranking model. This mode determines the model\\"s scoring preference.
   * 
   * **Valid values:**
   * 
   * - `qa`: (Default) Q\\&A mode. The model assigns higher scores to candidates that directly answer the query. Recommended for Q\\&A scenarios.
   * 
   * - `similar`: Similarity mode. The model assigns higher scores to candidates with high content similarity to the query. Recommended for match-based retrieval scenarios.
   * 
   * - `custom`: Custom mode. The model\\"s ranking behavior is determined by the instructions in the `RerankInstruct` parameter.
   * 
   * 
   * 
   * <props="intl">
   * 
   * This parameter is not yet available. Do not specify a value for it.
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
   * Specifies the model for conversational query rewriting, which automatically rewrites the original query based on the conversation context to improve retrieval results. Valid value:
   * 
   * - `conv-rewrite-qwen-1.8b`: The only model currently supported for this feature.
   * 
   * If this parameter is not specified, `conv-rewrite-qwen-1.8b` is used by default.
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
   * The number of top-K similar text chunks to retrieve using vector retrieval. This is achieved by generating a vector representation of the query and searching the knowledge base for the K text chunks with the most similar vectors. The value must be an integer from 0 to 100. The sum of `DenseSimilarityTopK` and `SparseSimilarityTopK` must not exceed 200.
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
   * 
   * - `true`: Enables reranking.
   * 
   * - `false`: Disables reranking.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  enableReranking?: boolean;
  /**
   * @remarks
   * Specifies whether to enable <props="china">[conversational query rewriting](https://help.aliyun.com/model-studio/use-cases/rag-optimization#b7031e2ad6cji)<props="intl">[conversational query rewriting](https://www.alibabacloud.com/help/model-studio/use-cases/rag-optimization#b7031e2ad6cji).
   * Valid values:
   * 
   * - `true`: Enables conversational query rewriting.
   * 
   * - `false`: Disables conversational query rewriting.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  enableRewrite?: boolean;
  extra?: RetrieveRequestExtra;
  /**
   * @remarks
   * The URLs of images to include in the query.
   */
  images?: string[];
  /**
   * @remarks
   * The ID of the knowledge base. This is the `Data.Id` value returned by the `CreateIndex` operation.
   * 
   * > - Ensure the specified knowledge base exists and has not been deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * 5pwe0mxxxx
   */
  indexId?: string;
  /**
   * @remarks
   * The query, which is the original user prompt. There are no limits on the length of the query.
   * 
   * @example
   * 阿里云百炼平台介绍
   */
  query?: string;
  /**
   * @remarks
   * The conversation history, used for <props="china">[conversational query rewriting](https://help.aliyun.com/model-studio/use-cases/rag-optimization#b7031e2ad6cji)<props="intl">[conversational query rewriting](https://www.alibabacloud.com/help/model-studio/use-cases/rag-optimization#b7031e2ad6cji). This parameter is effective only when `EnableRewrite` is set to `true`.
   */
  queryHistory?: RetrieveRequestQueryHistory[];
  /**
   * @remarks
   * The reranking configurations.
   */
  rerank?: RetrieveRequestRerank[];
  /**
   * @remarks
   * The similarity threshold for reranking. Only text chunks with a similarity score greater than this value are returned. The value must be between 0.01 and 1.00, inclusive. This parameter overrides the similarity threshold setting of the knowledge base.
   * 
   * If not specified, the threshold configured for the knowledge base is used.
   * 
   * @example
   * 0.20
   */
  rerankMinScore?: number;
  /**
   * @remarks
   * The number of top-ranked text chunks to return after reranking. The value must be an integer from 1 to 20. Default value: 5.
   * 
   * @example
   * 5
   */
  rerankTopN?: number;
  /**
   * @remarks
   * Configuration for conversational query rewriting.
   */
  rewrite?: RetrieveRequestRewrite[];
  /**
   * @remarks
   * Specifies whether to save the retrieval history for testing purposes. Valid values:
   * 
   * - `true`: Saves the retrieval history.
   * 
   * - `false`: Does not save the retrieval history.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  saveRetrieverHistory?: boolean;
  /**
   * @remarks
   * Specifies custom retrieval conditions, such as tags, to filter semantic retrieval results and exclude irrelevant information.
   * The filtering logic is applied only when the `is_displayed_chunk_content` parameter is set to `true`. For more information, see [SearchFilters for a knowledge base](https://help.aliyun.com/document_detail/2869641.html).
   */
  searchFilters?: { [key: string]: string }[];
  /**
   * @remarks
   * The number of top-K text chunks to retrieve using keyword retrieval. This feature finds text chunks in the knowledge base that exactly match the keywords in the query. It helps filter out irrelevant text chunks and provide more accurate results.
   * The value must be an integer from 0 to 100.
   * The sum of `DenseSimilarityTopK` and `SparseSimilarityTopK` must not exceed 200.
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

