// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSessionsRequestParams extends $dara.Model {
  /**
   * @remarks
   * The exact filter for the **agent name**. You must specify at least one of this parameter and SessionSourceList.
   * 
   * @example
   * chat_cli_chatbi
   */
  agentName?: string;
  /**
   * @remarks
   * Specifies whether to return only archived sessions. Valid values:
   * - true: Only archived sessions are returned.
   * - false or not specified: Only unarchived sessions are returned.
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
   * The exact match for the session ID.
   * 
   * @example
   * sess_0f12abc34
   */
  sessionId?: string;
  /**
   * @remarks
   * The filter for the **session source list**. You must specify at least one of this parameter and AgentName.
   */
  sessionSourceList?: string[];
  /**
   * @remarks
   * The fuzzy filter for the session title.
   * 
   * @example
   * Sales in the last 30 days
   */
  sessionTitle?: string;
  /**
   * @remarks
   * The filter for the session tag code list.
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
   * The ID passed by the requester, which is returned as is.
   * 
   * @example
   * 676303114031776
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC version. Fixed to 2.0.
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

