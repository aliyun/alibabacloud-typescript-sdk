// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCopilotSessionMessagesRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID retained for compatibility with historical calls. This parameter can be omitted. Currently, the entire session is queried by sessionId, and this parameter does not change the query scope of historical events.
   * 
   * @example
   * sysagent
   */
  agentId?: string;
  /**
   * @remarks
   * The page size retained for compatibility with historical calls. Default value: 50. Valid values: 1 to 200. For new integrations, we recommend using maxResults. If both parameters are specified, maxResults takes precedence.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The page size. Default value: 50. Valid values: 1 to 1000.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page. Do not specify this parameter for the first request. For subsequent requests, use the nextToken value from the previous response. Clear this value when you change the filter conditions.
   * 
   * @example
   * 50
   */
  nextToken?: string;
  /**
   * @remarks
   * The pagination offset retained for compatibility with historical calls. Default value: 0. For new integrations, we recommend using nextToken. Do not specify this parameter and nextToken at the same time.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s001
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      limit: 'limit',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      offset: 'offset',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      limit: 'number',
      maxResults: 'number',
      nextToken: 'string',
      offset: 'number',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

