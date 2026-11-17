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
   * The business team ID defined by the caller. If provided, it cannot be empty and can be up to 128 UTF-8 bytes in length.
   * 
   * @example
   * team-001
   */
  teamId?: string;
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
      teamId: 'teamId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      sessionId: 'string',
      teamId: 'string',
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
   * The string key-value metadata for exact matching. A maximum of 16 keys are supported. Each key can be up to 64 characters in length, and each value can be up to 1,024 characters in length.
   * 
   * @example
   * {"topic":"hiking"}
   */
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * The minimum relevance score. Default value: 0.2. Valid values: 0 to 1. If both minScore and minSimilarity are specified, the results are filtered based on the AND logic.
   * 
   * @example
   * 0.2
   */
  minScore?: number;
  /**
   * @remarks
   * The minimum similarity score. Default value: 0.3. Valid values: 0 to 1. If both minSimilarity and minScore are specified, the results are filtered based on the AND logic.
   * 
   * @example
   * 0.3
   */
  minSimilarity?: number;
  /**
   * @remarks
   * The query text for retrieval, up to 8,192 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * What sports does the user like?
   */
  query?: string;
  /**
   * @remarks
   * The retrieval scope. UserId, AgentId, and SessionId are all optional.
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
  /**
   * @remarks
   * The list of memory content types. Supported types include semantic, skill, user_profile, and session_summary. If omitted or left as an empty array, no type restriction is applied.
   */
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      enableRerank: 'enableRerank',
      metadata: 'metadata',
      minScore: 'minScore',
      minSimilarity: 'minSimilarity',
      query: 'query',
      scope: 'scope',
      topK: 'topK',
      types: 'types',
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
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(this.scope && typeof (this.scope as any).validate === 'function') {
      (this.scope as any).validate();
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
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
   * The semantic retrieval request.
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

