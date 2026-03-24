// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMemoriesRequest extends $dara.Model {
  /**
   * @remarks
   * Agent ID
   * 
   * @example
   * 972772996913709056
   */
  agentId?: string;
  /**
   * @remarks
   * App key assigned by the merchant
   * 
   * @example
   * mm_480d961a1b5e4efe84603f4cbc0f
   */
  appId?: string;
  /**
   * @remarks
   * Resource metadata
   * 
   * @example
   * {"sessionId":"test_session_001"}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * Query text
   * 
   * @example
   * What I like
   */
  query?: string;
  /**
   * @remarks
   * Rerank the search results.
   * 
   * @example
   * true
   */
  rerank?: boolean;
  /**
   * @remarks
   * Run ID
   * 
   * @example
   * test_session_001
   */
  runId?: string;
  /**
   * @remarks
   * Number of top results to return
   * 
   * @example
   * 1
   */
  topK?: number;
  /**
   * @remarks
   * User ID
   * 
   * @example
   * test_session_001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      appId: 'appId',
      metadata: 'metadata',
      query: 'query',
      rerank: 'rerank',
      runId: 'runId',
      topK: 'topK',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      appId: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      query: 'string',
      rerank: 'boolean',
      runId: 'string',
      topK: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

