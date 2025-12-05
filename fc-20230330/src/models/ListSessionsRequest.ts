// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSessionsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of sessions to be returned. If this parameter is not specified, 20 sessions are returned by default.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The token for the next page.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  /**
   * @remarks
   * The function alias or version.
   * 
   * @example
   * aliasName1
   */
  qualifier?: string;
  /**
   * @remarks
   * The SessionId value to filter. If specified, all session information associated with this session ID in Active or Expired states is returned.
   * 
   * @example
   * test-session-id-1
   */
  sessionId?: string;
  /**
   * @remarks
   * The session status to filter. By default, information for all sessions in the Active and Expired states is returned. You can specify Active to retrieve only active sessions, or Expired to retrieve only expired sessions.
   * 
   * @example
   * Active
   */
  sessionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      nextToken: 'nextToken',
      qualifier: 'qualifier',
      sessionId: 'sessionId',
      sessionStatus: 'sessionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      qualifier: 'string',
      sessionId: 'string',
      sessionStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

