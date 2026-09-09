// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSessionsResponseBodyJsonRpcResponseResultAgentSessionsMetaSessionTagList extends $dara.Model {
  /**
   * @remarks
   * The session tag. You can filter sessions based on session tags. For example, if you use a fixed RAM user to call OpenAPI but the calling system has its own account system, you can filter the session list based on an account ID. In this case, set this parameter to the account ID of the calling system.
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
   * The session source.
   * 
   * @example
   * openapi_sdk
   */
  sessionSource?: string;
  /**
   * @remarks
   * The session connection status.
   * 
   * @example
   * * NORMAL: Stateless session
   * * INIT: Initialization state
   * * RUNNING: Running
   * * RELEASED: Released state
   */
  sessionStatus?: string;
  /**
   * @remarks
   * The list of session tags.
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
   * The extended session information from DataWorks, which is not part of the ACP standard protocol.
   */
  meta?: ListAgentSessionsResponseBodyJsonRpcResponseResultAgentSessionsMeta;
  /**
   * @remarks
   * The time when the session was created.
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
   * The unique ID of the session.
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
   * The time when the session was last modified.
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
   * The session list.
   */
  agentSessions?: ListAgentSessionsResponseBodyJsonRpcResponseResultAgentSessions[];
  /**
   * @remarks
   * The actual number of entries per page.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page. Set this parameter to 1 for the first page.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of matched sessions.
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
   * The ID passed in by the requester. The value is returned as-is.
   * 
   * @example
   * 29d9a29c-a284-48c1-9eaa-4a42c7c616d5
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC version. Fixed value: 2.0.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The paginated result set of the session query.
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
   * Id of the request
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

