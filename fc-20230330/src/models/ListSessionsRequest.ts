// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSessionsRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  limit?: number;
  /**
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  /**
   * @example
   * aliasName1
   */
  qualifier?: string;
  /**
   * @example
   * test-session-id-1
   */
  sessionId?: string;
  /**
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

