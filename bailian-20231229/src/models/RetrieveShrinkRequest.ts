// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveShrinkRequest extends $dara.Model {
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
  extraShrink?: string;
  /**
   * @remarks
   * The URLs of the images passed in the query.
   */
  imagesShrink?: string;
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
  queryHistoryShrink?: string;
  /**
   * @remarks
   * The reranking configuration.
   */
  rerankShrink?: string;
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
  rewriteShrink?: string;
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
  searchFiltersShrink?: string;
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

