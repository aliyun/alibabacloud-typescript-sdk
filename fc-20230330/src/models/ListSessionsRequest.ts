// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSessionsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of sessions to return. Default value: 20.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  /**
   * @remarks
   * The function alias or version information.
   * 
   * @example
   * aliasName1
   */
  qualifier?: string;
  /**
   * @remarks
   * The session ID to filter by. If specified, all Active or Expired status information associated with this session is returned.
   * 
   * @example
   * test-session-id-1
   */
  sessionId?: string;
  /**
   * @remarks
   * The session status to filter by. By default, all session information in Active or Expired status is returned. Set this parameter to Active to retrieve only active session information, or to Expired to retrieve only expired session information.
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

