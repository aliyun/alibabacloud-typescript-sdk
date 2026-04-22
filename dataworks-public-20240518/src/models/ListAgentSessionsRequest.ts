// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSessionsRequestParams extends $dara.Model {
  /**
   * @example
   * chat_cli_chatbi
   */
  agentName?: string;
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @example
   * sess_0f12abc34
   */
  sessionId?: string;
  sessionSourceList?: string[];
  sessionTitle?: string;
  tagList?: string[];
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      sessionId: 'SessionId',
      sessionSourceList: 'SessionSourceList',
      sessionTitle: 'SessionTitle',
      tagList: 'TagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      sessionId: 'string',
      sessionSourceList: { 'type': 'array', 'itemType': 'string' },
      sessionTitle: 'string',
      tagList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sessionSourceList)) {
      $dara.Model.validateArray(this.sessionSourceList);
    }
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSessionsRequest extends $dara.Model {
  /**
   * @example
   * 676303114031776
   */
  id?: string;
  /**
   * @example
   * 2.0
   */
  jsonrpc?: string;
  params?: ListAgentSessionsRequestParams;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      jsonrpc: 'Jsonrpc',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      jsonrpc: 'string',
      params: ListAgentSessionsRequestParams,
    };
  }

  validate() {
    if(this.params && typeof (this.params as any).validate === 'function') {
      (this.params as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

