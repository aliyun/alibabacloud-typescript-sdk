// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMemoriesRequest extends $dara.Model {
  /**
   * @example
   * 972772996913709056
   */
  agentId?: string;
  /**
   * @example
   * mm_480d961a1b5e4efe84603f4cbc0f
   */
  appId?: string;
  filters?: { [key: string]: any };
  /**
   * @example
   * What I like
   */
  query?: string;
  /**
   * @example
   * true
   */
  rerank?: boolean;
  /**
   * @example
   * L1
   */
  retrieveLevel?: string;
  /**
   * @example
   * test_session_001
   */
  runId?: string;
  /**
   * @example
   * experience
   */
  searchType?: string;
  /**
   * @example
   * 0.3
   */
  threshold?: number;
  /**
   * @example
   * 1
   */
  topK?: number;
  /**
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
      retrieveLevel: 'retrieveLevel',
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
      retrieveLevel: 'string',
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

