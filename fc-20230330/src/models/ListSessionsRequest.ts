// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSessionsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of sessions to return. Default value: 20.
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
   * The alias or version of the function.
   * 
   * @example
   * aliasName1
   */
  qualifier?: string;
  /**
   * @remarks
   * The ID of the session used for filtering. If you specify this parameter, all active or expired status information associated with the session is returned.
   * 
   * @example
   * test-session-id-1
   */
  sessionId?: string;
  /**
   * @remarks
   * The session status to filter. By default, all session information in the Active or Expired state is returned. You can specify Active to retrieve only active session information, or specify Expired to retrieve only expired session information.
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

