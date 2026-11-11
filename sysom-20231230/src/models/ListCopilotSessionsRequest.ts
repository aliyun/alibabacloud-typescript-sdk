// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCopilotSessionsRequest extends $dara.Model {
  /**
   * @remarks
   * The Agent ID. If this parameter is not specified, all Agent sessions of the current user are queried.
   * 
   * @example
   * sysagent
   */
  agentId?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Default value: 50. Valid values: 1 to 1000.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. Do not specify this parameter for the first query.
   * 
   * @example
   * 50
   */
  nextToken?: string;
  /**
   * @remarks
   * The scheduled task ID, which must be a positive integer. If this parameter is specified, sessionType must be omitted or set to cron.
   * 
   * @example
   * 42
   */
  scheduledTaskId?: number;
  /**
   * @remarks
   * The session source. If this parameter is not specified, sessions are not filtered by source.
   * 
   * @example
   * openapi
   */
  sessionType?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      scheduledTaskId: 'scheduledTaskId',
      sessionType: 'sessionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      scheduledTaskId: 'number',
      sessionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

