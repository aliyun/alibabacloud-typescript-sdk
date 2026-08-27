// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatMessagesRequest extends $dara.Model {
  /**
   * @remarks
   * Set to V2 to route requests to the ROS Agent V2 backend.
   * 
   * @example
   * V2
   */
  agentVersion?: string;
  /**
   * @remarks
   * A compatibility field. V2 does not return a paged message array, and the service does not consume this field.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A compatibility field. V2 does not return a paged message array, and the service does not consume this field.
   * 
   * @example
   * CAES...
   */
  nextToken?: string;
  /**
   * @remarks
   * The session ID to query. You can only query sessions owned by the current user.
   * 
   * This parameter is required.
   * 
   * @example
   * 7f4e2a8c6d9b4a1f8e3c5b7d2a6f9012
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentVersion: 'AgentVersion',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentVersion: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

