// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMemoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * 972772996913709056
   */
  agentId?: string;
  /**
   * @remarks
   * The app ID assigned by the merchant.
   * 
   * @example
   * mm_480d961a1b5e4efe84603f4cbc0f
   */
  appId?: string;
  /**
   * @remarks
   * The filter conditions.
   */
  filters?: { [key: string]: any };
  /**
   * @remarks
   * The query text.
   * 
   * @example
   * What I like
   */
  query?: string;
  /**
   * @remarks
   * Specifies whether to rerank the search results.
   * 
   * @example
   * true
   */
  rerank?: boolean;
  /**
   * @example
   * reranker,llm_rank
   */
  retrievalOption?: string;
  /**
   * @remarks
   * The run ID.
   * 
   * @example
   * test_session_001
   */
  runId?: string;
  /**
   * @remarks
   * The search type.
   * 
   * @example
   * experience
   */
  searchType?: string;
  /**
   * @remarks
   * The similarity threshold.
   * 
   * @example
   * 0.3
   */
  threshold?: number;
  /**
   * @remarks
   * The number of top-K results to return.
   * 
   * @example
   * 1
   */
  topK?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * test_session_001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      appId: 'appId',
      filters: 'filters',
      query: 'query',
      rerank: 'rerank',
      retrievalOption: 'retrievalOption',
      runId: 'runId',
      searchType: 'searchType',
      threshold: 'threshold',
      topK: 'topK',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      appId: 'string',
      filters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      query: 'string',
      rerank: 'boolean',
      retrievalOption: 'string',
      runId: 'string',
      searchType: 'string',
      threshold: 'number',
      topK: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(this.filters) {
      $dara.Model.validateMap(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

