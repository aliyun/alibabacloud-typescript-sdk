// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentsResponseBodyJsonRpcResponseResultAgents extends $dara.Model {
  /**
   * @example
   * chat_cli_chatbi
   */
  agentName?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentsResponseBodyJsonRpcResponseResult extends $dara.Model {
  agents?: ListAgentsResponseBodyJsonRpcResponseResultAgents[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * 2
   */
  nextToken?: string;
  /**
   * @example
   * 27
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      agents: 'Agents',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agents: { 'type': 'array', 'itemType': ListAgentsResponseBodyJsonRpcResponseResultAgents },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.agents)) {
      $dara.Model.validateArray(this.agents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentsResponseBodyJsonRpcResponse extends $dara.Model {
  /**
   * @example
   * 70623e38-a889-4192-930a-752ffdd75f48
   */
  id?: string;
  jsonrpc?: string;
  result?: ListAgentsResponseBodyJsonRpcResponseResult;
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
      result: ListAgentsResponseBodyJsonRpcResponseResult,
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

export class ListAgentsResponseBody extends $dara.Model {
  jsonRpcResponse?: ListAgentsResponseBodyJsonRpcResponse;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4003B739-C33C-5297-B810-0490EEE5A767
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
      jsonRpcResponse: ListAgentsResponseBodyJsonRpcResponse,
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

