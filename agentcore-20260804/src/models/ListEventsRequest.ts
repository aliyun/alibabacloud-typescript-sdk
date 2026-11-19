// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The exact filter for the business agent.
   * 
   * @example
   * agent-001
   */
  agentId?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Default value: 200. Valid values: 1 to 500.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token used to continue reading the same query.
   * 
   * @example
   * eyJvZmZzZXQiOjIwMH0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the session.
   * 
   * This parameter is required.
   * 
   * @example
   * session-001
   */
  sessionId?: string;
  /**
   * @remarks
   * The exact filter for the business team.
   * 
   * @example
   * team-001
   */
  teamId?: string;
  /**
   * @remarks
   * The exact filter for the business user. This is not the platform tenant identity.
   * 
   * @example
   * user-001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      sessionId: 'sessionId',
      teamId: 'teamId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      sessionId: 'string',
      teamId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

