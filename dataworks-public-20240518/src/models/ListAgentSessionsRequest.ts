// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSessionsRequestParams extends $dara.Model {
  /**
   * @remarks
   * Filters sessions by the **agent name**. You must specify at least one of this parameter and `SessionSourceList`.
   * 
   * @example
   * chat_cli_chatbi
   */
  agentName?: string;
  /**
   * @remarks
   * The maximum number of results to return per page. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results. Set this parameter to `1` to retrieve the first page of results.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * Filters sessions by session ID.
   * 
   * @example
   * sess_0f12abc34
   */
  sessionId?: string;
  /**
   * @remarks
   * Filters sessions by the **list of session sources**. You must specify at least one of this parameter and `AgentName`.
   */
  sessionSourceList?: string[];
  /**
   * @remarks
   * Filters sessions by session title using a fuzzy match.
   * 
   * @example
   * Sales in the last 30 days
   */
  sessionTitle?: string;
  /**
   * @remarks
   * Filters sessions by a list of session tag codes.
   */
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
   * @remarks
   * The ID provided by the caller. The value is returned as-is.
   * 
   * @example
   * 676303114031776
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC version. The value must be `2.0`.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * Business parameters.
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

