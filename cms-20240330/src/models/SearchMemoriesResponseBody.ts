// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMemoriesResponseBodyRelations extends $dara.Model {
  /**
   * @remarks
   * Destination
   * 
   * @example
   * test
   */
  destination?: string;
  /**
   * @remarks
   * Relationship
   * 
   * @example
   * test
   */
  relationship?: string;
  /**
   * @remarks
   * Source
   * 
   * @example
   * todo_open_dingoj06pvqfeayy3lkr
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      destination: 'destination',
      relationship: 'relationship',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destination: 'string',
      relationship: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMemoriesResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * Actor ID
   * 
   * @example
   * test_session_001
   */
  actorId?: string;
  /**
   * @remarks
   * Application agent ID
   * 
   * @example
   * 972772996913709056
   */
  agentId?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 1762773128968
   */
  createdAt?: string;
  /**
   * @remarks
   * Memory hash value
   * 
   * @example
   * d791bf27236c5532056a13279baad3517042bb8d5b1bdb02e7871fa632debffe
   */
  hash?: string;
  /**
   * @remarks
   * Memory ID
   * 
   * @example
   * 019ca1e5-7307-7d50-b943-5e628326a8ed
   */
  id?: string;
  /**
   * @remarks
   * Memory content
   * 
   * @example
   * My name is Zhang San and I live in Hangzhou.
   */
  memory?: string;
  /**
   * @remarks
   * Metadata
   * 
   * @example
   * {"sessionId":"test_session_001"}
   */
  metadata?: string;
  /**
   * @remarks
   * Message sender role
   * 
   * @example
   * user
   */
  role?: string;
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
   * Similarity score
   * 
   * @example
   * 13.21
   */
  score?: number;
  /**
   * @remarks
   * Last update time
   * 
   * @example
   * 1764902557784
   */
  updatedAt?: string;
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
      actorId: 'actorId',
      agentId: 'agentId',
      createdAt: 'createdAt',
      hash: 'hash',
      id: 'id',
      memory: 'memory',
      metadata: 'metadata',
      role: 'role',
      runId: 'runId',
      score: 'score',
      updatedAt: 'updatedAt',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actorId: 'string',
      agentId: 'string',
      createdAt: 'string',
      hash: 'string',
      id: 'string',
      memory: 'string',
      metadata: 'string',
      role: 'string',
      runId: 'string',
      score: 'number',
      updatedAt: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMemoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Relations
   */
  relations?: SearchMemoriesResponseBodyRelations[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 0CEC5375-C554-562B-A65F-9A629907C1F0
   */
  requestId?: string;
  /**
   * @remarks
   * Return values
   */
  results?: SearchMemoriesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      relations: 'relations',
      requestId: 'requestId',
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relations: { 'type': 'array', 'itemType': SearchMemoriesResponseBodyRelations },
      requestId: 'string',
      results: { 'type': 'array', 'itemType': SearchMemoriesResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.relations)) {
      $dara.Model.validateArray(this.relations);
    }
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

