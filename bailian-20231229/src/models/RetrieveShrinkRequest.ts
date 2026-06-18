// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveShrinkRequest extends $dara.Model {
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
  extraShrink?: string;
  /**
   * @remarks
   * The URLs of images to include in the query.
   */
  imagesShrink?: string;
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
  queryHistoryShrink?: string;
  /**
   * @remarks
   * The reranking configurations.
   */
  rerankShrink?: string;
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
  rewriteShrink?: string;
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
  searchFiltersShrink?: string;
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
      extraShrink: 'Extra',
      imagesShrink: 'Images',
      indexId: 'IndexId',
      query: 'Query',
      queryHistoryShrink: 'QueryHistory',
      rerankShrink: 'Rerank',
      rerankMinScore: 'RerankMinScore',
      rerankTopN: 'RerankTopN',
      rewriteShrink: 'Rewrite',
      saveRetrieverHistory: 'SaveRetrieverHistory',
      searchFiltersShrink: 'SearchFilters',
      sparseSimilarityTopK: 'SparseSimilarityTopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      denseSimilarityTopK: 'number',
      enableReranking: 'boolean',
      enableRewrite: 'boolean',
      extraShrink: 'string',
      imagesShrink: 'string',
      indexId: 'string',
      query: 'string',
      queryHistoryShrink: 'string',
      rerankShrink: 'string',
      rerankMinScore: 'number',
      rerankTopN: 'number',
      rewriteShrink: 'string',
      saveRetrieverHistory: 'boolean',
      searchFiltersShrink: 'string',
      sparseSimilarityTopK: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

