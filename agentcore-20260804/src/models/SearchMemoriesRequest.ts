// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMemoriesRequestBodyScope extends $dara.Model {
  /**
   * @remarks
   * The agent ID. The length is limited to 1 to 128 UTF-8 bytes. The value cannot contain a forward slash (/) or an asterisk (*). This field is not returned if the memory is not associated with an agent ID.
   * 
   * @example
   * agent-001
   */
  agentId?: string;
  /**
   * @remarks
   * The session ID. The length is limited to 1 to 128 UTF-8 bytes. The value cannot contain a forward slash (/) or an asterisk (*). This field is not returned if the memory is not associated with a session ID.
   * 
   * @example
   * session-001
   */
  sessionId?: string;
  /**
   * @remarks
   * The user ID. The length is limited to 1 to 128 UTF-8 bytes. The value cannot contain a forward slash (/) or an asterisk (*). This field is not returned if the memory is not associated with a user ID.
   * 
   * @example
   * user-001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      sessionId: 'sessionId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      sessionId: 'string',
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

export class SearchMemoriesRequestBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable reranking. Default value: true.
   */
  enableRerank?: boolean;
  /**
   * @remarks
   * The string key-value metadata for exact matching. You can specify up to 16 keys. The maximum length of a key is 64 characters, and the maximum length of a value is 1,024 characters.
   */
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * The minimum relevance score. Valid values: 0 to 1. Default value: 0.2. If both minScore and minSimilarity are specified, the AND logic is applied for filtering.
   * 
   * @example
   * 0.2
   */
  minScore?: number;
  /**
   * @remarks
   * The minimum similarity. Valid values: 0 to 1. Default value: 0.3. If both minSimilarity and minScore are specified, the AND logic is applied for filtering.
   * 
   * @example
   * 0.3
   */
  minSimilarity?: number;
  /**
   * @remarks
   * The query text. The maximum length is 8,192 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * What sports does the user like?
   */
  query?: string;
  /**
   * @remarks
   * The search scope. UserId, AgentId, and SessionId are all optional.
   */
  scope?: SearchMemoriesRequestBodyScope;
  /**
   * @remarks
   * The number of results to return.
   * 
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      enableRerank: 'enableRerank',
      metadata: 'metadata',
      minScore: 'minScore',
      minSimilarity: 'minSimilarity',
      query: 'query',
      scope: 'scope',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableRerank: 'boolean',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      minScore: 'number',
      minSimilarity: 'number',
      query: 'string',
      scope: SearchMemoriesRequestBodyScope,
      topK: 'number',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(this.scope && typeof (this.scope as any).validate === 'function') {
      (this.scope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMemoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The semantic search request.
   * 
   * This parameter is required.
   */
  body?: SearchMemoriesRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: SearchMemoriesRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

