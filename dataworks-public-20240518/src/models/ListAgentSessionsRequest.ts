// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSessionsRequestParams extends $dara.Model {
  /**
   * @remarks
   * The **agent name** for exact match filtering. You must specify at least one of this parameter and `SessionSourceList`.
   * 
   * @example
   * chat_cli_chatbi
   */
  agentName?: string;
  /**
   * @remarks
   * Specifies whether to query archived sessions. If you set this parameter to true, only archived sessions are returned. If you set this parameter to false or omit it, only unarchived sessions are returned. A value of false does not mean all sessions. To query both types of sessions, send separate requests and handle the pagination for each.
   */
  archived?: boolean;
  /**
   * @remarks
   * The number of entries per page. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page. Set this parameter to 1 for the first page.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * The session ID for exact matching.
   * 
   * @example
   * sess_0f12abc34
   */
  sessionId?: string;
  /**
   * @remarks
   * The **session source list** for filtering. You must specify at least one of this parameter and `AgentName`.
   */
  sessionSourceList?: string[];
  /**
   * @remarks
   * The session title for fuzzy match filtering.
   * 
   * @example
   * Sales in the last 30 days
   */
  sessionTitle?: string;
  /**
   * @remarks
   * The session tag code list for filtering.
   */
  tagList?: string[];
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      archived: 'Archived',
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
      archived: 'boolean',
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
   * @remarks
   * The request ID provided by the caller. This ID is returned as is in the response.
   * 
   * @example
   * 676303114031776
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC version, which is fixed to 2.0.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The business parameters.
   */
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

