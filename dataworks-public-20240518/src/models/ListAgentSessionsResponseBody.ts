// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSessionsResponseBodyJsonRpcResponseResultAgentSessionsMetaSessionTagList extends $dara.Model {
  /**
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
   * @example
   * openapi_sdk
   */
  sessionSource?: string;
  sessionStatus?: string;
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
  meta?: ListAgentSessionsResponseBodyJsonRpcResponseResultAgentSessionsMeta;
  /**
   * @example
   * 123456789
   */
  sessionCreatedAt?: number;
  sessionDescription?: string;
  /**
   * @example
   * sess_0f12abc34
   */
  sessionId?: string;
  sessionTitle?: string;
  /**
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
  agentSessions?: ListAgentSessionsResponseBodyJsonRpcResponseResultAgentSessions[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * 1
   */
  nextToken?: string;
  /**
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
   * @example
   * 29d9a29c-a284-48c1-9eaa-4a42c7c616d5
   */
  id?: string;
  jsonrpc?: string;
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

