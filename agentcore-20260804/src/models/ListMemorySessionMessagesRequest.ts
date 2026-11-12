// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemorySessionMessagesRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID. At least one of UserId or AgentId must be provided. The length is limited to 1 to 128 UTF-8 bytes. Forward slashes (/) and asterisks (*) are not allowed.
   * 
   * @example
   * agent-001
   */
  agentId?: string;
  /**
   * @remarks
   * The maximum number of records per page. Default value: 200. Valid values: 1 to 500.
   * 
   * @example
   * 200
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * eyJvZmZzZXQiOjIwMH0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The session ID. The length is limited to 1 to 128 UTF-8 bytes. Forward slashes (/) and asterisks (*) are not allowed.
   * 
   * This parameter is required.
   * 
   * @example
   * session-001
   */
  sessionId?: string;
  /**
   * @remarks
   * The user ID. At least one of UserId or AgentId must be provided. The length is limited to 1 to 128 UTF-8 bytes. Forward slashes (/) and asterisks (*) are not allowed.
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
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      sessionId: 'string',
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

