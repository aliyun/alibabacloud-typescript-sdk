// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RetrieveRequestQueryHistory } from "./RetrieveRequestQueryHistory";
import { RetrieveRequestRerank } from "./RetrieveRequestRerank";
import { RetrieveRequestRewrite } from "./RetrieveRequestRewrite";


export class RetrieveRequest extends $dara.Model {
  /**
   * @remarks
   * Vector retrieval top K. After generating vectors based on input text, the top K chunks in the knowledge base that are most similar to the vector representation of the input text are retrieved. Valid values: 0 to 100. The sum of the `DenseSimilarityTopK` and `SparseSimilarityTopK` parameters must be less than or equal to 200.
   * 
   * Default value: 100.
   * 
   * @example
   * 100
   */
  denseSimilarityTopK?: number;
  /**
   * @remarks
   * Specifies whether to enable reranking. For more information, see [Create a knowledge base](https://www.alibabacloud.com/help/en/model-studio/user-guide/rag-knowledge-base). Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  enableReranking?: boolean;
  /**
   * @remarks
   * Specifies whether to enable multi-round conversation rewriting. For more information, see [Create a knowledge base](https://www.alibabacloud.com/help/en/model-studio/user-guide/rag-knowledge-base). Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableRewrite?: boolean;
  images?: string[];
  /**
   * @remarks
   * The primary key ID of the knowledge base, which is the `Data.Id` parameter returned by the [CreateIndex](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 5pwe0m2g6t
   */
  indexId?: string;
  /**
   * @remarks
   * The input query prompt. The length and characters of the query are not limited.
   */
  query?: string;
  queryHistory?: RetrieveRequestQueryHistory[];
  /**
   * @remarks
   * Ranking configurations.
   */
  rerank?: RetrieveRequestRerank[];
  /**
   * @remarks
   * Similarity Threshold The lowest similarity score of chunks that can be returned. This parameter is used to filter text chunks returned by the rank model. For more information, see [Create a knowledge base](https://www.alibabacloud.com/help/en/model-studio/user-guide/rag-knowledge-base). Valid values: [0.01-1.00]. The priority of this parameter is greater than the similarity threshold configured for the knowledge base.
   * 
   * By default, this parameter is left empty. In this case, the similarity threshold of the knowledge base is used.
   * 
   * @example
   * 0.20
   */
  rerankMinScore?: number;
  /**
   * @remarks
   * The top N return data after reranking. Valid values: 1 to 20. Default value: 5.
   * 
   * @example
   * 5
   */
  rerankTopN?: number;
  /**
   * @remarks
   * Conversation rewriting configurations.
   */
  rewrite?: RetrieveRequestRewrite[];
  /**
   * @remarks
   * Specifies whether to save the retrieve test history. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  saveRetrieverHistory?: boolean;
  /**
   * @remarks
   * Specifies complex filter conditions. For more information about the syntax of SearchFilters, see the SearchFilter syntax section of this topic.
   */
  searchFilters?: { [key: string]: string }[];
  /**
   * @remarks
   * The top K of keyword retrieval. Chunks that exactly match the keywords of the input text are retrieved from the knowledge base. This filters out irrelevant chunks and boosts accuracy. Valid values: 0 to 100. The sum of the `DenseSimilarityTopK` and `SparseSimilarityTopK` parameters must be less than or equal to 200.
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

