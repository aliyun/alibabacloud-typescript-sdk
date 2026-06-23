// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSessionsResponseBodyJsonRpcResponseResultAgentSessionsMetaSessionTagList extends $dara.Model {
  /**
   * @remarks
   * A tag for the session, which can be used for filtering. For example, if your application has its own user accounts but calls the API through a single service account, you can pass your application\\"s user ID as a tag. This allows you to filter sessions by your internal users.
   * 
   * @example
   * user_123456
   */
  sessionTagCode?: string;
  static names(): { [key: string]: string } {
    return {
      sessionTagCode: 'SessionTagCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionTagCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSessionsResponseBodyJsonRpcResponseResultAgentSessionsMeta extends $dara.Model {
  /**
   * @remarks
   * The source of the session.
   * 
   * @example
   * openapi_sdk
   */
  sessionSource?: string;
  /**
   * @remarks
   * The session status.
   * 
   * @example
   * * NORMAL: 无状态的session
   * * INIT: 初始化状态
   * * RUNNING: 运行中
   * * RELEASED: 释放状态
   */
  sessionStatus?: string;
  /**
   * @remarks
   * A list of session tags.
   */
  sessionTagList?: ListAgentSessionsResponseBodyJsonRpcResponseResultAgentSessionsMetaSessionTagList[];
  static names(): { [key: string]: string } {
    return {
      sessionSource: 'SessionSource',
      sessionStatus: 'SessionStatus',
      sessionTagList: 'SessionTagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionSource: 'string',
      sessionStatus: 'string',
      sessionTagList: { 'type': 'array', 'itemType': ListAgentSessionsResponseBodyJsonRpcResponseResultAgentSessionsMetaSessionTagList },
    };
  }

  validate() {
    if(Array.isArray(this.sessionTagList)) {
      $dara.Model.validateArray(this.sessionTagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSessionsResponseBodyJsonRpcResponseResultAgentSessions extends $dara.Model {
  /**
   * @remarks
   * DataWorks-specific session metadata. This field is not part of the standard ACP protocol.
   */
  meta?: ListAgentSessionsResponseBodyJsonRpcResponseResultAgentSessionsMeta;
  /**
   * @remarks
   * The time the session was created.
   * 
   * @example
   * 123456789
   */
  sessionCreatedAt?: number;
  /**
   * @remarks
   * The session description.
   * 
   * @example
   * Sales trend analysis
   */
  sessionDescription?: string;
  /**
   * @remarks
   * The unique session ID.
   * 
   * @example
   * sess_0f12abc34
   */
  sessionId?: string;
  /**
   * @remarks
   * The session title.
   * 
   * @example
   * Sales analysis for the last 30 days
   */
  sessionTitle?: string;
  /**
   * @remarks
   * The time the session was last modified.
   * 
   * @example
   * 123456789
   */
  sessionUpdatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      meta: 'Meta',
      sessionCreatedAt: 'SessionCreatedAt',
      sessionDescription: 'SessionDescription',
      sessionId: 'SessionId',
      sessionTitle: 'SessionTitle',
      sessionUpdatedAt: 'SessionUpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: ListAgentSessionsResponseBodyJsonRpcResponseResultAgentSessionsMeta,
      sessionCreatedAt: 'number',
      sessionDescription: 'string',
      sessionId: 'string',
      sessionTitle: 'string',
      sessionUpdatedAt: 'number',
    };
  }

  validate() {
    if(this.meta && typeof (this.meta as any).validate === 'function') {
      (this.meta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSessionsResponseBodyJsonRpcResponseResult extends $dara.Model {
  /**
   * @remarks
   * A list of sessions.
   */
  agentSessions?: ListAgentSessionsResponseBodyJsonRpcResponseResultAgentSessions[];
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. To retrieve the first page, use the value `1`.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of sessions that match the query.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      agentSessions: 'AgentSessions',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSessions: { 'type': 'array', 'itemType': ListAgentSessionsResponseBodyJsonRpcResponseResultAgentSessions },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.agentSessions)) {
      $dara.Model.validateArray(this.agentSessions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSessionsResponseBodyJsonRpcResponse extends $dara.Model {
  /**
   * @remarks
   * The ID provided in the request. This value is returned unmodified.
   * 
   * @example
   * 29d9a29c-a284-48c1-9eaa-4a42c7c616d5
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC version. The value is always `2.0`.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The paginated results of the session query.
   */
  result?: ListAgentSessionsResponseBodyJsonRpcResponseResult;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      jsonrpc: 'Jsonrpc',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      jsonrpc: 'string',
      result: ListAgentSessionsResponseBodyJsonRpcResponseResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSessionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC response.
   */
  jsonRpcResponse?: ListAgentSessionsResponseBodyJsonRpcResponse;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 50C5A9F7-B5BD-58B2-9EB8-ADFFA9E6A56F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jsonRpcResponse: 'JsonRpcResponse',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonRpcResponse: ListAgentSessionsResponseBodyJsonRpcResponse,
      requestId: 'string',
    };
  }

  validate() {
    if(this.jsonRpcResponse && typeof (this.jsonRpcResponse as any).validate === 'function') {
      (this.jsonRpcResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

